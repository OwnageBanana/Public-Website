<script setup>


</script>


<template>
  <h1> At home Pi Server</h1>

  <h2> introduction </h2>
  <p>
  Building a Pi server from the ground up has been a lot of things, primarily its been a bad decision!
  </p>

  <p>
  ... That is, if I were solely measuring the result on whether a non-technical person should do this, because what matters to them is something that works all the time,
  something they never have to think about. But to me, a budding tech professional, it has meant a lot more than that. Its been frustrating, yes, I do have to worry about it,
  it doesn't always work, but the learning experience of putting it together has been invaluable and outweighs any of these for me.
  </p>

  <p>
    Refreshing myself on practical networking and web hosting has seeded a new confidence for building future projects, learning more about DNS records, revisiting HTTPS and ssl and building out a local DNS was a
    journey that made the shoddy results worth it to me. Additionally this platform gives me a bouncing off point to build out some server code to explore more IoT projects,
    create home automation, put code to hardware and stop worrying about business requirements, creating more opportunities for me to learn and build on the knowledge I gained
    here without the pressure to pleasing someone else or meet a deadline.
  </p>

  <p>
  I want to make it clear that there are short comings to this approach, for the love of god don't run a real production webserver off of an SD card in a pi. Be careful about exposing any port to external traffic, consider a VLAN, there's no DDoS protection so some botnet could cook your Pi in a second, a good engineer knows that risks should be known and be prepared to handle the consequences.
  </p>
  <h2> pi setup</h2>

  Using A

  - raspberry PI 4 b 4gb
  - running raspian lite
  - nginx
  - Let's Encrypt with certbot
  - google domains
  - dnsmasq
  - and your own router

  <h2> find a Pi</h2>
  <p>
  Easier said than done right now but any pi3/4 will do fine, but you will want a Pi with at least:
  </p>

  <p>
  4GB of RAM, a charger that can supply 3A at 5V. I'd be wary about anything with less power because you do want your pi to be stable.
  </p>

  <p>
  Pis are magical and cannot be understated. Tiny, powerful little computers running linux, They are a bouncing off point off for a multitude of worlds in the Technoverse. Self hosting servers, IoT, automation, robotics, and thousands of projects online.
  </p>

  <p>
  In the installer have the image pre-configured for SSH, your wifi SSID and password to save time.
  </p>

  <p>
  The hotkey to open the advanced menu is <code>ctrl + shift + x</code>
  </p>

  <p>
  you can set a hostname if you like but your SSH will work without it if you use your Pi's private IP and we can configure your own later in the dns configuration
  </p>
  <h2> Nginx setup</h2>
  <p>
  nginx is actually mostly hands off in this installation. You can rely on certbot to configure your HTTPS routing for you.

  you install this on your pi with the regular apt commands you'd expect:
  </p>
  <code>
  sudo apt install nginx
  </code>

  <p>
  the nginx service should start after installation but you may restart it with
  </p>

  <code>
  sudo service nginx restart
  </code>

  <p>
  or reload the configuration file with
  </p>

  <code>
  nginx -s reload
  </code>

  <p>
  you can check it's status to see how it is running with
  </p>

  <code>
  sudo service nginx status
  </code>

  <p>
  check to see if the installation is working by going to your pi's private IP in your browser and you'll get a <code>Welcome to nginx!</code> message. Mine is 192.168.2.22. you can find it with <code>ifconfig</code>, it should be configured to the DCHP range of your router which is typically in 192.168.0.0/24, 192.168.1.0/24 or 192.168.2.0/24. We'll actually configure the DHCP server later to allocate a static IP for the pi.
  </p>

  <code>
  http://192.168.2.22
  </code>

  <h2> SSL and Certbot</h2>

  <p>
  I'm going to keep this section brief, thats because one of the most beloved free services online, Lets Encrypt, has done a great job of creating documentation and has a great utility tool that keeps your certs fresh and frisky.
  </p>

  <p>
  TLDR:<a href="https://certbot.eff.org/instructions?ws=nginx&os=debianbuster" target="none">instructions to using certbot on Debian 10 Buster</a> (Raspian's parent distro)
  </p>

  <p>
  Note you may be on Debain bullseye, the same instructions work for this version as well; my pi is on bullseye so its tested.
  </p>

  <p>
  the certbot util will actually modify your nginx conf file, adding details about SSL, all you need to do is specify the specific URLs that you want to add to your conf file to be managed for SSL certs. **Do all your domains at once** don't think you can get away with adding 1 domain at a time like I did, make sure to list them when prompted. list your domain as follows:
  </p>

  <code>
  sudo certbot --nginx -d example.com -d www.example.com
  </code>

  <p>
  if you don't do this it means you'll have to start reading cert bot docs when all you really want is SSL and not a detour down some snap installation tool that has nothing to do with your goal.
  </p>

  <p>
  wildcard certs are a step too far for my guide here, they let you get SSL certs automatically for subdomains like a <code>foo.domain.com</code> or <code>bar.domain.com</code>.
  </p>

  <p>
  after this step you won't be able to do much, you won't find that you suddenly have a SSL cert for your LAN IP address that you pi is on, ssl certs are inherently tied to a domain name. but we will see the fruits of our labor in the next section.
  </p>

  <h2> Your Router Settings</h2>

  <p>
  while you could also use the pi as a router, your isp has probably given you a lovely machine in a black plastic case to help with it. You may find it necessary if your router's settings are lacking but these are fairly basic things most routers should be able to do for you these days. we'll also the let router handle the DHCP reservation for us though this can be done with dnsmasq as well.
  </p>

  <p>
  your router will serve a website on it's IP. its probably the first or second IP in your local IP range (192.168.0.0, 192.168.0.1 etc.,. mine is 192.168.2.1), check the back of your router or online for a manual to find out how to log into it. If you're on your home network there will be a few things that need to be set on your router. It will forward traffic around in your local network and you will let it open ports from your PI to the WAN. you can host a domain from this IP if you're using a domain name service like google domains.
  </p>

  <p>
  Routers will share some common features, they will handle DHCP on your private network, they forward requests to a DNS server and handle basic security among other things.
  to host a website from your pi you must:
  </p>

  - grant your pi a reserved IP on the network, a DHCP reservation.
  - forward a port, from your router to be accessible to the WAN

  <h3> DHCP Reservation</h3>

  <p>
  We will configure the DHCP to grant your pi a reserved IP on the network, you'll want to reserve an IP in the DHCP range of your router.
  </p>

  <p>
  The Pi will always be given that IP when it connects to the router. Mine are found in basic settings for lan setup in DHCP reservation, you reserve the MAC address of your pi to the IP, which hopefully your router's settings make easy for you.
  </p>

  <p>
  Next you will set a port forwarding rule, in which you will forward the http port 80 from your pi's IP and the https port 443 from your pi's IP. Those are the default ports nginx will serve your website from.
  </p>

  <p>
  With that you should be able to reach your nginx welcome page from your public IP, if you see it things have gone to plan and you can move on.
  </p>

  <h2> Domain Name Record</h2>

  <p>
  Following this you will want a domain to serve your files through, find a domain name provider that will keep a record your domain name and that will act as a public name server. You'll need to create
  An A record for your domain that references your public IP.
  </p>

  <p>
  with your mobile phone disconnected from your wifi, try and reach your webserver at the http:// or https:// address, if it resolves that means we have done everything right so far!
  </p>

  <h2> Local DNS</h2>

  <p>
  this will be the last piece of the puzzle to getting your website and domain working how you expect. I suspect you've tried it but on your wifi you won't be able to enter your domain to load your webserver. this is because of a NAT loopback. your DNS is resolving to your own ip, and your router tries to resolve this through DNS and creates a nasty infinity loop in the network of and unresolving domain for you. so fixing this means you'll need a LAN DNS that your router relies on to get the proper dns records so we can create a custom dns record to serve the LAN IP of your pi when requesting any of your domains.
  </p>

  <p>
  For this we'll use dnsmasq, a lightweight DNS you can install on your pi with a simple apt install.
  </p>

  <code>
  sudo apt install dnsmasq
  </code>

  <p>
  from here you'll find your dnsmasq.conf file inside of your <code>/etc/</code> directory and you'll need to get a basic configuration going. I've listed mine below. A quick useful command to parse these sorts of files full of developer comments and just see what is actually being set is <code>grep -v '#' /etc/dnsmasq.conf | sed -r '/^\s*$/d'</code>.
  </p>

  <p>
  some things of note:
  </p>

  <p>
  we are configuring a new DNS but we still want some real DNS's that have the WWW of domains so these lines set google's DNS as a fallback.
  </p>

  <code>
    <pre>
server=8.8.8.8
server=8.8.4.4
</pre>
  </code>

  <p>
  local lets us resolve LAN IPs we have configured domains for to look at the local.* domains before the WAN. these domains get configured in the etc/hosts file
  </p>

  <code>
    <pre>
  local=/local/
</pre>
  </code>

  <p>
  address sets the actual local DNS records, the domains the address where to find them
  </p>

  <code>
    <pre>
address=/adammills.dev/192.168.2.22
address=/adhocslime.com/192.168.2.22
address=/adhocslime.dev/192.168.2.22
</pre>
  </code>

  <h2> dnsmasq.conf File</h2>

  <code>
    <pre>
# Never forward plain names (without a dot or domain part)
domain-needed

# Never forward addresses in the non-routed address spaces.
bogus-priv

# If you don't want dnsmasq to read /etc/resolv.conf or any other
# file, getting its servers from this file instead (see below), then
# uncomment this.
no-resolv

# Add other name servers here, with domain specs if they are for
# non-public domains.
#server=/
server=8.8.8.8
server=8.8.4.4

# Add local-only domains here, queries in these domains are answered
# from /etc/hosts or DHCP only.
local=/local/

# Add domains which you want to force to an IP address here.
# The example below send any host in double-click.net to a local
# web-server.
address=/adammills.dev/192.168.2.22
address=/adhocslime.com/192.168.2.22
address=/adhocslime.dev/192.168.2.22

# Set the domain for dnsmasq. this is optional, but if it is set, it
# does the following things.
# 1) Allows DHCP hosts to have fully qualified domain names, as long
#     as the domain part matches this setting.
# 2) Sets the "domain" DHCP option thereby potentially setting the
#    domain of all systems configured by DHCP
# 3) Provides the domain part for "expand-hosts"
domain=local
</pre>
  </code>

  <h2> Hosts File</h2>

  <p>
  as mentioned in the above section, you need can configure some local addresses as well.
  </p>

  <code>
    <pre>
#defaults
127.0.0.1       localhost
::1             localhost ip6-localhost ip6-loopback
ff02::1         ip6-allnodes
ff02::2         ip6-allrouters
127.0.1.1       raspberrypi
#my configuration
192.168.2.1     router.local
192.168.2.22    pi.local
192.168.2.22    adammills.dev
192.168.2.22    adhocslime.dev
192.168.2.22    adhocslime.com
</pre>
  </code>

  <p>
  And thats it! you should have a good working knowledge of how your server is hosting files, serving your documents, routing traffic and managing DNS! you should have a domain configured and SSL certs. I know this wasn't an all encompassing and comprehensive guide, and you may find some issues. I'd like to help you debug if so get in contact and we can learn together.
  </p>
  <img style="margin-bottom:2rem;" src="\src\assets\images\pi_on_floor_small.jpg" alt="image of a raspberry pi on my dirty floor" />

</template>


<style>
</style>
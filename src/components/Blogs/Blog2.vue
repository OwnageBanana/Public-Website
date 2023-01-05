<script setup>


</script>


<template>
  <h1>Building a Keyboard</h1>

  <h2> Work in progress!</h2>
  <p>
    this project is a lot of things I didn't intend it to be, I set out to just make a split keyboard but went down the road of learning rust AND learning embedded programming, taking on rusts alpha embedded-hal ecosystem,
    had to learn pcb design and manufacturing, learning to read data sheets, etc,etc,etc,. its been a long road.
  </p>
  <p>
    <a href="https://github.com/OwnageBanana?tab=repositories" target="none"> check out my github for my progress!</a> I'm currently writing a driver for the IO expander, I've published (very messy) unfinished macropad code with lots left to do, partially designed the keyboards pcb, and acquired most of my materials.
  </p>

  <!-- This page is a total WIP so if you're looking at the code, don't judge on how lazy this is -->

  <div style="display:flex; flex-wrap: wrap; margin-bottom:2rem; gap:4rem;">
    <div style="width:40%; background-color:var(--main-light)">
      <video src="@assets/videos/clack_padding.mp4" controls style="width:100%;"/>
      <p>video of how I'm using the display currently. the rp2040's second core's only job is to do this lol</p>
    </div>
    <div style="width:40%;background-color:var(--main-light)">
      <img src="@assets/images/3d_printed_pcb_small.jpg" alt="Image of a 3d printed pcb" style="width:100%;"/>
      <p> test pcb to feel out the layout. I exported this from the pcb viewer in Kicad into Freecad and then 3d printed it.</p>
    </div>
    <div style="width:40%;background-color:var(--main-light)">
      <img src="@assets/images/clack_pad_small.jpg" alt="" style="width:100%;"/>
      <p> macropad to test writing the firmware. things are going slow, rust is a huge pain in my arse right now.</p>
    </div>
    <div style="width:40%;background-color:var(--main-light)">
      <img src="@assets/images/io_expander.jpg" alt="" style="width:100%;"/>
      <p> IO expander dev board to write a driver, each half will be run by one of these chips. almost done, just need to clean my code.</p>
    </div>
    <div style="width:100%;background-color:var(--main-light)">
      <video src="@assets/videos/leds_soldered.mp4" alt="" controls style="width:100%; "/>
      <p> This first video is actually my <i>second revision</i> of the actual keyboard developed and assembled, but not all is as it seems under the hood</p>
    </div>
    <div style="display:flex; width:100%; background-color:var(--main-light)">
      <video src="@assets/videos/janky_linear_regulator.mp4" alt="" controls style="width:360px"/>
      <div>
        <p > this video is me demoing a hack I made to get <code>rev 2</code> working. So I went through hell in this step, because I:
          <ol>
            <li> Soldered the IO expanders backwards.</li>
            <li>swapped VDD and VSS so the boards are totally garbage.</li>
        </ol>
          but for the sake of saving money and not invoking a globally distributed network of manufacturing and shipping infrastructure to have new boards shipped to me because I put the silly little lines no the wrong end of my little not-for-eating chips, I cut the traces, lifted pins and put bodge wire across to the correct connections  </p>
        <p> after that debacle of wasting chips, I found that I had only 1.65 volts on the left half, compared to the 3.3 on the right. So something went awry, whether I didn't join the CC pins that I can 3.3V through did it or theres some other thing, I still don't know. but by adding a 3.3V linear regulator driven from the 5V line I was able to get everything working! </p>
      </div>
    </div>
  </div>

</template>


<style>
</style>
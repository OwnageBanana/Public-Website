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

  <div style="display:flex; flex-wrap: wrap; margin-bottom:2rem;">
    <div style="width:40%;">
      <p>video of how I'm using the display currently. the rp2040's second core's only job is to do this lol</p>
      <video src="\src\assets\images\clack_padding.mp4" controls style="width:100%;"/>
    </div>
    <div style="width:40%;">
      <p> test pcb to feel out the layout. I exported this from the pcb viewer in Kicad into Freecad and then 3d printed it.</p>
      <img src="\src\assets\images\3d_printed_pcb_small.jpg" alt="Image of a 3d printed pcb" style="width:100%;"/>
    </div>
    <div style="width:40%;">
      <p> macropad to test writing the firmware. things are going slow, rust is a huge pain in my arse right now.</p>
      <img src="\src\assets\images\clack_pad_small.jpg" alt="" style="width:100%;"/>
    </div>
    <div style="width:40%;">
      <p> IO expander dev board to write a driver, each half will be run by one of these chips. almost done, just need to clean my code.</p>
      <img src="\src\assets\images\io_expander.jpg" alt="" style="width:100%;"/>
    </div>
  </div>

</template>


<style>
</style>
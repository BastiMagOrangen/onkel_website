<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="header">
      <img src="../assets/logo2.png" alt="" class="logo">
      <input type="checkbox" id="check">
      <label for="check" class="icon">
        <i class='bx bx-menu' id="menu-icon"></i>
        <i class="bx bx-x" id="close-icon"></i>
      </label>
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/werdegang">Werdegang</RouterLink>
        <RouterLink to="/wahlarzt">Wahlarzt</RouterLink>
        <RouterLink to="/leistungen">Leistungen</RouterLink>
        <RouterLink to="/ordination">Ordination</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <h1>a</h1>
</template>
  
<style scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.3rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
.header::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .1);
  backdrop-filter: blur(50px);
  z-index: -1;
}
.logo{
  width: 300px;
}
.navbar a{
  font-size: 1.3rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  margin-left: 2.5rem;
}
#check{
  display: none;
}
.icon{
  right: 5%;
  position: absolute;
  font-size: 2.8rem;
  color: white;
  cursor: pointer;
  display: none;
}

/* Media Queries */
@media (max-width: 1140px){
  .header{
    padding: 1.3rem 2.5%;
  }
}

@media (max-width: 1080px){
  .logo{
    width: 200px;
  }
}

@media (max-width: 980px){
  .logo{
    width: 100px;
  }
}

@media (max-width: 870px){
  .logo{
    width: 250px;
  }
  .icon{
    display: inline-flex;
  }
  #check:checked~.icon #menu-icon{
    display: none;
  }
  .icon #close-icon{
    display: none;
  }
  #check:checked~.icon #close-icon{
    display: block;
  }
  .navbar{
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0;
    background: rgba(0, 0, 0, .1);
    backdrop-filter: blur(50px);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    overflow: hidden;
    transition: .3s ease;
  }
  #check:checked~.navbar{
    height: 17.7rem;
  }
  .navbar a{
    display: block;
    font-size: 1.1rem;
    margin: 1.5rem 0;
    text-align: center;
    transform: translateY(-50px);
    transition: .3s ease;
  }
  #check:checked~.navbar a{
    transform: translateY(0);
  }
}
</style>

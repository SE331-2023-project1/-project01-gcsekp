<template>
  <div class="main-container flex flex-col w-full bg-none">
    <header class="fixed-header z-10 p-5 m-5 py-2 bg-none">
      <div class="wrapper flex flex-col items-center justify-center">
        <nav class="font-mono text-lg text-center" id="menu">
          <RouterLink class="nav-link details-button" to="/" active-class="active"
            >Student</RouterLink
          >
          <span class="mx-2 text-gray-400"></span>
          <RouterLink class="nav-link details-button" to="/teacher" active-class="active"
            >Teacher</RouterLink
          >
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
@media (min-width: 1246px) {
  .fixed-header {
    @apply py-2 px-4 justify-between;
  }

  nav {
    @apply text-base text-left;
  }
}
#menu {
  @apply flex items-center font-semibold py-2 px-4 text-lg bg-none rounded-md text-white hover:text-white transform hover:scale-105;
}
.nav-link {
  @apply inline-block px-4 py-2 text-blue-700 no-underline transition duration-200 hover:text-yellow-500;
}

/* Apply styles to the active link */
.active {
  @apply font-bold underline  hover:bg-none hover:text-white transform hover:scale-105;
}
</style>

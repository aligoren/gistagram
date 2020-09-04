<template>
    <div>
        <navbar />
        <feed />
    </div>
</template>

<script>
// https://github.com/codingvenue/instagram-hompage-clone-bootstrap
export default {
    name: 'Home',
    components: {
        'navbar': () => import("./Navbar"),
        'feed': () => import("./Feed")
    },
    data() {
        return {

        }
    }
}
</script>
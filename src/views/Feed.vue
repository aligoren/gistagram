<template>
    <div class="mt-4">
        <div class="container d-flex justify-content-center">
            <div class="col-12">
                <div class="row">
                    <div class="col-12">
                        <posts :gists="gists" />
                    </div>
                    <!-- <div class="col-4">
                        <right-panel />
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import Posts from './Posts.vue'
// import RightPanel from './RightPanel.vue'

export default {
    name: 'Feed',
    components: {
        Posts,
        // RightPanel
    },
    data() {
        return {
            gists: []
        }
    },
    mounted() {
        this.fetchGists()
    },
    methods: {
        async fetchGists() {
            let gists = await (await fetch('https://api.github.com/gists')).json()

            this.gists = gists.map(gist => {
                
                const fileKeys = Object.keys(gist.files)
                const index = 0
                const file = gist.files[fileKeys[index]]
                
                if(file.language && file.type != 'text/plain') {
                    gist.language = file.language
                    return gist
                }

            }).filter(gist => gist)
        }
    }
}
</script>
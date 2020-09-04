<template>
    <!-- START OF STORIES -->
    <div class="card">
        <div class="card-body d-flex justify-content-start">
            <ul class="list-unstyled mb-0">
                <li v-for="story in stories" :key="story.id" class="list-inline-item">
                    <button class="btn p-0 m-0">
                        <div class="d-flex flex-column align-items-center">
                            <div
                                class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border border-danger story-profile-photo">
                                <a :href="story.owner.html_url" target="_blank">
                                    <img :src="story.owner.avatar_url" alt="..."
                                    style="transform: scale(1.5); width: 100%; left: 0;">
                                    <!-- transform: scale(1.5); width: 100%; position: absolute; left: 0; -->
                                </a>
                            </div>
                            <small>{{ story.owner.login }}</small>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
    <!-- END OF STORIES -->
</template>

<script>
export default {
    name: 'Stories',
    props: {
        stories: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {}
    }
}
</script>
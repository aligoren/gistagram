<template>
    <div>
        <stories :stories="stories" />
        <!-- START OF POSTS -->
        <div v-for="gist in gists" :key="gist.id" class="d-flex flex-column mt-4 mb-4">

            <div class="card">
                <div class="card-header p-3">
                    <div class="d-flex flex-row align-items-center">
                        <div
                            class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border border-danger post-profile-photo mr-3">
                            <img :src="gist.owner.avatar_url" alt="..."
                                style="transform: scale(1.5); width: 100%; position: absolute; left: 0;">
                        </div>
                        <span class="font-weight-bold"><a :href="gist.owner.html_url" target="_blank">{{ gist.owner.login }}</a></span>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="embed-responsive embed-responsive-1by1 code-card">
                        <!-- <img class="embed-responsive-item" :src="gist.image" /> -->
                        <iframe
                        class="embed-responsive-item"
                        :src="`https://carbon.now.sh/embed/${gist.id}`"
                        style="width:100%; height: 4902px; border:0; transform: scale(1); overflow:hidden;"
                        scrolling="no"
                        sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </div>

                    <div class="d-flex flex-row justify-content-between pl-3 pr-3 pt-3 pb-1">
                        <ul class="list-inline d-flex flex-row align-items-center m-0">
                            <li class="list-inline-item">
                                <button class="btn p-0">
                                    <svg width="1.6em" height="1.6em" viewBox="0 0 16 16"
                                        class="bi bi-heart-fill text-danger" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                         <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg>
                                </button>
                            </li>
                            <li class="list-inline-item ml-2">
                                <button disabled class="btn disabled p-0">
                                    <svg width="1.6em" height="1.6em" viewBox="0 0 16 16"
                                        class="bi bi-chat" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                        <div>
                            <button class="btn p-0">
                                <svg width="1.6em" height="1.6em" viewBox="0 0 16 16" class="bi bi-hdd"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M14 9H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM2 8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z" />
                                    <path
                                        d="M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                    <path fill-rule="evenodd"
                                        d="M4.094 4a.5.5 0 0 0-.44.26l-2.47 4.532A1.5 1.5 0 0 0 1 9.51v.99H0v-.99c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198v.99h-1v-.99a1.5 1.5 0 0 0-.183-.718L12.345 4.26a.5.5 0 0 0-.439-.26H4.094z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="pl-3 pr-3 pb-2">
                        <small class="d-block mb-2 mt-3"><a class="text-muted" target="_blank" :href="`https://github.com/topics/${gist.language.toLowerCase()}`">#{{ gist.language }}</a></small>
                        <strong class="d-block"><a class="text-muted" :href="gist.owner.html_url" target="_blank">{{ gist.owner.login }}</a></strong>
                        <p class="d-block mb-1">{{ gist.description }}. <a :href="gist.html_url" target="_blank">Click</a> to see my gist</p>
                        <button class="btn p-0">
                            <span class="text-muted"><a class="text-muted" :href="gist.html_url" target="_blank">View all {{ gist.comments }} comments</a></span>
                        </button>
                        <div class="divider"></div>
                        <small class="text-muted">{{ timeSince(new Date(gist.created_at)) }}</small>
                    </div>

                    <div class="position-relative comment-box">
                        <form target="_blank" :action="`${gist.html_url}`" method="get">
                            <input disabled class="w-100 border-0 p-3 input-post" placeholder="You can't send comment for this post...">
                            <!-- <button disabled class="btn btn-default position-absolute btn-ig">Post</button> -->
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <!-- END OF POSTS -->
    </div>
</template>

<script>

import Stories from './Stories.vue'

export default {
    name: 'Posts',
    components: {
        Stories
    },
    props: {
        gists: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {}
    },
    computed: {
        stories() {
            return this.gists.slice(0, 10)
        }
    },
    methods: {
        timeSince(date) {

            const seconds = Math.floor((new Date() - date) / 1000);

            let interval = seconds / 31536000;

            if (interval > 1) {
                return Math.floor(interval) + " years";
            }
            interval = seconds / 2592000;
            if (interval > 1) {
                return Math.floor(interval) + " months";
            }
            interval = seconds / 86400;
            if (interval > 1) {
                return Math.floor(interval) + " days";
            }
            interval = seconds / 3600;
            if (interval > 1) {
                return Math.floor(interval) + " hours";
            }
            interval = seconds / 60;
            if (interval > 1) {
                return Math.floor(interval) + " minutes";
            }
            return Math.floor(seconds) + " seconds";
        }
    }
}
</script>
<template>
    <div>
        <div class="d-flex flex-row align-items-center">
            <div
                class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border sidenav-profile-photo">
                <img src="assets/images/profiles/profile-6.jpg" alt="..."
                    style="transform: scale(1.5); width: 100%; position: absolute; left: 0;">
            </div>
            <div class="profile-info ml-3">
                <span class="profile-info-username">codingvenue</span>
                <span class="profile-info-name">Coding Venue</span>
            </div>
        </div>

        <div class="mt-4">
            <div class="d-flex flex-row justify-content-between">
                <small class="text-muted font-weight-normal">Suggestions For You</small>
                <small>See All</small>
            </div>
            <div>
                <div class="d-flex flex-row justify-content-between align-items-center mt-3 mb-3">
                    <div class="d-flex flex-row align-items-center">
                        <div
                            class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border sugest-profile-photo">
                            <img src="assets/images/profiles/profile-3.jpg" alt="..."
                                style="transform: scale(1.5); width: 100%; position: absolute; left: 0;">
                        </div>
                        <strong class="ml-3 sugest-username">instagram</strong>
                    </div>
                    <button class="btn btn-primary btn-sm p-0 btn-ig ">Follow</button>
                </div>

                <div class="d-flex flex-row justify-content-between align-items-center mt-3 mb-3">
                    <div class="d-flex flex-row align-items-center">
                        <div
                            class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border sugest-profile-photo">
                            <img src="assets/images/profiles/profile-4.png" alt="..."
                                style="transform: scale(1.5); width: 100%; position: absolute; left: 0;">
                        </div>
                        <strong class="ml-3 sugest-username">dccomics</strong>
                    </div>
                    <button class="btn btn-primary btn-sm p-0 btn-ig ">Follow</button>
                </div>

                <div class="d-flex flex-row justify-content-between align-items-center mt-3 mb-3">
                    <div class="d-flex flex-row align-items-center">
                        <div
                            class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border sugest-profile-photo">
                            <img src="assets/images/profiles/profile-5.jpg" alt="..."
                                style="transform: scale(1.5); width: 100%; position: absolute; left: 0;">
                        </div>
                        <strong class="ml-3 sugest-username">thecw</strong>
                    </div>
                    <button class="btn btn-primary btn-sm p-0 btn-ig">Follow</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RightPanel',
    data() {
        return {}
    }
}
</script>
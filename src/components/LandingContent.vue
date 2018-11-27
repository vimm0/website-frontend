<template>
    <div class="landing-content">
        <div class="image-container">
            <img alt="Vue logo" src="../assets/school-banner.jpg">
            <p class="title-text-over is-size-1 has-text-white-ter has-text-weight-semibold">Lorem ipsum elit.</p>
            <p class="content-text-over is-size-6 has-text-white-ter">Morbi tristique massa nulla, nec hendrerit quam
                iaculis ac. Praesent a lorem at arcu porttitor pharetra. Suspendisse ante nibh, venenatis vel laoreet
                sit amet, iaculis at diam. Integer finibus justo a turpis fringilla cursus. Integer finibus justo a
                turpis fringilla cursus. Fusce ut dui et ante pellentesque consectetur. Maecenas ante purus, lacinia nec
                ex ac, pretium pulvinar lacus. Duis elementum tortor at ipsum tempus, faucibus porttitor justo maximus.
                Duis bibendum urna et libero vulputate, et tempus magna varius. Suspendisse in magna dui. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eu leo enim.</p>
            <div class="share-links has-text-white-ter">
                <a class="social-button"
                   :href="`https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`"
                   target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3 8h-1.35c-.54 0-.65.22-.65.78V10h2l-.2 2H13v7h-3v-7H8v-2h2V7.7c0-1.78.93-2.7 3.03-2.7H15v3z"></path>
                    </svg>
                </a>
                <a class="social-button" :href="`https://twitter.com/intent/tweet?url=${url};text=konichiwa`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm6.07 9.64A8.12 8.12 0 0 1 9.9 18.2a8.13 8.13 0 0 1-4.4-1.3 5.78 5.78 0 0 0 4.25-1.18 2.88 2.88 0 0 1-2.68-2c.45.09.9.06 1.3-.05a2.88 2.88 0 0 1-2.3-2.85c.38.22.82.35 1.3.36a2.88 2.88 0 0 1-.9-3.83 8.15 8.15 0 0 0 5.92 3 2.88 2.88 0 0 1 4.9-2.62 5.73 5.73 0 0 0 1.82-.7 2.88 2.88 0 0 1-1.26 1.59 5.73 5.73 0 0 0 1.65-.45 5.77 5.77 0 0 1-1.43 1.49z"></path>
                    </svg>
                </a>
            </div>
            <div class="container">
                <div class="columns landing-card-columns">
                    <div class="column is-one-third">
                        <div class="card">
                            <div class="card-content card-content-1 has-text-white-ter has-text-centered">
                                <img src="../assets/slide/slide-bottom-01.png" alt="professional-teachers"
                                     class="btm-item-icon"
                                     style="">
                                <p class="is-size-4 has-text-weight-semibold">Professional Teachers</p>
                                <div class="content is-size-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                                    mauris.
                                    <br>
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                    <br>
                                    <a class="mt-1 is-size-5 is-uppercase has-text-white-ter">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-third">
                        <div class="card">
                            <div class="card-content card-content-2 has-text-white-ter has-text-centered">
                                <img src="../assets/slide/slide-bottom-02.png" alt="learn-anywhere-online"
                                     class="btm-item-icon">
                                <p class="is-size-4 has-text-weight-semibold">Learn Anywhere Online</p>
                                <div class="content is-size-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                                    mauris.
                                    <br>
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                    <br>
                                    <a class="mt-1 is-size-5 is-uppercase has-text-white-ter">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-third">
                        <div class="card">
                            <div class="card-content card-content-3 has-text-white-ter has-text-centered">
                                <img src="../assets/slide/slide-bottom-03.png" alt="graducation-certificate"
                                     class="btm-item-icon">
                                <p class="is-size-4 has-text-weight-semibold">Graduation Certificate</p>
                                <div class="content is-size-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                                    mauris.
                                    <br>
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                    <br>
                                    <a class="mt-1 is-size-5 is-uppercase has-text-white-ter">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <!--<p class="is-size-3 has-text-centered">Sed quis ligula efficitur, convallis nisi ultricies, varius felis. Ut-->
            <!--bibendum, sapien ac tristique venenatis, tellus sem tempor arcu, faucibus commodo ante tellus sed-->
            <!--justo.</p>-->
            <!--<p class="is-size-6 has-text-centered">Ut bibendum, sapien ac tristique venenatis, tellus sem tempor arcu,-->
            <!--faucibus commodo ante tellus sed justo. In turpis velit, mattis nec vehicula at, gravida eget erat.-->
            <!--Morbi-->
            <!--feugiat vel lorem eget malesuada. Curabitur eget vulputate risus. Phasellus faucibus sagittis efficitur.-->
            <!--Pellentesque faucibus libero in nibh elementum elementum. Nullam ultricies tellus eget purus feugiat,-->
            <!--vitae-->
            <!--posuere velit accumsan. Nunc placerat venenatis ullamcorper. Ut imperdiet imperdiet velit. In odio sem,-->
            <!--placerat non mattis at, aliquet sed velit. Maecenas bibendum neque vitae lorem laoreet, sed ornare diam-->
            <!--suscipit. Aliquam erat volutpat. Cras malesuada nunc et tincidunt accumsan. Quisque consequat sit amet-->
            <!--odio-->
            <!--sit amet feugiat. Cras posuere odio quam, venenatis euismod eros laoreet accumsan. Phasellus sed-->
            <!--pellentesque turpis.</p>-->
        </div>

    </div>
</template>
<script>
 export default {
        name: 'landing-content',
        data() {
            return {
                url: 'https://vimm0.github.io/'
            }
        }
    }
</script>
<style lang="scss">

</style>

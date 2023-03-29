<template>
    <div class="py-4">
        <div class="container">
            <div class="row">
                <!-- Main Content -->
                <main class="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                    <div class="box shadow-sm rounded bg-white mb-3 osahan-chat">
                        <div class="row border-bottom m-0">
                            <div class="border-right col-lg-5 col-xl-4 px-0">
                                <h5 class="pl-3 pt-3 pr-3 mb-0 pb-3">Messaging</h5>
                            </div>
                        
                            <div class="col-lg-7 col-xl-8 px-0">
                                <div class="p-3 d-flex align-items-center osahan-post-header">
                                    <div class="font-weight-bold mr-1 overflow-hidden">
                                        <div class="text-truncate">Carl Jenkins
                                        </div>
                                        <div class="small text-truncate overflow-hidden text-black-50">Askbootstap.com - Become a Product Manager with super power</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row m-0">
                            <div class="border-right col-lg-5 col-xl-4 px-0">
                                <div class="osahan-chat-left">
                                    <div class="position-relative icon-form-control p-3 border-bottom">
                                        <i class="feather-search position-absolute"></i>
                                        <input placeholder="Search messages" type="text" class="form-control">
                                    </div>

                                    <div class="osahan-chat-list">
                                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden" style="    cursor: pointer;" v-for="item in userList" @click.prevent="selectUserMessage(item.user.id)">
                                            <div class="dropdown-list-image mr-3">
                                                <img v-if="item.profile_image" class="rounded-circle" :src="item.profile_image" :alt="item.id">
                                                <img v-else class="rounded-circle" :src="$store.state.avatar" :alt="$store.state.alt">
                                            </div>

                                            <div class="font-weight-bold mr-1 overflow-hidden">
                                                <div class="text-truncate">{{item.first_name}} {{item.middle_name}} {{item.last_name}}</div>
                                                <div class="small text-truncate overflow-hidden text-black-50"><i class="feather-check text-primary"></i>{{item.occupation}}</div>
                                            </div>
                                            <span class="ml-auto mb-auto">
                                               <div class="text-right text-muted pt-1 small">00:21PM</div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <!-- <div class="chat-history">
                                <ul>
                                    <li class="clearfix" v-for="message in userMessages.messages" :key="message.id">
                                        <div class="message-data align-right">
                                            <span class="message-data-time" >{{message.created_at}}</span> &nbsp; &nbsp;
                                            <span class="message-data-name" >{{message.user.name}}</span><i class="fa fa-circle me"></i>
                                        </div>
                                        <div :class="`message float-right ${message.user.id==userMessages.user.id ? 'other-message' : 'my-message'}`">
                                            {{message.message}}
                                        </div>
                                    </li>
                                </ul>
                            </div> -->






                            <div class="col-lg-7 col-xl-8 px-0">
                                <div class="osahan-chat-box p-3 bg-light">
                                    <p class="hr-lines">DEC 21, 2020</p>
                                    <template v-for="message in userMessages.messages" :key="message.id">
                                        <div class="align-items-center osahan-post-header" v-if="message.user.id == auth_user_id">
                                            <!-- <div > -->
                                                <div class="w-75 p-3" style="background: lavender">
                                                    <div class="text-truncate">
                                                        <span class="font-weight-bold" style="font-size:14px;">{{ message.user.name }}</span>
                                                        <span class="small text-muted"> - 00:21PM</span>
                                                    </div>
                                                    <p>{{ message.message }}</p>
                                                </div>
                                            <!-- </div> -->

                                            <!-- <div >
                                                <div class="w-75 p-3 float-right" style="background: antiquewhite">
                                                    <div class="text-truncate">
                                                        <span class="font-weight-bold" style="font-size:14px;">{{ message.user.name }} </span>
                                                        <span class="small text-muted"> - 00:21PM</span>
                                                    </div>
                                                    <p>{{ message.message }}</p>
                                                </div>
                                            </div> -->
                                        </div>

                                        <div class="align-items-center osahan-post-header float-right" v-else>
                                            <!-- <div v-if="message.user.id == auth_user_id">
                                                <div class="w-75 p-3" style="background: lavender">
                                                    <div class="text-truncate">
                                                        <span class="font-weight-bold" style="font-size:14px;">{{ message.user.name }}</span>
                                                        <span class="small text-muted"> - 00:21PM</span>
                                                    </div>
                                                    <p>{{ message.message }}</p>
                                                </div>
                                            </div> -->

                                            <!-- <div v-else> -->
                                                <div class="w-75 p-3 " style="background: antiquewhite">
                                                    <div class="text-truncate">
                                                        <span class="font-weight-bold" style="font-size:14px;">{{ message.user.name }} </span>
                                                        <span class="small text-muted"> - 00:21PM</span>
                                                    </div>
                                                    <p>{{ message.message }}</p>
                                                </div>
                                            <!-- </div> -->
                                        </div>
                                    </template>
                                </div>

                                <form @submit.prevent="submit">
                                    <div class="w-100 border-top border-bottom">
                                        <textarea v-model="message" placeholder="Write a message…" class="form-control border-0 p-3 shadow-none" rows="2"></textarea>
                                    </div>

                                    <div class="p-3 d-flex align-items-center">
                                        <div class="overflow-hidden">
                                            <button type="button" class="btn btn-light btn-sm rounded">
                                                <i class="feather-image"></i>
                                            </button>
                                            <button type="button" class="btn btn-light btn-sm rounded">
                                                <i class="feather-paperclip"></i>
                                            </button>
                                            <button type="button" class="btn btn-light btn-sm rounded">
                                                <i class="feather-camera"></i>
                                            </button>
                                        </div>

                                        <span class="ml-auto">
                                            <button type="submit" class="btn btn-primary btn-sm rounded">
                                                <i class="feather-send"></i>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>

                <aside class="col col-xl-3 order-xl-2 col-lg-12 order-lg-2 col-12">
                    <div class="box mb-3 shadow-sm border rounded bg-white list-sidebar">
                        <div class="box-title p-3">
                            <h6 class="m-0">Manage my network</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <a href="#">
                                <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-users mr-2 text-dark"></i> Connections <span class="ml-auto font-weight-bold">68</span></li>
                            </a>
                            <a href="#">
                                <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-book mr-2 text-dark"></i> Contacts <span class="ml-auto font-weight-bold">869</span></li>
                            </a>
                            <a href="#">
                                <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-user-check mr-2 text-dark"></i> People I Follow <span class="ml-auto font-weight-bold">156</span></li>
                            </a>
                            <a href="#">
                                <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-message-circle mr-2 text-dark"></i> Groups <span class="ml-auto font-weight-bold">15</span></li>
                            </a>
                            <a href="#">
                                <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-clipboard mr-2 text-dark"></i> Page <span class="ml-auto font-weight-bold">3</span></li>
                            </a>
                            <a href="#">
                                <li class="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i class="feather-tag mr-2 text-dark"></i> Hashtag <span class="ml-auto font-weight-bold">8</span></li>
                            </a>
                        </ul>
                    </div>
                    <div class="box shadow-sm mb-3 border rounded bg-white ads-box text-center">
                        <div class="image-overlap-2 pt-4">
                            <img :src="$store.state.avatar" class="img-fluid rounded-circle shadow-sm" :alt="$store.state.alt">
                            <img :src="$store.state.avatar" class="img-fluid rounded-circle shadow-sm" :alt="$store.state.alt">
                        </div>
                        <div class="p-3 border-bottom">
                            <h6 class="text-dark">Gurdeep, grow your career by following <span class="font-weight-bold"> Askbootsrap</span></h6>
                            <p class="mb-0 text-muted">Stay up-to industry trends!</p>
                        </div>
                        <div class="p-3">
                            <button type="button" class="btn btn-outline-primary btn-sm pl-4 pr-4"> FOLLOW </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie';

export default {
    name: "Messages",

    data() {
        return {
            backendUrl: this.$store.state.backendUrl,
            auth_alumni_id : Cookies.get('alumniIdCookie'),
            auth_user_id : Cookies.get('authIdCookie'),
            userList: [],
            userMessages: [],
        };
    },

    mounted() {
        // this.getAuthenticateUser();
        this.getConnectionUsers();

        window.Echo.channel('channel')
        .listen('Hello', (e) => {
            console.log(e);
        })
    },

    methods: {
        // get connection friend response
        getConnectionUsers() {
            axios.post(`${this.backendUrl}/get-connection-friends`, { auth_id: this.auth_alumni_id })
            .then((response) => {
                this.userList = response.data.data
            })
            .catch((e) => {
                console.log(e);
            });
        },

        // select user messages response
        selectUserMessage(userId){
            axios.get(`${this.backendUrl}/user-message/${userId}/${this.auth_user_id}`)
            .then((response) => {
                this.userMessages = response.data
                console.log(this.userMessages);
            })
            .catch((e) => {
                console.log(e);
            });
        },
    },
}
</script>

<style>
    .hr-lines{
        position: relative;
        max-width: 500px;
        text-align: center;
    }

    .hr-lines:before{
        content:" ";
        height: 0.5px;
        width: 200px;
        background: rgb(200, 200, 200);
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
    }

    .hr-lines:after{
        content:" ";
        height: 0.5px;
        width: 200px;
        background: rgb(200, 200, 200);
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
    }
    
</style>
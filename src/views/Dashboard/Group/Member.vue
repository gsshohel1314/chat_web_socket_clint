<template>
  <div id="member">
    <div class="box shadow-sm border rounded bg-white mb-3">
        <template v-for="(groupMember,index) in groupMembers">
            <div class="d-flex box-title border-bottom p-3" v-if="index < 1">
                <h5 class="m-0">{{ groupMember.group.name }}</h5>
            </div>
        </template>

        <div class="box-body p-3">
            <div class="d-flex align-items-center osahan-post-header people-list mb-3" v-for="(groupMember,index) in groupMembers">
                <router-link :to="{ path: 'another-profile', query: { username: groupMember.alumni.username, id: groupMember.alumni.id } }">
                    <div class="mr-3" v-if="groupMember.alumni.alumni">
                        <img class="rounded-circle invitation-dropdown-list-image" :src="groupMember.alumni.alumni.source" :alt="$store.state.alt">
                    </div>
                    <div v-else class="mr-3">
                        <img class="rounded-circle invitation-dropdown-list-image" :src="$store.state.avatar" :alt="$store.state.alt">
                    </div>
                </router-link>

                <div class="font-weight-bold mr-2">
                    <router-link :to="{ path: 'another-profile', query: { username: groupMember.alumni.username, id: groupMember.alumni.id } }">
                        <div class="text-truncate">
                            {{ groupMember.alumni.first_name }} {{ groupMember.alumni.middle_name }} {{ groupMember.alumni.last_name }} 
                            <code v-if="groupMember.group_role_ids">
                                (<template v-for="(group_role,index) in groupMember.group_roles">{{ group_role.name }}{{ (index+1 < groupMember.group_roles.length) ? ', ' : '' }} </template>)
                            </code>
                        </div>
                        
                        <div class="small text-gray-500">
                            {{ groupMember.alumni.designation_department }} at {{ groupMember.alumni.organization }}
                        </div>
                    </router-link>
                </div>

                <div class="ml-auto mb-auto">
                    <button type="button" class="btn btn-sm btn-outline-secondary rounded-pill mr-1" @click="addPermissionModalShow(groupMember)">
                    <i class="feather-settings"></i> Permission
                    </button>
                </div>

                <!-- <span class="ml-auto small">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm rounded-circle button-hover"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis fa-1x text-secondary"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button" @click="addPermissionModalShow(groupMember)">
                                <i class="feather-settings"></i> Permission
                            </button>
                        </div>
                    </div>
                </span> -->
            </div>
        </div>
    </div>

    <div class="modal fade" id="addPermissionModal" tabindex="-1" role="dialog" aria-labelledby="addPermissionModalLabel" aria-hidden="true" data-bs-backdrop="static">
        <form @submit.prevent="addGroupRolePermission">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addPermissionModalLabel">Group Permission</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <div class="form-check" v-for="(value,key) in groupRoles">
                            <input v-model="form.permission" :value="value.id" class="form-check-input" type="checkbox">
                            <label class="form-check-label">{{ value.name }}</label>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button :disabled="form.busy" type="submit" class="btn btn-sm btn-success">Add</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <vue-progress-bar></vue-progress-bar>
    <notifications />
  </div>
</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie';
import Form from "vform";
import { Button, HasError, AlertError, AlertErrors, AlertSuccess } from "vform/src/components/bootstrap5";

export default {
    name: "Member",
    components: {
        Button,
        HasError,
        AlertError,
        AlertErrors,
        AlertSuccess,
    },

    data() {
        return {
            backendUrl: this.$store.state.backendUrl,
            auth_id: Cookies.get('alumniIdCookie'),
            groupMembers: [],
            groupRoles: [],

            form: new Form({
                id: "",
                group_member_id: '',
                permission: [],
            }),
        };
    },

    mounted() {
        this.getData();
    },

    methods: {
        getData() {
            axios.get(`${this.backendUrl}/get-group-member-list/` + this.$route.query.group_id)
            .then((response) => {
                this.groupMembers = response.data.data;
            })
            .catch((e) => {
                console.log(e);
            });

            axios.get(`${this.backendUrl}/get-group-roles`)
            .then((response) => {
                this.groupRoles = response.data.data;
            })
            .catch((e) => {
                console.log(e);
            });
        },

        addPermissionModalShow(groupMember) {
            this.form.group_member_id = groupMember.id;
            $("#addPermissionModal").modal("show");
        },

        addGroupRolePermission() {
            this.$Progress.start();
            this.form.busy = true;
            this.form.post(`${this.backendUrl}/add-group-permission/` + this.form.group_member_id)
            .then((response) => {
                this.getData();
                if (this.form.successful) {
                    $("#addPermissionModal").modal("hide");
                    this.form.reset();
                    this.$Progress.finish();
                    this.$notify({ type: "success", title: "Success", text: "Group member permission added" });
                } else {
                    this.$Progress.fail();
                    this.$notify({ type: "error", title: "Error", text: "Something went wrong try again later" });
                }
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });
        },
    },
};
</script>

<style>

</style>
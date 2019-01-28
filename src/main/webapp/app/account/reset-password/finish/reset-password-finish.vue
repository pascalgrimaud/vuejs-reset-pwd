<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1 v-text="$t('reset.request.title')">Reset your password</h1>

                <div class="alert alert-danger" v-html="$t('reset.finish.messages.keymissing')"
                    v-if="keyMissing">
                    <strong>The password reset key is missing.</strong>
                </div>

                <div class="alert alert-warning" v-if="!success && !keyMissing">
                    <p v-text="$t('reset.finish.messages.info')">Choose a new password.</p>
                </div>

                <div class="alert alert-danger" v-if="error">
                    <p v-text="$t('reset.finish.messages.error')">Your password couldn't be reset. Remember a password request is only valid for 24 hours.</p>
                </div>

                <div class="alert alert-success" v-if="success">
                    <p v-text="$t('reset.finish.messages.success')"><strong>Your password had been reset.</strong> Please </span>
                    <a class="alert-link" v-on:click="openLogin()" v-text="$t('global.messages.info.authenticated.link')">sign in</a>
                </div>

                <div class="alert alert-danger" v-if="doNotMatch">
                    <p v-text="$t('reset.finish.messages.error')">The password and its confirmation do not match!</p>
                </div>

                <div v-if="!keyMissing">
                    TODO
                    <!-- <form v-if="!success" name="form" role="form" id="password-form" v-on:submit.prevent="finishReset()">
                        <div class="form-group">
                            <label class="form-control-label" for="password" v-text="$t('global.form.newpassword')">New password</label>
                            <input type="password" class="form-control" id="password" name="password"
                                :class="{'valid': !$v.resetAccount.password.$invalid, 'invalid': $v.resetAccount.password.$invalid }"
                                v-bind:placeholder="$t('global.form[\'currentpassword.placeholder\']')"
                                v-model="$v.resetPassword.currentPassword.$model" required>
                            <div v-if="$v.resetPassword.currentPassword.$anyDirty && $v.resetPassword.currentPassword.$invalid">
                                <small class="form-text text-danger"
                                    v-if="!$v.resetPassword.currentPassword.required" v-text="$t('global.messages.validate.newpassword.required')">
                                    Your password is required.
                                </small>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="newPassword" v-text="$t('global.form.newpassword')">New password</label>
                            <input type="password" class="form-control" id="newPassword" name="newPassword"
                                v-bind:placeholder="$t('global.form[\'newpassword.placeholder\']')"
                                :class="{'valid': !$v.resetPassword.newPassword.$invalid, 'invalid': $v.resetPassword.newPassword.$invalid }"
                                v-model="$v.resetPassword.newPassword.$model" minlength=4 maxlength=50 required>
                            <div v-if="$v.resetPassword.newPassword.$anyDirty && $v.resetPassword.newPassword.$invalid">
                                <small class="form-text text-danger"
                                    v-if="!$v.resetPassword.newPassword.required" v-text="$t('global.messages.validate.newpassword.required')">
                                    Your password is required.
                                </small>
                                <small class="form-text text-danger"
                                    v-if="!$v.resetPassword.newPassword.minLength" v-text="$t('global.messages.validate.newpassword.minlength')">
                                    Your password is required to be at least 4 characters.
                                </small>
                                <small class="form-text text-danger"
                                    v-if="!$v.resetPassword.newPassword.maxLength" v-text="$t('global.messages.validate.newpassword.maxlength')">
                                    Your password cannot be longer than 50 characters.
                                </small>
                            </div>
                            <!--<jhi-password-strength-bar [passwordToCheck]="newPassword"></jhi-password-strength-bar>-->
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="confirmPassword" v-text="$t('global.form.confirmpassword')">New password confirmation</label>
                            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword"
                                :class="{'valid': !$v.resetPassword.confirmPassword.$invalid, 'invalid': $v.resetPassword.confirmPassword.$invalid }"
                                v-bind:placeholder="$t('global.form[\'confirmpassword.placeholder\']')"
                                v-model="$v.resetPassword.confirmPassword.$model" minlength=4 maxlength=50 required>
                            <div v-if="$v.resetPassword.confirmPassword.$anyDirty && $v.resetPassword.confirmPassword.$invalid">
                                <small class="form-text text-danger"
                                    v-if="!$v.resetPassword.confirmPassword.required" v-text="$t('global.messages.validate.confirmpassword.required')">
                                    Your confirmation password is required.
                                </small>
                                <small class="form-text text-danger"
                                    v-if="!$v.resetPassword.confirmPassword.minLength" v-text="$t('global.messages.validate.confirmpassword.minlength')">
                                    Your confirmation password is required to be at least 4 characters.
                                </small>
                                <small class="form-text text-danger"
                                    v-if="!$v.resetPassword.confirmPassword.maxLength" v-text="$t('global.messages.validate.confirmpassword.maxlength')">
                                    Your confirmation password cannot be longer than 50 characters.
                                </small>
                            </div>
                        </div>

                        <button type="submit" :disabled="$v.resetPassword.$invalid" class="btn btn-primary" v-text="$t('password.form.button')">Save</button>
                    </form> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./reset-password-finish.component.ts">
</script>

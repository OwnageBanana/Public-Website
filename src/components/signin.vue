<script setup>
// SSO testing with Google as the IDP. SP is is a golang server on the pi
</script>

<template>
        <!-- <button @click="googleAuth">Authorize with Google</button> -->
<br/>
    <div>
        <form method="post" action="https://adammills.dev/sso" id="signinRequestForm">
            <input type="hidden" name="client_id" value="1"  />
            <input type="hidden" name="RelayState" value="https://adammills.dev"  />
            <input type="submit" value="Submit"/>
        </form>
        <!-- <button @click="sso">sso</button> -->
    </div>
</template>

<style scoped>

</style>
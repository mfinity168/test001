<template>
  <div>
    <button
      class="p-2 bg-blue-300 rounded transform bg-gradient-to-r from-blue-500 to-green-400 text-white m-1"
      @click="authenticate('psupassport')"
    >
      PSU
    </button>
    <button
      class="bg-blue-600 rounded text-white relative p-1"
      @click="authenticate('facebook')"
    >
      <span class="material-icons">facebook</span>
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import { SalteAuth } from '@salte-auth/salte-auth'
import { Facebook } from '@salte-auth/facebook'
import { Redirect } from '@salte-auth/redirect'
import { PsuPassport } from '../config/psu-passport'

const auth = new SalteAuth({
  providers: [
    new PsuPassport({
      url: 'https://dev.clib.psu.ac.th/authclib/',
      redirectUrl: 'http://localhost:3000/callback',
      responseType: 'code',
      clientID: 'test_id',
      scope: 'userinfo',
      token_type: 'Bearer',
      state: 'XXYYZZ',
    }),
    new Facebook({ clientID: '1133025073714056', responseType: 'code' }),
  ],

  handlers: [
    new Redirect({
      default: true,
    }),
  ],
})
Vue.use(auth)

export default {
  methods: {
    authenticate(provider) {
      auth.login(provider)
    },
  },
}
</script>

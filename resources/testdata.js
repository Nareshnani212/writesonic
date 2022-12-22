const { I } = inject();

module.exports = {

  home: {
   // baseUrl: 'https://app.writesonic.com/login',
    baseUrl: 'https://staging.writesonic.com/login',
  },

  login: {
    loginUrl: 'https://app.writesonic.com',
    //email: 'arunkumaraka55@gmail.com',
    email: 'arun.akenapelli@b2btesters.com',
    //password: '123456',
    // password: 'Arun@1111',
    password: '9849261360',
    invalidpassword: 'QWETT',
    invalidemail: 'bsxbj@uibcdn',
    emptyemail: "",
    emptypaswd: ""
  },
  AIArticle: {
    topic: 'Beauty of nature',
    qualitytype: 'Economy',
    language: 'English',
    outputs: '2',
    excited:'Excited',
    professional:'Professional',
    encouraging:'Encouraging',
    funny:'Funny',
    dramatic:'Dramatic',
    witty:'Witty',
    firstPerson:'First Person',
    secondperson:'Second Person',
    thirdperson:'Third Person'
  }
}

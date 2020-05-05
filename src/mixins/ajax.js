export default {
    data() {
        return {
            instanceYT: {},
        }
    },
    created() {
        this.instanceYT = this.$http.create({
            baseUrl: "https://www.googleapis.com/youtube/v3/",
            timeout: 10000,
            validateStatus() {
                return true;
            },
        })
    },
    methods: {
        ytGetList() {
            return this.instanceYT.get("https://www.googleapis.com/youtube/v3/videos?part=player,snippet,contentDetails&chart=mostPopular&maxResults=3&key=AIzaSyBc6FQEAEGSg6V6iacMVWXgoTi3GgMJjek")
                .then(res => this.ajaxHandleResponse(res));
        },
        
        ajaxHandleResponse(response) {
            const responseOk = response.status >= 200 && response.status < 300;
            if (responseOk) {
                console.log(response.data);
                
                return Promise.resolve(response.data);
            } else {
                console.log(response);
                return Promise.reject(response.status);
            }
        }
    },
}
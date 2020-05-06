export default {
    data() {
        return {
            instanceYT: {},
            targetItmCount : 100,
            itmPerPage : 50,
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
        async ytGetList() {
            const result = [];
            let totalReqCount = Math.ceil(this.targetItmCount / this.itmPerPage);
            console.log(totalReqCount,"start");
            
            while(totalReqCount > 0){
                const datas = await this.instanceYT.get("https://www.googleapis.com/youtube/v3/videos?part=player,snippet,contentDetails&chart=mostPopular&maxResults=50&key=AIzaSyBc6FQEAEGSg6V6iacMVWXgoTi3GgMJjek")
                                                .then(res => this.ajaxHandleResponse(res))
                                                .then(res => this.transformData(res))
                result.push(...datas);
                totalReqCount--;
            }
            console.log(result.length);
            
            return result
        },
        
        ajaxHandleResponse(response) {
            const responseOk = response.status >= 200 && response.status < 300;
            if (responseOk) {
                return Promise.resolve(response.data);
            } else {
                console.log(response);
                return Promise.reject(response.status);
            }
        },
        transformData(response){
            return response.items.map(item =>{

                return {
                    id : item.id,
                    link : `/theater/${item.id}`,
                    heading : item.snippet.title,
                    tags : item.snippet.tags,
                    desc : item.snippet.description,
                    thumbnails : item.snippet.thumbnails,
                    duration : item.contentDetails.duration,
                }
            })
        }
    },
}
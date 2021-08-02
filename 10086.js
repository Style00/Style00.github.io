
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://gd.10086.cn/gmccapp/confactapp/?servicename=GMCCAPP_630_032_001_002&sessionid=1651ceab272bc4e118453d8eafe0cf695`;
const method = `POST`;
const headers = {
'Accept' : `application/json, text/plain, */*`,
'Origin' : `https://gd.10086.cn`,
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `WT_FPC=id=27dc70c0984b5d139be1627124448005:lv=1627860870260:ss=1627860846886; mobile=29762-22368-6304-33163; ST=20210801115016Zc0slmNs2lIA338hLa; UC=20210801115016Zc0slmNs2lIA338hLa&5&18818442760&18818442760&BrandMzone&758; _st=20210801115016Zc0slmNs2lIA338hLa; appId=501144; token=50114408011150165lzsUwyBnQgbMwLC`,
'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
'Host' : `gd.10086.cn`,
'Connection' : `keep-alive`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 GDMobile/8.0.4`,
'Referer' : `https://gd.10086.cn/gmccapp/confactpage/signInNew/index.html?isApp=0&WT.ac_id=210423_QD_PUSH&session=1651ceab272bc4e118453d8eafe0cf695`,
'Accept-Language' : `zh-cn`
};
const body = `reqJson={"channel":"","header":{"nonce":"bgchigaihacfj2zs0ie5mdump3k5zdnl","timestamp":1627860870259,"sign":"C35DD2DDA3B890037E11A3EB41E9AA7E"}}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

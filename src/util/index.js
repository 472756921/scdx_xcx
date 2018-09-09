const base = {
  url:'https://gxjd.scu.edu.cn',  //http://202.115.33.207:8080
  url2:'https://gxjd.scu.edu.cn/weChat',  //http://202.115.33.207:8080
  attitude(val){
    let result = '';
    switch (val){
      case 1: result="很满意";break;
      case 2: result="满意";break;
      case 3: result="一般";break;
      case 4: result="不满意";break;
      default: result=''; break
    }
    return result;
  }
}

export default base

var page = 1;
var maxDataSize ;
var channel;
// $(function () {
//     refreshTab(page, "16789");
//     var tab = new fz.Scroll('.ui-tab', {
//         role: 'tab',
//         autoplay: false,
//         interval: 3000
//     });
//     // 上拉
//     refresher.init({
//         id: "tabContent",
//         pullDownAction: Refresh,
//         pullUpAction: Loads
//     });
//
//
//     function Refresh() {
//         setTimeout(function () {
//             refreshTab(1, channel);
//             $(".pullDown ").removeClass("loading");
//         }, 1000)
//     }
//
//     function Loads() {
//         page = page + 1;
//         refreshTab(page, channel);
//         $(".pullUp ").removeClass("loading")
//     }
//
//
//     $(".ui-tab-nav li").click(function () {
//         $(".ui-tab-content").addClass("hiShow").removeClass("hiNone");
//         $(".details").addClass("hiNone").removeClass("hiShow");
//     });
//     $(".ui-list li").click(function () {
//         $(".ui-tab-content").addClass("hiNone")
//         $(".details").addClass("hiShow").removeClass("hiNone");
//     })
//
// })

function changeTab(chnl) {
    page = 1;
    refreshTab(page, chnl);
}

function refreshTab(page, chnl) {
    channel = chnl;
    $.ajax({
        type: "POST",
        url: 'getInformation',
        data: {page: page, chnl: chnl},
        success: function (res) {
            var html = '';
            maxDataSize = res.resultBody.count;
            if(res.resultBody.data.length>0 && res.resultBody.count>0){
                for (var i = 0; i < res.resultBody.data.length-1; i++) {
                    var data = res.resultBody.data[i];
                    html += '<li class="ui-border-t" onclick="informationDetail('+data.docid+')">\n' +
                        '                                    <p><span>' + data.chnl + '</span><span class="date">' + data.pubtime + '</span></p>\n' +
                        '                                    <h4>' + data.title + '</h4>\n' +
                        '                                </li>\n';
                }
                if (chnl == "16789") {
                    if (page == 1) {
                        $("#zxzc").empty().append(html);
                    } else {
                        $("#zxzc").append(html);
                    }
                } else if (chnl == "16788") {
                    if (page == 1) {
                        $("#gsgg").empty().append(html);
                    } else {
                        $("#gsgg").append(html);
                    }
                } else if (chnl == "16790") {
                    if (page == 1) {
                        $("#zcjd").empty().append(html);
                    } else {
                        $("#zcjd").append(html);
                    }
                }
            } else {
                if (chnl == "16789") {
                    $("#zxzc").empty().append("<li style='padding:20px 0;text-align:center;background:#fff;'>暂无数据...</li>");
                } else if (chnl == "16788") {
                    $("#gsgg").empty().append("<li style='padding:20px 0;text-align:center;background:#fff;'>暂无数据...</li>");
                } else if (chnl == "16790") {
                    $("#zcjd").empty().append("<li style='padding:20px 0;text-align:center;background:#fff;'>暂无数据...</li>");
                }
            }
        },
        error: function () {

        }
    });
}

function informationDetail(id){
    $.ajax({
        type: "POST",
        url: 'getInformationDetail',
        data: {id: id},
        success: function (res) {
            var data = res.resultBody[0];
            var html = '<div class="title ui-border-b">'+data.title+'</div>\n' +
                '            <div class="main">\n' +
                '                <div class="main-head">\n' +
                '                    <span>'+data.time+'</span>\n' +
                '                </div>\n' +
                '                <div class="content ui-txt-justify">\n' +
                '                    '+data.content+'\n' +
                '                </div>\n' +
                '            </div>';
            $("#information").empty().append(html);
            $(".details").show();
        },
        error: function () {

        }
    });
}

$(function () {
    refreshTab(page, "16789");
    $(".ui-tab-nav li").on("click", function () {
        console.log(1);
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab-content .minirefresh-wrap").eq(index).addClass("active").siblings().removeClass("active");
    })
    // 记录一个最新
    var listDom1 = document.querySelector('#zxzc');
    var listDom2 = document.querySelector('#gsgg');
    var listDom3 = document.querySelector('#zcjd');
    var requestDelayTime = 1000;

    <!--最新政策-->
    var miniRefresh1 = new MiniRefresh({
        container: '#minirefresh1',
        down: {
            callback: function () {
                setTimeout(function () {
                    // 每次下拉刷新后，上拉的状态会被自动重置
                    page = 1;
                    refreshTab(page, channel);
                    // appendTestData(listDom1, 10, true);
                    miniRefresh1.endDownLoading(true);
                }, requestDelayTime);
            }
        },
        up: {
            isAuto: false,
            callback: function () {
                setTimeout(function () {
                    console.log("上拉刷新");
                    page = page + 1;
                    refreshTab(page, channel);
                    // appendTestData(listDom1, 10);
                    miniRefresh1.endUpLoading(listDom1.children.length >= maxDataSize ? true : false);
                }, requestDelayTime);
            }
        }
    });

    <!--公示公告-->
    var miniRefresh2 = new MiniRefresh({
        container: '#minirefresh2',
        down: {
            callback: function () {
                setTimeout(function () {
                    // 每次下拉刷新后，上拉的状态会被自动重置
                    page = 1;
                    refreshTab(page, channel);
                    // appendTestData(listDom1, 10, true);
                    miniRefresh2.endDownLoading(true);
                }, requestDelayTime);
            }
        },
        up: {
            isAuto: false,
            callback: function () {
                setTimeout(function () {
                    console.log("上拉刷新");
                    page = page + 1;
                    refreshTab(page, channel);
                    // appendTestData(listDom1, 10);
                    miniRefresh2.endUpLoading(listDom2.children.length >= maxDataSize ? true : false);
                }, requestDelayTime);
            }
        }
    });

    <!--政策解读-->
    var miniRefresh3 = new MiniRefresh({
        container: '#minirefresh3',
        down: {
            callback: function () {
                setTimeout(function () {
                    // 每次下拉刷新后，上拉的状态会被自动重置
                    page = 1;
                    refreshTab(page, channel);
                    if(maxDataSize<1){
                        miniRefresh3.endUpLoading(listDom3.children.length >= maxDataSize ? true : false);
                    }
                    // appendTestData(listDom1, 10, true);
                    miniRefresh3.endDownLoading(true);
                }, requestDelayTime);
            }
        },
        up: {
            isAuto: false,
            callback: function () {
                setTimeout(function () {
                    console.log("上拉刷新");
                    page = page + 1;
                    refreshTab(page, channel);
                    // appendTestData(listDom1, 10);
                    miniRefresh3.endUpLoading(listDom3.children.length >= maxDataSize ? true : false);
                }, requestDelayTime);
            }
        }
    });

    $(".ui-tab-nav li").click(function () {
        $(".details").hide()
    });
});
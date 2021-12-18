document.writeln("<!-- header-start -->");
document.writeln("<div id=\'hd\'>");
document.writeln("    <div class=\'wp\'>");
document.writeln("        <div class=\'logo\'><a href=\'index.html\'><img src=\'images/logo.png\' alt=\'\'></a></div>");
document.writeln("        <div id=\'nav\'>");
document.writeln("            <ul>");
document.writeln("                <li><a href=\'index.html\' >首页</a></li>");
document.writeln("                <li><a href=\'about.html\' >关于我们</a></li>");
document.writeln("                <li><a href=\'service.html\' >服务项目</a></li>");
document.writeln("                <li><a href=\'case.html\' >案例展示</a></li>");
document.writeln("                <li><a href=\'news.html\' >新闻动态</a></li>");
document.writeln("                <li><a href=\'contact.html\'>联系我们</a></li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("        <div class=\'qq\'>11五22四1四2九</div>");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("<div class=\'c\'></div>");
document.writeln("<div id=\'m-hd\'>");
document.writeln("    <a href=\'index.html\' class=\'m-logo\'><img src=\'images/logo.png\' alt=\'\'></a>");
document.writeln("    <div class=\'m-trigger\'></div>");
document.writeln("    <ul class=\'m-nav\'>");
document.writeln("        <li><a href=\'index.html\' class=\'v1\'>首页 </a></li>");
document.writeln("        <li><a href=\'about.html\' class=\'v1\'>关于我们</a></li>");
document.writeln("        <li><a href=\'service.html\' class=\'v1\'>服务项目</a></li>");
document.writeln("        <li><a href=\'case.html\' class=\'v1\'>案例展示</a></li>");
document.writeln("        <li><a href=\'news.html\' class=\'v1\'>新闻动态</a></li>");
document.writeln("        <li><a href=\'contact.html\' class=\'v1\'>联系我们</a></li>");
document.writeln("    </ul>");
document.writeln("</div>");
document.writeln("<div class=\'c\'></div>");
document.writeln("<!-- header-end -->");

/**
 * @author:Jastar·Wang
 * @date:2016年6月13日17:14:41
 */
function loadNavStyleFn() {
    /**	导航菜单红色背景的展示	*/
    var bkpath = window.location.pathname;
    var nav_index = 0;
    //首页
    if (bkpath.indexOf("/index") != -1) {
        nav_index = 0;
    }
    //关于我们
    else if (bkpath.indexOf("/about") != -1) {
        nav_index = 1;
    }
    //服务项目
    else if (bkpath.indexOf("/service") != -1) {
        nav_index = 2;
    }
    //案例展示
    else if (bkpath.indexOf("/case") != -1) {
        nav_index = 3;
    }
    //新闻动态
    else if (bkpath.indexOf("/news") != -1) {
        nav_index = 4;
    }
    //联系我们
    else if (bkpath.indexOf("/contact") != -1) {
        nav_index = 5;
    }
    $("#nav li a").attr("style", "");
    $("#nav li:eq(" + nav_index + ") a").attr("style", "color:#e4392a; border-bottom:3px solid #e4392a;");
}
loadNavStyleFn();
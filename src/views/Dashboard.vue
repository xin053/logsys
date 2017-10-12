<template>
<div>
<!-- BEGIN PAGE TITLE-->
    <!-- <h1 class="page-title"> 一级标题
        <small>二级标题</small>
    </h1> -->
    <!-- END PAGE TITLE-->
    <!-- END PAGE HEADER-->
    <!-- <div class="alert alert-warning alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
        <strong>Warning!</strong> 这是一条提示消息,用于提示运维周报整体情况
    </div>

    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a class="dashboard-stat dashboard-stat-v2 blue" href="#">
                <div class="visual">
                    <i class="fa fa-comments"></i>
                </div>
                <div class="details">
                    <div class="number">
                        <span data-counter="counterup" :data-value="1917">0</span>
                    </div>
                    <div class="desc"> 统计信息1 </div>
                </div>
            </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a class="dashboard-stat dashboard-stat-v2 red" href="#">
                <div class="visual">
                    <i class="fa fa-bar-chart-o"></i>
                </div>
                <div class="details">
                    <div class="number">
                        <span data-counter="counterup" data-value="12,5">0</span>M$ </div>
                    <div class="desc"> 统计信息2 </div>
                </div>
            </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a class="dashboard-stat dashboard-stat-v2 green" href="#">
                <div class="visual">
                    <i class="fa fa-shopping-cart"></i>
                </div>
                <div class="details">
                    <div class="number">
                        <span data-counter="counterup" data-value="549">0</span>
                    </div>
                    <div class="desc"> 统计信息3 </div>
                </div>
            </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a class="dashboard-stat dashboard-stat-v2 purple" href="#">
                <div class="visual">
                    <i class="fa fa-globe"></i>
                </div>
                <div class="details">
                    <div class="number"> +
                        <span data-counter="counterup" data-value="89"></span>% </div>
                    <div class="desc"> 统计信息4 </div>
                </div>
            </a>
        </div>
    </div> -->
    <div class="row">
        <div class="col-md-12">
            <!-- BEGIN SAMPLE TABLE PORTLET-->
            <div class="portlet box blue">
                <div class="portlet-title">
                    <div class="caption">
                        <i class="fa fa-comments"></i>运维报表 </div>
                    <div class="tools">
                        <a href="javascript:;" class="collapse"> </a>
                        <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                        <a href="javascript:;" class="reload"> </a>
                        <a href="javascript:;" class="remove"> </a>
                    </div>
                </div>
                <div class="portlet-body">
                    <div class="table-scrollable">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="active">
                                    <th rowspan="2"> 巡检项目 </th>
                                    <th rowspan="2"> 巡检时间 </th>
                                    <th colspan="8"> 巡检项 </th>
                                    <th colspan="4"> 累积故障数 </th>
                                    <th rowspan="2"> 巡检人 </th>
                                </tr>
                                <tr class="active">
                                    <th>数据库巡检项</th>
                                    <th>网关服务巡检项</th>
                                    <th>Web服务巡检项</th>
                                    <th>业务巡检项</th>
                                    <th>服务器巡检项</th>
                                    <th>安全性巡检项</th>
                                    <th>变更操作巡检项</th>
                                    <th>资源使用巡检项</th>
                                    <th>灾难性故障数</th>
                                    <th>一级故障</th>
                                    <th>二级故障</th>
                                    <th>三级故障</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 公有云 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="danger"> 异常 <span class="badge badge-success"> 5 </span></td>
                                    <td class="success"> 正常 <span class="badge badge-success" style="float:none;text-align:left;vertical-align:0"> 5 </span></td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="superdanger"> 1 </td>
                                    <td class="danger"> 1 </td>
                                    <td class="warning"> 1 </td>
                                    <td class="littlewarning"> 1 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 稻花香 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="danger"> 异常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 天味 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 香飘飘 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 欢乐家 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 金正大 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 天地壹号 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 桃李面包 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 史丹利 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 马应龙 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 东鹏 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 红牛 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 晵盛 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 鼎湖 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 维他奶 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 光明 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 恒顺 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 南方食品 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 步阳 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 好来 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                                <tr>
                                    <td> 中科 </td>
                                    <td> 9月02号-9月08号 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 正常 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td class="success"> 0 </td>
                                    <td> 周子新 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- END SAMPLE TABLE PORTLET-->
        </div>
    </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
	...mapGetters([
	  'statistics'
	])
  },
  mounted() {
	// this.$store.dispatch('getStatisticsAPI')
  }
}
</script>

<style>
table>thead>tr>th{
    text-align: center;
}

table>tbody>tr>td{
    text-align: center;
}

table>tbody>tr>td.child{
    text-align: left;
}

table>tfoot>tr>th{
    text-align: center;
}

table>tbody>tr>td>.badge{
    float: right;
}

.table > thead > tr > td.superdanger,
.table > thead > tr > th.superdanger,
.table > thead > tr.superdanger > td,
.table > thead > tr.superdanger > th,
.table > tbody > tr > td.superdanger,
.table > tbody > tr > th.superdanger,
.table > tbody > tr.superdanger > td,
.table > tbody > tr.superdanger > th,
.table > tfoot > tr > td.superdanger,
.table > tfoot > tr > th.superdanger,
.table > tfoot > tr.superdanger > td,
.table > tfoot > tr.superdanger > th {
    background-color: #C00000; }

.table > thead > tr > td.danger,
.table > thead > tr > th.danger,
.table > thead > tr.danger > td,
.table > thead > tr.danger > th,
.table > tbody > tr > td.danger,
.table > tbody > tr > th.danger,
.table > tbody > tr.danger > td,
.table > tbody > tr.danger > th,
.table > tfoot > tr > td.danger,
.table > tfoot > tr > th.danger,
.table > tfoot > tr.danger > td,
.table > tfoot > tr.danger > th {
    background-color: #FF0000; }

.table > thead > tr > td.warning,
.table > thead > tr > th.warning,
.table > thead > tr.warning > td,
.table > thead > tr.warning > th,
.table > tbody > tr > td.warning,
.table > tbody > tr > th.warning,
.table > tbody > tr.warning > td,
.table > tbody > tr.warning > th,
.table > tfoot > tr > td.warning,
.table > tfoot > tr > th.warning,
.table > tfoot > tr.warning > td,
.table > tfoot > tr.warning > th {
    background-color: #FFC000; }

.table > thead > tr > td.littlewarning,
.table > thead > tr > th.littlewarning,
.table > thead > tr.littlewarning > td,
.table > thead > tr.littlewarning > th,
.table > tbody > tr > td.littlewarning,
.table > tbody > tr > th.littlewarning,
.table > tbody > tr.littlewarning > td,
.table > tbody > tr.littlewarning > th,
.table > tfoot > tr > td.littlewarning,
.table > tfoot > tr > th.littlewarning,
.table > tfoot > tr.littlewarning > td,
.table > tfoot > tr.littlewarning > th {
    background-color: #FFFF00; }

.table > thead > tr > td.success,
.table > thead > tr > th.success,
.table > thead > tr.success > td,
.table > thead > tr.success > th,
.table > tbody > tr > td.success,
.table > tbody > tr > th.success,
.table > tbody > tr.success > td,
.table > tbody > tr.success > th,
.table > tfoot > tr > td.success,
.table > tfoot > tr > th.success,
.table > tfoot > tr.success > td,
.table > tfoot > tr.success > th {
    background-color: #92D050; }
</style>
<template>
<div>
<!-- BEGIN PAGE TITLE-->
    <h1 class="page-title"> 一级标题
        <small>二级标题</small>
    </h1>
    <!-- END PAGE TITLE-->
    <!-- END PAGE HEADER-->
    <div class="alert alert-warning alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
        <strong>Warning!</strong> 这是一条提示消息
    </div>

    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a class="dashboard-stat dashboard-stat-v2 blue" href="#">
                <div class="visual">
                    <i class="fa fa-comments"></i>
                </div>
                <div class="details">
                    <div class="number">
                        <span data-counter="counterup" :data-value="statistics">0</span>
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
    </div>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- END SAMPLE TABLE PORTLET-->
        </div>
    </div>

    {{ statistics }}

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
	this.$store.dispatch('getStatisticsAPI')
  }
}
</script>

<style>
</style>
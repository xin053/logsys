<template>
<div>
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
                    <div class="desc"> 网关日志错误数 </div>
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
                        <span data-counter="counterup" data-value="12,5">0</span>
                    </div>
                    <div class="desc"> 系统日志错误数 </div>
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
                    <div class="desc"> 数据库日志错误数 </div>
                </div>
            </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a class="dashboard-stat dashboard-stat-v2 purple" href="#">
                <div class="visual">
                    <i class="fa fa-globe"></i>
                </div>
                <div class="details">
                    <div class="number">
                        <span data-counter="counterup" data-value="89">0</span>
                    </div>
                    <div class="desc"> sfa与web后台日志错误数 </div>
                </div>
            </a>
        </div>
    </div>
    <div  class="row">
    <!-- BEGIN PAGE TITLE-->
        <!-- <h1 class="page-title"> 网关日志
            <small>账户服务错误日志,数据源错误日志,表单错误日志</small>
        </h1> -->
        <!-- END PAGE TITLE-->
        <!-- END PAGE HEADER-->
        <div v-show="tipShow" class="alert alert-warning alert-dismissable">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
            <strong>Warning!</strong> 这是一条提示消息
        </div>

        <logTable :tableHeaders="tableHeaders" :searchSpan="searchSpan"></logTable>

    </div>
</div>
</template>

<script>
import logTable from '@/components/logTable'
export default {
    components: {
        logTable
    },
    data() {
        return {
            tipShow: false,
            tableHeaders: {
                "日志时间": 'fa fa-briefcase',
                "企业e号": 'fa fa-briefcase',
                "企业名称": 'fa fa-briefcase',
                "IP": 'fa fa-briefcase',
                "虚拟机名称": 'fa fa-briefcase',
                "操作系统类型": 'fa fa-briefcase',
                "错误码": 'fa fa-briefcase',
                "错误类型": 'fa fa-briefcase',
                "服务": 'fa fa-briefcase',
                "网关版本": 'fa fa-briefcase',
                "调用接口": 'fa fa-briefcase',
                "完整日志内容": 'fa fa-briefcase'
            },
            searchSpan: `<div class="row col-md-12 col-sm-12">
                            <div class="form-inline col-md-12 col-sm-12 form-group">
                                <div class="col-md-2 col-sm-2 col-lg-2 input-group date date-picker margin-bottom-5" data-date-format="yyyy-mm-dd">
                                    <input type="text" class="form-control form-filter input-sm" id="log_date_from" placeholder="From">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm default" type="button">
                                            <i class="fa fa-calendar"></i>
                                        </button>
                                    </span>
                                </div>
                                <div class="col-md-2 col-sm-2 col-lg-2 input-group date date-picker margin-bottom-5" data-date-format="yyyy-mm-dd">
                                    <input type="text" class="form-control form-filter input-sm" id="log_date_to" placeholder="To">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm default" type="button">
                                            <i class="fa fa-calendar"></i>
                                        </button>
                                    </span>
                                </div>
                                <div class="input-group col-sm-1 col-lg-1">
                                    <input type="text" class="form-control form-filter input-sm" id="enterprise_number" placeholder="搜索企业e号">
                                </div>
                                <div class="input-group col-sm-1 col-lg-1">
                                    <input type="text" class="form-control form-filter input-sm" id="enterprise_name" placeholder="搜索企业名称">
                                </div>
                                <div class="input-group col-sm-1 col-lg-1">
                                    <input type="text" class="form-control form-filter input-sm" id="ip" placeholder="搜索IP">
                                </div>
                                <div class="input-group col-sm-1 col-lg-1">
                                    <input type="text" class="form-control form-filter input-sm" id="serverrole" placeholder="错误类型">
                                </div>
                                <div class="input-group col-sm-1 col-lg-1">
                                    <input type="text" class="form-control form-filter input-sm" id="type" placeholder="服务">
                                </div>
                                <div class="input-group col-sm-1 col-lg-1">
                                    <input type="text" class="form-control form-filter input-sm" id="datasource_id" placeholder="搜索数据源id">
                                </div>
                                <div class="col-md-1 col-sm-1">
                                    <button class="btn blue" id="custom-search" type="button">搜索</button>
                                </div>
                            </div>
                        </div>
                        `
        }
    },
    mounted() {
       $('.date-picker').datepicker({
            rtl: App.isRTL(),
            autoclose: true
        });
    }
}
</script>
<style>
</style>
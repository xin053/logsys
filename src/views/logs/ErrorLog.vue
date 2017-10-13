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
                        <!-- <span data-counter="counterup" data-value="0" :data-value="errorlogStatistics.gateway">{{ errorlogStatistics.gateway }}</span> -->
                        <span>{{ errorlogStatistics.gateway }}</span>
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
                        <span>{{ errorlogStatistics.system }}</span>
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
                        <span>{{ errorlogStatistics.database }}</span>
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
                        <span>{{ errorlogStatistics.web_sfa }}</span>
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

        <logTable :tableHeaders="tableHeaders" :searchSpan="searchSpan" @updateStatistics="updateStatistics"></logTable>

    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import logTable from '@/components/logTable'
export default {
    components: {
        logTable
    },
    data() {
        return {
            tipShow: false,
            tableHeaders: {
                "日志时间": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "企业e号": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "企业名称": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "IP": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "虚拟机名称": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "操作系统类型": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "日志级别": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "错误码": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "错误类型": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "服务": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "网关版本": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "调用接口": {
                    icon: 'fa fa-briefcase',
                    columnClass: ''
                },
                "完整日志内容": {
                    icon: 'fa fa-briefcase',
                    columnClass: 'columnHide text-align-left'
                }
            },
            searchSpan: `<div id="searchSpan" class="row col-md-12 col-sm-12">
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
        this.$store.dispatch('getErrorLogStatistics');
        this.$store.state.pagebarStore.navigation = "日志分析"
    },
    computed: {
        ...mapGetters([
            'errorlogStatistics'
        ])
    },
    methods: {
        updateStatistics: function() {
            this.$store.dispatch('getErrorLogStatistics');
        }
    }
}
</script>
<style>
</style>
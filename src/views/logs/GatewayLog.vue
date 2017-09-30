<template>
<div>
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
                "网关版本": 'fa fa-briefcase',
                "调用接口": 'fa fa-briefcase',
                "完整日志内容": 'fa fa-briefcase'
            },
            searchSpan: `<div class="row col-md-12 col-sm-12">
                            <div class="form-inline col-md-12 col-sm-12 form-group">
                                <div class="col-md-2 col-sm-2 col-lg-2 input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                                    <input type="text" class="form-control form-filter input-sm" readonly id="log_date_from" placeholder="From">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm default" type="button">
                                            <i class="fa fa-calendar"></i>
                                        </button>
                                    </span>
                                </div>
                                <div class="col-md-2 col-sm-2 col-lg-2 input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                                    <input type="text" class="form-control form-filter input-sm" readonly id="log_date_to" placeholder="To">
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
                                    <input type="text" class="form-control form-filter input-sm" id="type" placeholder="错误类型">
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
    }
}

</script>

<style>
</style>
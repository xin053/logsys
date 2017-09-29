<template>
    <div class="portlet blue box">
        <div class="portlet-title">
            <div class="caption">
                <i class="fa fa-gear"></i>Tools </div>
            <div class="tools"> </div>
        </div>
        <div class="portlet-body">
            <table class="table table-striped table-bordered table-hover" id="sample">
                <thead>
                    <tr>
                        <th v-for="(classname, header) in tableHeaders">
                            <i v-bind:class="classname"></i>
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tableHeaders: {
            type: Object
        },
        searchSpan: {
            type: String
        }
    },
    data() {
        return {
        }
    },
    mounted() {
        TableDatatablesButtons.init();
        addSearchSpan(this.searchSpan);
        $('#custom-search').on('click', function(){
            $('#sample').dataTable().fnDraw();
        });
    },
    methods: {
    }
}

var TableDatatablesButtons = function() {

    var initPickers = function () {
        //init date pickers
        $('.date-picker').datepicker({
            rtl: App.isRTL(),
            autoclose: true
        });
    }

    var initTable = function() {
        if (oTable == null) {
            var table = $('#sample');

            var fixedHeaderOffset = 0;
            if (App.getViewPort().width < App.getResponsiveBreakpoint('md')) {
                if ($('.page-header').hasClass('page-header-fixed-mobile')) {
                    fixedHeaderOffset = $('.page-header').outerHeight(true);
                }
            } else if ($('body').hasClass('page-header-menu-fixed')) { // admin 3 fixed header menu mode
                fixedHeaderOffset = $('.page-header-menu').outerHeight(true);
            } else if ($('body').hasClass('page-header-top-fixed')) { // admin 3 fixed header top mode
                fixedHeaderOffset = $('.page-header-top').outerHeight(true);
            } else if ($('.page-header').hasClass('navbar-fixed-top')) {
                fixedHeaderOffset = $('.page-header').outerHeight(true);
            } else if ($('body').hasClass('page-header-fixed')) {
                fixedHeaderOffset = 64; // admin 5 fixed height
            }

            $.fn.dataTable.ext.errMode = 'throw';
            var oTable = table.dataTable({
                //datatables设置详见 https://datatables.net/reference/option/
                // Internationalisation. For more info refer to http://datatables.net/manual/i18n
                "language": {
                    "aria": {
                        "sortAscending": ": 以升序排列此列",
                        "sortDescending": ": 以降序排列此列"
                    },
                    "emptyTable": "没有找到记录",
                    "info": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
                    "infoEmpty": "当前显示 0 到 0 条，共 0 条记录",
                    "infoFiltered": "(从 _MAX_ 条记录中筛选)",
                    "lengthMenu": "每页 _MENU_ 条记录",
                    "search": "搜索:",
                    "processing": "加载中...",
                    "zeroRecords": "无匹配记录",
                    "paginate": {
                        "previous": "上一页",
                        "next": "下一页",
                        "last": "最后一页",
                        "first": "第一页"
                    }
                },

                // Or you can use remote translation file
                //"language": {
                //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
                //},
                paging: true,
                autoWidth: true,//自动计算列宽度
                serverSide: true,//开启服务器模式
                processing: true,//显示正在加载
                ordering: true,//可以排序
                searching: false,//可以搜索
                stateSave: false,//保存分页,
                orderClasses: true,//高亮排序的列
                retrieve: false,//是否重用已有的datatables
                destroy: true,//是否重新创建datatables
                select: true,

                search: {
                    "caseInsensitive": false,
                    "regex": false//是否使用正则搜索
                },

                // "AjaxSource": "http://127.0.0.1:5000",
                // "fnServerData": function (sSource, aoData, fnCallback) {
                //             aoData.push({ "name": "CUSTOMER_ID", "value": "1" });
                //             aoData.push({ "name": "CUSTOMER_NAME", "value": "zzx" });
                //             $.ajax({
                //                 "dataType": 'application/json',
                //                 "type": "POST",
                //                 "url": sSource,
                //                 "data": aoData,
                //                 "success": fnCallback
                //             })
                //         },

                // columnDefs: [
                //     { orderable: true, className: 'reorder', targets: 0 },
                //     { orderable: true, targets: '_all' }
                // ],
                //"paging": false, disable pagination

                //columnDefs和columns共用大部分options
                columnDefs: [
                    {
                        "targets": 'nosort',  //目标未样式名未nosort的列
                        // "className": "my_class",//设置目标类的样式
                        "orderable": false    //包含上样式名‘nosort’的禁止排序
                    },
                    {
                        "targets": 'nosearch',
                        "searchable": false    //包含上样式名‘nosort’的禁止排序
                    }
                ],

                //https://datatables.net/manual/server-side
                ajax: function(data, callback, settings) {
                    //封装请求参数
                    data.query = {}
                    data.query.log_date_from = $("#log_date_from").val()
                    data.query.log_date_to = $("#log_date_to").val()
                    data.query.enterprise_number = $("#enterprise_number").val()
                    data.query.enterprise_name = $("#enterprise_name").val()
                    data.query.ip = $("#ip").val()
                    data.query.datasource_id = $("#datasource_id").val()
                    data.querystr = "log_date_from log_date_to enterprise_number enterprise_name ip datasource_id"
                    console.log(data)
                    //ajax请求数据
                    $.ajax({
                        type: "post",
                        url: "http://127.0.0.1:5001/gateway",
                        cache: false,  //禁用缓存
                        data: data,  //传入组装的参数
                        dataType: "json",
                        success: function(result) {
                            callback(result);
                        },
                        error: function(msg) {
                            //TODO 修改当前页面的提示信息
                        }
                    });
                },
                //列表表头字段
                columns: [
                    { "data": "logtime" },
                    { "data": "enterprisenumber" },
                    { "data": "enterprisename" },
                    {
                        "data": "ip",
                        render: function(data, type, row) {
                            return type === "display" || type === "filter" ?
                                data : data;
                        },
                        "defaultContent": "默认值",
                        "title": "ip地址",
                        // "type" : "date",//设置列的类型,来控制是否可以排序和过滤等
                        // "visible": "false",//控制该列是否可见
                        // "width": "20%",//控制列的宽度
                    },
                    { "data": "vmname" },
                    { "data": "ostype" },
                    { "data": "error" },
                    { "data": "type" },
                    { "data": "gateversion" },
                    { "data": "module" },
                    { "data": "logcontent" }
                ],

                buttons: [
                    { extend: 'print', className: 'btn dark' },
                    { extend: 'copy', className: 'btn red' },
                    { extend: 'pdf', className: 'btn green' },
                    { extend: 'excel', className: 'btn yellow' },
                    { extend: 'csv', className: 'btn purple' },
                    { extend: 'colvis', className: 'btn default', text: 'Columns' },
                    {
                        text: 'Reload',
                        className: 'btn dark',
                        action: function(e, dt, node, config) {
                            //dt.ajax.reload();
                            $('#sample').dataTable().fnDraw();
                        }
                    }
                ],

                fixedHeader: {
                    header: true,
                    headerOffset: fixedHeaderOffset
                },
                // setup responsive extension: http://datatables.net/extensions/responsive/
                responsive: true,

                //"ordering": false, disable column ordering
                colReorder: {
                    reorderCallback: function() {
                        console.log('colReorder_callback');
                    }
                },
                // rowReorder: true,

                order: [
                    [0, 'asc']
                ],

                lengthMenu: [
                    [5, 10, 20, 50, 100, 150, -1],
                    [5, 10, 20, 50, 100, 150, "All"] // change per page values here
                ],
                // set the initial value
                pageLength: 10,
                pagingType: "bootstrap_full_number",

                //http://datatables.club/reference/option/dom.html
                dom: "<'row' <'col-md-12'B>><'row'<'#searchspan'><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-2 col-sm-6 padding-top-4'l><'col-md-3 col-sm-6'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

                // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
                // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
                // So when dropdowns used the scrollable div should be removed.
                //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

                //callbacks
                // 当每一行的tr标签被创建时调用
                // "createdRow": function ( row, data, index ) {
                //     //行渲染回调,在这里可以对该行dom元素进行任何操作
                //     var $btn = $('<div class="btn-group text-cen">'+
                //             '<button type="button" class="btn btn-sm btn-primary btn-edit">修改</button>'+
                //             '<button type="button" class="btn btn-sm btn-danger btn-del">删除</button>'+
                //             '</div>'+
                //             '</div>');
                //     $('td', row).eq(3).append($btn);
                // },

                //drawCallback : datatables每次重绘时将调用
                //initComplete : 渲染完调用
                //preDrawCallback : 绘制前调用
                //rowCallback : 绘制完每一行调用
                //stateloaded ： 加载完保存的状态后调用

            }).api();
        }
    }

    return {

        //main function to initiate the module
        init: function() {

            if (!jQuery().dataTable) {
                return;
            }
            initPickers();
            initTable();

        }

    };

}();

var addSearchSpan = function(htmlStr) {
    $("#searchspan").html(htmlStr);
    return;
};

</script>

<style>
.padding-top-4 {
    padding-top: 4px;
}
</style>
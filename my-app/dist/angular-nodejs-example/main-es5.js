function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/ag-grid/ag-grid.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/ag-grid/ag-grid.component.ts ***!
    \**********************************************/

  /*! exports provided: AgGridComponent */

  /***/
  function srcAppAgGridAgGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgGridComponent", function () {
      return AgGridComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_1__);

    var AgGridComponent =
    /*#__PURE__*/
    function () {
      function AgGridComponent() {
        _classCallCheck(this, AgGridComponent);
      }

      _createClass(AgGridComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          console.log(changes); //  if(changes['columnDefs'].currentValue){
          //   this.ColumnDefs= changes['columnDefs']?.currentValue;
          //  }
          // if(changes['RowData'].currentValue){

          this.RowData = changes['RowData'].currentValue; // }
          // if(changes['columnIsColumnsToFitDefs'].currentValue){
          //  this.IsColumnsToFit= changes['columnIsColumnsToFitDefs']!.currentValue;
          // }
        }
      }, {
        key: "BindData",
        value: function BindData(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          params.api.setRowData(this.RowData);

          if (this.IsColumnsToFit) {
            this.gridApi.sizeColumnsToFit();
          }
        }
      }]);

      return AgGridComponent;
    }();

    AgGridComponent.??fac = function AgGridComponent_Factory(t) {
      return new (t || AgGridComponent)();
    };

    AgGridComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AgGridComponent,
      selectors: [["app-ag-grid"]],
      inputs: {
        ColumnDefs: "ColumnDefs",
        RowData: "RowData",
        IsColumnsToFit: "IsColumnsToFit"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
      decls: 10,
      vars: 4,
      consts: [[2, "width", "100%", "height", "100%"], ["id", "dynamic-table", 1, "table", "table-stripedtable-hover", 2, "width", "100%", "height", "100%"], [1, "d-flex", "flex-row-reverse"], ["title", "Export to Jupyter", 1, "btn", "mr-1", 2, "margin-bottom", "5px", "font-weight", "bold"], ["src", "assets/images/jupyter_icon.png", "alt", "", 2, "width", "25px", "height", "25px"], ["title", "Export to Snowflake", 1, "btn", "mr-1", 2, "margin-bottom", "5px", "font-weight", "bold"], ["src", "assets/images/snowflakes-icon.png", "alt", "", 2, "width", "25px", "height", "25px"], ["title", "Export to Excel", 1, "btn", "mr-1", 2, "margin-bottom", "5px", "font-weight", "bold"], ["src", "assets/images/excel-icon.png", "alt", "", 2, "width", "25px", "height", "25px"], [1, "ag-theme-blue", 2, "width", "100%", "height", "85%", 3, "columnDefs", "pagination", "paginationPageSize", "animateRows", "gridReady"]],
      template: function AgGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ag-grid-angular", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("gridReady", function AgGridComponent_Template_ag_grid_angular_gridReady_9_listener($event) {
            return ctx.BindData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("columnDefs", ctx.ColumnDefs)("pagination", true)("paginationPageSize", 10)("animateRows", true);
        }
      },
      directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridAngular"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnLWdyaWQvYWctZ3JpZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AgGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ag-grid',
          templateUrl: './ag-grid.component.html',
          styleUrls: ['./ag-grid.component.css']
        }]
      }], null, {
        ColumnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        RowData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        IsColumnsToFit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/analytics-live/analytics-live.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/analytics-live/analytics-live.component.ts ***!
    \************************************************************/

  /*! exports provided: AnalyticsLiveComponent */

  /***/
  function srcAppAnalyticsLiveAnalyticsLiveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsLiveComponent", function () {
      return AnalyticsLiveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var spinners_angular_spinner_dotted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! spinners-angular/spinner-dotted */
    "./node_modules/spinners-angular/__ivy_ngcc__/fesm2015/spinners-angular-spinner-dotted.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ag-grid/ag-grid.component */
    "./src/app/ag-grid/ag-grid.component.ts");

    function AnalyticsLiveComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Diseases/ICD10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r0.grid1ColumnDefs)("RowData", ctx_r0.gridData1)("IsColumnsToFit", true);
      }
    }

    function AnalyticsLiveComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Relevant Concepts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r1.grid2ColumnDefs)("RowData", ctx_r1.gridData2)("IsColumnsToFit", true);
      }
    }

    function AnalyticsLiveComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Find Drug Codes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r2.grid4ColumnDefs)("RowData", ctx_r2.gridData4)("IsColumnsToFit", true);
      }
    }

    function AnalyticsLiveComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Pharmacological Substance/Clinical Drugs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r3.grid3ColumnDefs)("RowData", ctx_r3.gridData3)("IsColumnsToFit", true);
      }
    }

    function AnalyticsLiveComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AnalyticsLiveComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var AnalyticsLiveComponent =
    /*#__PURE__*/
    function () {
      function AnalyticsLiveComponent(appService) {
        _classCallCheck(this, AnalyticsLiveComponent);

        this.appService = appService;
        this.AgLoad = false;
        this.asthmaGrid = false;
        this.diabeticsGrid = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AnalyticsLiveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.GetAgColumns();
        }
      }, {
        key: "GetAgColumns",
        value: function GetAgColumns() {
          this.grid1ColumnDefs = [{
            headerName: 'ICD10_ID',
            field: 'ICD10_ID',
            sortable: true,
            filter: true
          }, {
            headerName: 'Disease',
            field: 'Disease',
            sortable: true,
            filter: true
          }];
          this.grid2ColumnDefs = [{
            headerName: 'Rx_Unique_ID',
            field: 'Rx_Unique_ID',
            sortable: true,
            filter: true
          }, {
            headerName: 'Rx_Code',
            field: 'Rx_Code',
            sortable: true,
            filter: true
          }, {
            headerName: 'Drugname',
            field: 'Drugname',
            sortable: true,
            filter: true
          }];
          this.grid3ColumnDefs = [{
            headerName: 'GENERIC_PROD_ID_NAME',
            field: 'GENERIC_PROD_ID_NAME',
            sortable: true,
            filter: true
          }, {
            headerName: 'COUNT',
            field: 'COUNT',
            sortable: true,
            filter: true
          }];
          this.grid4ColumnDefs = [{
            headerName: 'Code',
            field: 'Code',
            sortable: true,
            filter: true
          }, {
            headerName: 'NDC',
            field: 'NDC',
            sortable: true,
            filter: true
          }, {
            headerName: 'STR',
            field: 'STR',
            sortable: true,
            filter: true
          }];
        }
      }, {
        key: "modalChanged",
        value: function modalChanged(event) {
          if (this.searchText === '') {
            this.gridData1 = [];
            this.gridData2 = [];
            this.gridData3 = [];
            this.gridData4 = [];
            this.asthmaGrid = false;
          }
        }
      }, {
        key: "getDrugInfo",
        value: function getDrugInfo(gridNumber) {
          var _this = this;

          // switch (gridNumber) {
          //   case 1:
          //     this.gridData1 = [];
          //     break;
          //   case 2:
          //     this.gridData2 = [];
          //     break;
          //   case 3:
          //     this.gridData3 = [];
          //     break;
          //   case 4:
          //     this.gridData4 = [];
          //     break;
          // }
          this.asthmaGrid = false;
          this.diabeticsGrid = false;
          this.AgLoad = true;
          this.gridNumber = gridNumber;
          this.appService.getGridData(gridNumber, this.searchText).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              var _a, _b;

              _this.AgLoad = false;

              if (gridNumber === 1) {
                _this.gridData1 = gridData;
              } else if (gridNumber === 2) {
                _this.gridData2 = gridData;
              } else if (gridNumber === 3) {
                _this.gridData3 = gridData;

                if (['asthma', 'astma', 'astmma'].includes((_a = _this.searchText) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
                  _this.asthmaGrid = true;
                } else if (['diabetics', 'diabetic', 'diabeteic', 'diabetes type 2', 'type 2 diabetes', 'diabetes'].includes((_b = _this.searchText) === null || _b === void 0 ? void 0 : _b.toLowerCase())) {
                  _this.diabeticsGrid = true;
                }
              } else if (gridNumber === 4) {
                _this.gridData4 = gridData;
              }
            }, 4000);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }]);

      return AnalyticsLiveComponent;
    }();

    AnalyticsLiveComponent.??fac = function AnalyticsLiveComponent_Factory(t) {
      return new (t || AnalyticsLiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
    };

    AnalyticsLiveComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AnalyticsLiveComponent,
      selectors: [["app-analytics-live"]],
      decls: 52,
      vars: 15,
      consts: [[1, "ideathon-banner-wrapper"], [1, "ideathon-banner", "clearfix"], [1, "ideathon-banner-image"], ["src", "assets/images/ideathon-banner.png", "alt", ""], [1, "card"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-2"], [1, "input-group", "ps-5"], ["id", "navbar-search-autocomplete", 1, "form-outline"], ["type", "search", "id", "form1", "placeholder", "Type of Diseases", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "form1", 1, "form-label"], [1, "col-sm-6"], ["type", "button", 1, "btn", "btn-labeled", "btn-info", "mr-1", 3, "click"], [1, "btn-label"], [1, "glyphicon", "glyphicon-refresh"], [1, "col-sm-12", 2, "text-align", "center"], [3, "enabled", "color"], ["class", "col-sm-12", 4, "ngIf"], [4, "ngIf"], [1, "col-sm-12"], [1, "card-body"], [1, "ag-theme-balham", 2, "height", "350px"], [3, "ColumnDefs", "RowData", "IsColumnsToFit"], [2, "text-align", "center"], ["src", "assets/images/astma.png", "alt", "", 2, "width", "1400px", "height", "600px"], ["src", "assets/images/diabetic.png", "alt", "", 2, "width", "1400px", "height", "600px"]],
      template: function AnalyticsLiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AnalyticsLiveComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.modalChanged($event);
          })("ngModelChange", function AnalyticsLiveComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnalyticsLiveComponent_Template_button_click_14_listener() {
            return ctx.getDrugInfo(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Get Diseases/ICD10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnalyticsLiveComponent_Template_button_click_18_listener() {
            return ctx.getDrugInfo(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Search Relevant Concepts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnalyticsLiveComponent_Template_button_click_22_listener() {
            return ctx.getDrugInfo(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Drug Codes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnalyticsLiveComponent_Template_button_click_26_listener() {
            return ctx.getDrugInfo(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Find Substance /Clinical Drugs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "sa-spinner-dotted", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Finding Diseases/ICD10...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, AnalyticsLiveComponent_div_34_Template, 7, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "sa-spinner-dotted", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Getting Relevant Concepts...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, AnalyticsLiveComponent_div_39_Template, 7, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "sa-spinner-dotted", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Find Drug Codes ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, AnalyticsLiveComponent_div_44_Template, 7, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "sa-spinner-dotted", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Searching Clinical Drugs ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, AnalyticsLiveComponent_div_49_Template, 7, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, AnalyticsLiveComponent_div_50_Template, 3, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, AnalyticsLiveComponent_div_51_Template, 3, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx.gridData1 && ctx.AgLoad && ctx.gridNumber === 1)("color", "#1e90ff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gridData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx.gridData2 && ctx.AgLoad && ctx.gridNumber === 2)("color", "#1e90ff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gridData2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx.gridData4 && ctx.AgLoad && ctx.gridNumber === 4)("color", "#1e90ff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gridData4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx.gridData3 && ctx.AgLoad && ctx.gridNumber === 3)("color", "#1e90ff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gridData3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.asthmaGrid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.diabeticsGrid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], spinners_angular_spinner_dotted__WEBPACK_IMPORTED_MODULE_5__["SpinnerDottedComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_7__["AgGridComponent"]],
      styles: ["@font-face {\n  font-family: \"Fort\";\n  src: url(/assets/fonts/Fort-Book.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortExtraBold\";\n  src: url(/assets/fonts/Fort-Extrabold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortTT\";\n  src: url(/assets/fonts/FortTT-Book.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTBold\";\n  src: url(/assets/fonts/FortTT-Bold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTExtraBold\";\n  src: url(/assets/fonts/FortTT-Extrabold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTLight\";\n  src: url(/assets/fonts/FortTT-Light.ttf) format(\"truetype\");\n}\n.quiz-lever[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.quiz-lever[_ngcontent-%COMP%]   .lever-text[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.quiz-lever[_ngcontent-%COMP%]   .lever-slider[_ngcontent-%COMP%] {\n  width: 60%;\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .quiz-lever[_ngcontent-%COMP%]   .lever-slider[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  .quiz-lever[_ngcontent-%COMP%]   .lever-slider[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n.quiz-lever[_ngcontent-%COMP%]   .ng5-slider-bubble[_ngcontent-%COMP%] {\n  bottom: 20px;\n}\n.lever-weightage[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #686868;\n  font-family: \"FortTT\", sans-serif;\n  font-size: 15px;\n  padding-right: 50px;\n}\n.info[_ngcontent-%COMP%] {\n  font-family: \"FortTTBold\", sans-serif;\n  font-size: 15px;\n  color: red;\n  float: left;\n  margin-top: 20px;\n}\n.admin-image-tags[_ngcontent-%COMP%] {\n  width: 83%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .admin-image-tags[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .admin-image-tags[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n.admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 90px;\n  margin: 5px;\n  border: 1px solid #006e74;\n  color: #006e74;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #CCE2E3;\n  padding: 0px 20px;\n}\n.admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag.selected[_ngcontent-%COMP%] {\n  background-color: #006e74;\n  color: #fff;\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  .admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag[_ngcontent-%COMP%] {\n    min-width: 70px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  .admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbHl0aWNzLWxpdmUvQzpcXFVzZXJzXFx5cmFvXFxPbmVEcml2ZSAtIE1lcmF0aXZlXFxEZXNrdG9wXFx1c3QgY29ob3J0IGJ1aWxkZXJcXGhlYWx0aGNhcmVcXEhlYWx0aENhcmVBbmFseXRpY3MtMjAtMDUtMjAyMi1tYWluXFxteS1hcHAvc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FuYWx5dGljcy1saXZlL2FuYWx5dGljcy1saXZlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbmFseXRpY3MtbGl2ZS9DOlxcVXNlcnNcXHlyYW9cXE9uZURyaXZlIC0gTWVyYXRpdmVcXERlc2t0b3BcXHVzdCBjb2hvcnQgYnVpbGRlclxcaGVhbHRoY2FyZVxcSGVhbHRoQ2FyZUFuYWx5dGljcy0yMC0wNS0yMDIyLW1haW5cXG15LWFwcC9zcmNcXGFwcFxcYW5hbHl0aWNzLWxpdmVcXGFuYWx5dGljcy1saXZlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbmFseXRpY3MtbGl2ZS9DOlxcVXNlcnNcXHlyYW9cXE9uZURyaXZlIC0gTWVyYXRpdmVcXERlc2t0b3BcXHVzdCBjb2hvcnQgYnVpbGRlclxcaGVhbHRoY2FyZVxcSGVhbHRoQ2FyZUFuYWx5dGljcy0yMC0wNS0yMDIyLW1haW5cXG15LWFwcC9zcmNcXHNhc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esd0RBQUE7QUNDRjtBRENBO0VBQ0UsNEJBQUE7RUFDQSw2REFBQTtBQ0NGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLDBEQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0EsMERBQUE7QUNDRjtBRENBO0VBQ0UsOEJBQUE7RUFDQSwrREFBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDJEQUFBO0FDQ0Y7QUNyQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUR1Qko7QUNyQkk7RUFDSSxVQUFBO0FEdUJSO0FDcEJJO0VBQ0ksVUFBQTtBRHNCUjtBQ3BCUTtFQUhKO0lBSVEsaUJBQUE7RUR1QlY7QUFDRjtBQ3JCUTtFQVBKO0lBUVEsaUJBQUE7RUR3QlY7QUFDRjtBQ3JCSTtFQUNJLFlBQUE7QUR1QlI7QUNuQkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUNBRixpQ0htQmU7RUdsQmYsZUFBQTtFRENFLG1CQUFBO0FEdUJKO0FDcEJBO0VDS0UscUNIV29CO0VHVnBCLGVBQUE7RURKRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEd0JKO0FDckJBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEd0JKO0FDdEJJO0VBTko7SUFPUSxXQUFBO0VEeUJOO0FBQ0Y7QUN2Qkk7RUFWSjtJQVdRLFdBQUE7RUQwQk47QUFDRjtBQ3hCSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0ZoQ1k7RUVpQ1osYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FEMEJSO0FDeEJRO0VBQ0kseUJGeENRO0VFeUNSLFdBQUE7QUQwQlo7QUN2QlE7RUFqQko7SUFrQlEsZUFBQTtFRDBCVjtBQUNGO0FDeEJRO0VBckJKO0lBc0JRLGVBQUE7RUQyQlY7QUFDRjtBQ3pCUTtFQXpCSjtJQTBCUSxlQUFBO0VENEJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hbmFseXRpY3MtbGl2ZS9hbmFseXRpY3MtbGl2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvcnQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnQtQm9vay5vdGYpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvcnRFeHRyYUJvbGQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnQtRXh0cmFib2xkLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydFRUJztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtQm9vay50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvcnRUVEJvbGQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydFRURXh0cmFCb2xkJztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtRXh0cmFib2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydFRUTGlnaHQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1MaWdodC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuJHByaW1hcnktY29sb3I6ICMyNzc1N2M7XG4kcHJpbWFyeS1xdWl6LWJnOiAjZjJmN2Y4O1xuJHNlY29uZGFyeS1jb2xvcjogIzAwOTdhYztcbiRyaWdodC1mbG9hdGluZy1iZzogIzAwNmU3NDtcblxuJHNwZWNpYWwtY29sb3ItMTogIzY2NWZkMTtcbiRzcGVjaWFsLWNvbG9yLTI6ICM1NzRiOTA7XG4kc3BlY2lhbC1jb2xvci0zOiAjMzhhZGE5O1xuJHNwZWNpYWwtY29sb3ItNDogI2E1NWVlYTtcbiRzcGVjaWFsLWNvbG9yLTU6ICNkNTU1NTg7XG4kc3BlY2lhbC1jb2xvci02OiAjZDZhMDViO1xuJHNwZWNpYWwtY29sb3ItNzogI2E0NjcwYjtcbiRzcGVjaWFsLWNvbG9yLTg6ICM0NzdlODA7XG4kc3BlY2lhbC1jb2xvci05OiAjZmM4MjRhO1xuJHNwZWNpYWwtY29sb3ItMTA6ICNmZjFlMDA7XG4kc3BlY2lhbC1jb2xvci0xMTogIzAwYWVmZjtcbiRzcGVjaWFsLWNvbG9yLTEyOiAjMzI0ZTdiO1xuJHNwZWNpYWwtY29sb3ItMTM6ICNjOTRlNGU7XG4kc3BlY2lhbC1jb2xvci0xNDogIzAxYmVmZjtcbiRzcGVjaWFsLWNvbG9yLTE1OiAjNjA2MDYwO1xuXG4kcHJpbWFyeS1mb250OiAnRm9ydCcsIHNhbnMtc2VyaWY7XG4kcHJpbWFyeS1mb250LWV4dHJhYm9sZDogJ0ZvcnRFeHRyYUJvbGQnLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250OiAnRm9ydFRUJywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udC1saWdodDogJ0ZvcnRUVExpZ2h0Jywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udC1ib2xkOiAnRm9ydFRUQm9sZCcsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQtZXh0cmFib2xkOiAnRm9ydFRURXh0cmFCb2xkJywgc2Fucy1zZXJpZjtcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0XCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydC1Cb29rLm90ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnQtRXh0cmFib2xkLm90ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFRUXCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUJvb2sudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0VFRCb2xkXCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0VFRFeHRyYUJvbGRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtRXh0cmFib2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFRUTGlnaHRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtTGlnaHQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbi5xdWl6LWxldmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWl6LWxldmVyIC5sZXZlci10ZXh0IHtcbiAgd2lkdGg6IDM1JTtcbn1cbi5xdWl6LWxldmVyIC5sZXZlci1zbGlkZXIge1xuICB3aWR0aDogNjAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAucXVpei1sZXZlciAubGV2ZXItc2xpZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5xdWl6LWxldmVyIC5sZXZlci1zbGlkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4ucXVpei1sZXZlciAubmc1LXNsaWRlci1idWJibGUge1xuICBib3R0b206IDIwcHg7XG59XG5cbi5sZXZlci13ZWlnaHRhZ2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRUVFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5pbmZvIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFRUQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYWRtaW4taW1hZ2UtdGFncyB7XG4gIHdpZHRoOiA4MyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuYWRtaW4taW1hZ2UtdGFncyB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAuYWRtaW4taW1hZ2UtdGFncyB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5hZG1pbi1pbWFnZS10YWdzIC5hZG1pbi1pbWFnZS10YWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDZlNzQ7XG4gIGNvbG9yOiAjMDA2ZTc0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDRTJFMztcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG4uYWRtaW4taW1hZ2UtdGFncyAuYWRtaW4taW1hZ2UtdGFnLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmU3NDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgLmFkbWluLWltYWdlLXRhZ3MgLmFkbWluLWltYWdlLXRhZyB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUycHgpIGFuZCAobWF4LWhlaWdodDogODY0cHgpIHtcbiAgLmFkbWluLWltYWdlLXRhZ3MgLmFkbWluLWltYWdlLXRhZyB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgLmFkbWluLWltYWdlLXRhZ3MgLmFkbWluLWltYWdlLXRhZyB7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vc2Fzcy9taXhpbnMnO1xuXG4ucXVpei1sZXZlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmxldmVyLXRleHQge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgIH1cblxuICAgIC5sZXZlci1zbGlkZXIge1xuICAgICAgICB3aWR0aDogNjAlO1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uZzUtc2xpZGVyLWJ1YmJsZSB7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5sZXZlci13ZWlnaHRhZ2Uge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjNjg2ODY4O1xuICAgIEBpbmNsdWRlIHNlY29uZGFyeS1mcygxNSk7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLmluZm8ge1xuICAgIEBpbmNsdWRlIHNlY29uZGFyeS1ib2xkLWZzKDE1KTtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hZG1pbi1pbWFnZS10YWdzIHtcbiAgICB3aWR0aDogODMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgIC5hZG1pbi1pbWFnZS10YWcge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRyaWdodC1mbG9hdGluZy1iZztcbiAgICAgICAgY29sb3I6ICRyaWdodC1mbG9hdGluZy1iZztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0UyRTM7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpZ2h0LWZsb2F0aW5nLWJnO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xuXG4kcHJlZml4ZXM6ICd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nLCAnbm9uZSc7XG5AbWl4aW4gcHJlZml4KCRwcm9wZXJ0eSwgJGFyZ3VtZW50cykge1xuICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XG4gICAgQGlmICRwcmVmaXggPT0gJ25vbmUnIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGFyZ3VtZW50cztcbiAgICB9IEBlbHNlIHtcbiAgICAgIC0jeyRwcmVmaXh9LSN7JHByb3BlcnR5fTogJGFyZ3VtZW50cztcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGZvcm0taW5wdXQtc3R5bGUoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtaXhpbiBwcmltYXJ5LWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gcHJpbWFyeS1leHRyYWJvbGQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udC1leHRyYWJvbGQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gc2Vjb25kYXJ5LWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBzZWNvbmRhcnktbGlnaHQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWxpZ2h0O1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1ib2xkLWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udC1ib2xkO1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1leHRyYWJvbGQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWV4dHJhYm9sZDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBiZ2Mtc3BlY2lhbCgpIHtcbiAgLmJnLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgLmJnLTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgLmJnLTMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTM7XG4gIH1cbiAgLmJnLTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgLmJnLTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgLmJnLTYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTY7XG4gIH1cbiAgLmJnLTcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgLmJnLTgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgLmJnLTkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTk7XG4gIH1cbiAgLmJnLTEwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAuYmctMTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gIC5iZy0xMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTI7XG4gIH1cbiAgLmJnLTEzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAuYmctMTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gIC5iZy0xNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTU7XG4gIH1cbn1cblxuQG1peGluIGNvbG9yLXNwZWNpYWwoKSB7XG4gIC5jb2xvci0xIHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAuY29sb3ItMiB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgLmNvbG9yLTMge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gIC5jb2xvci00IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAuY29sb3ItNSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgLmNvbG9yLTYge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gIC5jb2xvci03IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAuY29sb3ItOCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgLmNvbG9yLTkge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gIC5jb2xvci0xMCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gIC5jb2xvci0xMSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gIC5jb2xvci0xMiB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gIC5jb2xvci0xMyB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gIC5jb2xvci0xNCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gIC5jb2xvci0xNSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYmdjKCkge1xuICAmLmRvbWFpbjEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgJi5kb21haW4yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0yO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMztcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgJi5kb21haW41IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci01O1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNjtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgJi5kb21haW44IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci04O1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItOTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAmLmRvbWFpbjExIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMjtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAmLmRvbWFpbjE0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNDtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNTtcbiAgfVxufVxuXG5AbWl4aW4gcmdiYS1iZygkb3BhY2l0eSkge1xuICAmLmRvbWFpbjEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0yLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTMsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci01LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTYsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItNywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci04LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTksICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTEwLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTIsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTEzLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gZG9tYWluLWZpbGwoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYm9yZGVyLXJpZ2h0KCRvcGFjaXR5KSB7XG4gICYuZG9tYWluMSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItOCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItOSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTEwLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTEsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xMiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTEzLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTQsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xNSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYm9yZGVyLWxlZnQtMTUoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYm9yZGVyLTEoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBpZGVhdGhvbi1iYW5uZXItYmcoKSB7XG4gICYuYmctMSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTEpO1xuICB9XG4gICYuYmctMiB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTIpO1xuICB9XG4gICYuYmctMyB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTMpO1xuICB9XG4gICYuYmctNCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTQpO1xuICB9XG4gICYuYmctNSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTUpO1xuICB9XG4gICYuYmctNiB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTYpO1xuICB9XG4gICYuYmctNyB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTcpO1xuICB9XG4gICYuYmctOCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTgpO1xuICB9XG4gICYuYmctOSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTkpO1xuICB9XG4gICYuYmctMTAge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xMCk7XG4gIH1cbiAgJi5iZy0xMSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTExKTtcbiAgfVxuICAmLmJnLTEyIHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTIpO1xuICB9XG4gICYuYmctMTMge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xMyk7XG4gIH1cbiAgJi5iZy0xNCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTE0KTtcbiAgfVxuICAmLmJnLTE1IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTUpO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AnalyticsLiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-analytics-live',
          templateUrl: './analytics-live.component.html',
          styleUrls: ['./analytics-live.component.scss']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/analytics/analytics.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/analytics/analytics.component.ts ***!
    \**************************************************/

  /*! exports provided: AnalyticsComponent */

  /***/
  function srcAppAnalyticsAnalyticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function () {
      return AnalyticsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var spinners_angular_spinner_dotted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! spinners-angular/spinner-dotted */
    "./node_modules/spinners-angular/__ivy_ngcc__/fesm2015/spinners-angular-spinner-dotted.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ag-grid/ag-grid.component */
    "./src/app/ag-grid/ag-grid.component.ts");

    function AnalyticsComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Diseases/ICD10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r0.grid1ColumnDefs)("RowData", ctx_r0.gridData1)("IsColumnsToFit", true);
      }
    }

    function AnalyticsComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Relevant Concepts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r1.grid2ColumnDefs)("RowData", ctx_r1.gridData2)("IsColumnsToFit", true);
      }
    }

    function AnalyticsComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Find Drug Codes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r2.grid4ColumnDefs)("RowData", ctx_r2.gridData4)("IsColumnsToFit", true);
      }
    }

    function AnalyticsComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Pharmacological Substance/Clinical Drugs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r3.grid3ColumnDefs)("RowData", ctx_r3.gridData3)("IsColumnsToFit", true);
      }
    }

    function AnalyticsComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AnalyticsComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var AnalyticsComponent =
    /*#__PURE__*/
    function () {
      function AnalyticsComponent(appService) {
        _classCallCheck(this, AnalyticsComponent);

        this.appService = appService;
        this.AgLoad = false;
        this.asthmaGrid = false;
        this.diabeticsGrid = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AnalyticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.GetAgColumns();
        }
      }, {
        key: "GetAgColumns",
        value: function GetAgColumns() {
          this.grid1ColumnDefs = [{
            headerName: 'ICD10_ID',
            field: 'ICD10_ID',
            sortable: true,
            filter: true
          }, {
            headerName: 'Disease',
            field: 'Disease',
            sortable: true,
            filter: true
          }];
          this.grid2ColumnDefs = [{
            headerName: 'Rx_Unique_ID',
            field: 'Rx_Unique_ID',
            sortable: true,
            filter: true
          }, {
            headerName: 'Rx_Code',
            field: 'Rx_Code',
            sortable: true,
            filter: true
          }, {
            headerName: 'Drugname',
            field: 'Drugname',
            sortable: true,
            filter: true
          }];
          this.grid3ColumnDefs = [{
            headerName: 'GENERIC_PROD_ID_NAME',
            field: 'GENERIC_PROD_ID_NAME',
            sortable: true,
            filter: true
          }, {
            headerName: 'COUNT',
            field: 'COUNT',
            sortable: true,
            filter: true
          }];
          this.grid4ColumnDefs = [{
            headerName: 'Code',
            field: 'Code',
            sortable: true,
            filter: true
          }, {
            headerName: 'NDC',
            field: 'NDC',
            sortable: true,
            filter: true
          }, {
            headerName: 'STR',
            field: 'STR',
            sortable: true,
            filter: true
          }];
        }
      }, {
        key: "modalChanged",
        value: function modalChanged(event) {
          if (this.searchText === '') {
            this.gridData1 = [];
            this.gridData2 = [];
            this.gridData3 = [];
            this.gridData4 = [];
            this.asthmaGrid = false;
          }
        }
      }, {
        key: "getDrugInfo",
        value: function getDrugInfo(gridNumber) {
          var _this2 = this;

          // switch (gridNumber) {
          //   case 1:
          //     this.gridData1 = [];
          //     break;
          //   case 2:
          //     this.gridData2 = [];
          //     break;
          //   case 3:
          //     this.gridData3 = [];
          //     break;
          //   case 4:
          //     this.gridData4 = [];
          //     break;
          // }
          this.asthmaGrid = false;
          this.diabeticsGrid = false;
          this.AgLoad = true;
          this.gridNumber = gridNumber;
          this.appService.getGridData(gridNumber, this.searchText).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              var _a, _b;

              _this2.AgLoad = false;

              if (gridNumber === 1) {
                _this2.gridData1 = gridData;
              } else if (gridNumber === 2) {
                _this2.gridData2 = gridData;
              } else if (gridNumber === 3) {
                _this2.gridData3 = gridData;

                if (['asthma', 'astma', 'astmma'].includes((_a = _this2.searchText) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
                  _this2.asthmaGrid = true;
                } else if (['diabetics', 'diabetic', 'diabeteic', 'diabetes type 2', 'type 2 diabetes', 'diabetes', 'diabetestype2', 'type2diabetes'].includes((_b = _this2.searchText) === null || _b === void 0 ? void 0 : _b.toLowerCase())) {
                  _this2.diabeticsGrid = true;
                }
              } else if (gridNumber === 4) {
                _this2.gridData4 = gridData;
              }
            }, 4000);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }]);

      return AnalyticsComponent;
    }();

    AnalyticsComponent.??fac = function AnalyticsComponent_Factory(t) {
      return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
    };

    AnalyticsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AnalyticsComponent,
      selectors: [["app-analytics"]],
      decls: 52,
      vars: 15,
      consts: [[1, "ideathon-banner-wrapper"], [1, "ideathon-banner", "clearfix"], [1, "ideathon-banner-image"], ["src", "assets/images/ideathon-banner.png", "alt", ""], [1, "card"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-2"], [1, "input-group", "ps-5"], ["id", "navbar-search-autocomplete", 1, "form-outline"], ["type", "search", "id", "form1", "placeholder", "Type of Diseases", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "form1", 1, "form-label"], [1, "col-sm-6"], ["type", "button", 1, "btn", "btn-labeled", "btn-info", "mr-1", 3, "click"], [1, "btn-label"], [1, "glyphicon", "glyphicon-refresh"], [1, "col-sm-12", 2, "text-align", "center"], [3, "enabled", "color"], ["class", "col-sm-12", 4, "ngIf"], [4, "ngIf"], [1, "col-sm-12"], [1, "card-body"], [1, "ag-theme-balham", 2, "height", "350px"], [3, "ColumnDefs", "RowData", "IsColumnsToFit"], [2, "text-align", "center"], ["src", "assets/images/astma.png", "alt", "", 2, "width", "1400px", "height", "600px"], ["src", "assets/images/diabetic.png", "alt", "", 2, "width", "1400px", "height", "600px"]],
      template: function AnalyticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AnalyticsComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.modalChanged($event);
          })("ngModelChange", function AnalyticsComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnalyticsComponent_Template_button_click_14_listener() {
            return ctx.getDrugInfo(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Get Diseases/ICD10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnalyticsComponent_Template_button_click_18_listener() {
            return ctx.getDrugInfo(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Search Relevant Concepts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnalyticsComponent_Template_button_click_22_listener() {
            return ctx.getDrugInfo(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Drug Codes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnalyticsComponent_Template_button_click_26_listener() {
            return ctx.getDrugInfo(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Find Substance /Clinical Drugs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "sa-spinner-dotted", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Finding Diseases/ICD10...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, AnalyticsComponent_div_34_Template, 7, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "sa-spinner-dotted", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Getting Relevant Concepts...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, AnalyticsComponent_div_39_Template, 7, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "sa-spinner-dotted", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Find Drug Codes ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, AnalyticsComponent_div_44_Template, 7, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "sa-spinner-dotted", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Searching Clinical Drugs ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, AnalyticsComponent_div_49_Template, 7, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, AnalyticsComponent_div_50_Template, 3, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, AnalyticsComponent_div_51_Template, 3, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx.gridData1 && ctx.AgLoad && ctx.gridNumber === 1)("color", "#1e90ff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gridData1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx.gridData2 && ctx.AgLoad && ctx.gridNumber === 2)("color", "#1e90ff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gridData2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx.gridData4 && ctx.AgLoad && ctx.gridNumber === 4)("color", "#1e90ff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gridData4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx.gridData3 && ctx.AgLoad && ctx.gridNumber === 3)("color", "#1e90ff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gridData3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.asthmaGrid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.diabeticsGrid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], spinners_angular_spinner_dotted__WEBPACK_IMPORTED_MODULE_5__["SpinnerDottedComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_7__["AgGridComponent"]],
      styles: ["@font-face {\n  font-family: \"Fort\";\n  src: url(/assets/fonts/Fort-Book.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortExtraBold\";\n  src: url(/assets/fonts/Fort-Extrabold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortTT\";\n  src: url(/assets/fonts/FortTT-Book.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTBold\";\n  src: url(/assets/fonts/FortTT-Bold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTExtraBold\";\n  src: url(/assets/fonts/FortTT-Extrabold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTLight\";\n  src: url(/assets/fonts/FortTT-Light.ttf) format(\"truetype\");\n}\n.quiz-lever[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.quiz-lever[_ngcontent-%COMP%]   .lever-text[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.quiz-lever[_ngcontent-%COMP%]   .lever-slider[_ngcontent-%COMP%] {\n  width: 60%;\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .quiz-lever[_ngcontent-%COMP%]   .lever-slider[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  .quiz-lever[_ngcontent-%COMP%]   .lever-slider[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n.quiz-lever[_ngcontent-%COMP%]   .ng5-slider-bubble[_ngcontent-%COMP%] {\n  bottom: 20px;\n}\n.lever-weightage[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #686868;\n  font-family: \"FortTT\", sans-serif;\n  font-size: 15px;\n  padding-right: 50px;\n}\n.info[_ngcontent-%COMP%] {\n  font-family: \"FortTTBold\", sans-serif;\n  font-size: 15px;\n  color: red;\n  float: left;\n  margin-top: 20px;\n}\n.admin-image-tags[_ngcontent-%COMP%] {\n  width: 83%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .admin-image-tags[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .admin-image-tags[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n.admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 90px;\n  margin: 5px;\n  border: 1px solid #006e74;\n  color: #006e74;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #CCE2E3;\n  padding: 0px 20px;\n}\n.admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag.selected[_ngcontent-%COMP%] {\n  background-color: #006e74;\n  color: #fff;\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  .admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag[_ngcontent-%COMP%] {\n    min-width: 70px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  .admin-image-tags[_ngcontent-%COMP%]   .admin-image-tag[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbHl0aWNzL0M6XFxVc2Vyc1xceXJhb1xcT25lRHJpdmUgLSBNZXJhdGl2ZVxcRGVza3RvcFxcdXN0IGNvaG9ydCBidWlsZGVyXFxoZWFsdGhjYXJlXFxIZWFsdGhDYXJlQW5hbHl0aWNzLTIwLTA1LTIwMjItbWFpblxcbXktYXBwL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbmFseXRpY3MvQzpcXFVzZXJzXFx5cmFvXFxPbmVEcml2ZSAtIE1lcmF0aXZlXFxEZXNrdG9wXFx1c3QgY29ob3J0IGJ1aWxkZXJcXGhlYWx0aGNhcmVcXEhlYWx0aENhcmVBbmFseXRpY3MtMjAtMDUtMjAyMi1tYWluXFxteS1hcHAvc3JjXFxhcHBcXGFuYWx5dGljc1xcYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbmFseXRpY3MvQzpcXFVzZXJzXFx5cmFvXFxPbmVEcml2ZSAtIE1lcmF0aXZlXFxEZXNrdG9wXFx1c3QgY29ob3J0IGJ1aWxkZXJcXGhlYWx0aGNhcmVcXEhlYWx0aENhcmVBbmFseXRpY3MtMjAtMDUtMjAyMi1tYWluXFxteS1hcHAvc3JjXFxzYXNzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHdEQUFBO0FDQ0Y7QURDQTtFQUNFLDRCQUFBO0VBQ0EsNkRBQUE7QUNDRjtBRENBO0VBQ0UscUJBQUE7RUFDQSwwREFBQTtBQ0NGO0FEQ0E7RUFDRSx5QkFBQTtFQUNBLDBEQUFBO0FDQ0Y7QURDQTtFQUNFLDhCQUFBO0VBQ0EsK0RBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSwyREFBQTtBQ0NGO0FDckJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FEdUJKO0FDckJJO0VBQ0ksVUFBQTtBRHVCUjtBQ3BCSTtFQUNJLFVBQUE7QURzQlI7QUNwQlE7RUFISjtJQUlRLGlCQUFBO0VEdUJWO0FBQ0Y7QUNyQlE7RUFQSjtJQVFRLGlCQUFBO0VEd0JWO0FBQ0Y7QUNyQkk7RUFDSSxZQUFBO0FEdUJSO0FDbkJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VDQUYsaUNIbUJlO0VHbEJmLGVBQUE7RURDRSxtQkFBQTtBRHVCSjtBQ3BCQTtFQ0tFLHFDSFdvQjtFR1ZwQixlQUFBO0VESkUsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRHdCSjtBQ3JCQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRHdCSjtBQ3RCSTtFQU5KO0lBT1EsV0FBQTtFRHlCTjtBQUNGO0FDdkJJO0VBVko7SUFXUSxXQUFBO0VEMEJOO0FBQ0Y7QUN4Qkk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNGaENZO0VFaUNaLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBRDBCUjtBQ3hCUTtFQUNJLHlCRnhDUTtFRXlDUixXQUFBO0FEMEJaO0FDdkJRO0VBakJKO0lBa0JRLGVBQUE7RUQwQlY7QUFDRjtBQ3hCUTtFQXJCSjtJQXNCUSxlQUFBO0VEMkJWO0FBQ0Y7QUN6QlE7RUF6Qko7SUEwQlEsZUFBQTtFRDRCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW5hbHl0aWNzL2FuYWx5dGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvcnQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnQtQm9vay5vdGYpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvcnRFeHRyYUJvbGQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnQtRXh0cmFib2xkLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydFRUJztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtQm9vay50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvcnRUVEJvbGQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydFRURXh0cmFCb2xkJztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtRXh0cmFib2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydFRUTGlnaHQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1MaWdodC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuJHByaW1hcnktY29sb3I6ICMyNzc1N2M7XG4kcHJpbWFyeS1xdWl6LWJnOiAjZjJmN2Y4O1xuJHNlY29uZGFyeS1jb2xvcjogIzAwOTdhYztcbiRyaWdodC1mbG9hdGluZy1iZzogIzAwNmU3NDtcblxuJHNwZWNpYWwtY29sb3ItMTogIzY2NWZkMTtcbiRzcGVjaWFsLWNvbG9yLTI6ICM1NzRiOTA7XG4kc3BlY2lhbC1jb2xvci0zOiAjMzhhZGE5O1xuJHNwZWNpYWwtY29sb3ItNDogI2E1NWVlYTtcbiRzcGVjaWFsLWNvbG9yLTU6ICNkNTU1NTg7XG4kc3BlY2lhbC1jb2xvci02OiAjZDZhMDViO1xuJHNwZWNpYWwtY29sb3ItNzogI2E0NjcwYjtcbiRzcGVjaWFsLWNvbG9yLTg6ICM0NzdlODA7XG4kc3BlY2lhbC1jb2xvci05OiAjZmM4MjRhO1xuJHNwZWNpYWwtY29sb3ItMTA6ICNmZjFlMDA7XG4kc3BlY2lhbC1jb2xvci0xMTogIzAwYWVmZjtcbiRzcGVjaWFsLWNvbG9yLTEyOiAjMzI0ZTdiO1xuJHNwZWNpYWwtY29sb3ItMTM6ICNjOTRlNGU7XG4kc3BlY2lhbC1jb2xvci0xNDogIzAxYmVmZjtcbiRzcGVjaWFsLWNvbG9yLTE1OiAjNjA2MDYwO1xuXG4kcHJpbWFyeS1mb250OiAnRm9ydCcsIHNhbnMtc2VyaWY7XG4kcHJpbWFyeS1mb250LWV4dHJhYm9sZDogJ0ZvcnRFeHRyYUJvbGQnLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250OiAnRm9ydFRUJywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udC1saWdodDogJ0ZvcnRUVExpZ2h0Jywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udC1ib2xkOiAnRm9ydFRUQm9sZCcsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQtZXh0cmFib2xkOiAnRm9ydFRURXh0cmFCb2xkJywgc2Fucy1zZXJpZjtcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0XCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydC1Cb29rLm90ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnQtRXh0cmFib2xkLm90ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFRUXCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUJvb2sudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0VFRCb2xkXCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0VFRFeHRyYUJvbGRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtRXh0cmFib2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFRUTGlnaHRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtTGlnaHQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbi5xdWl6LWxldmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWl6LWxldmVyIC5sZXZlci10ZXh0IHtcbiAgd2lkdGg6IDM1JTtcbn1cbi5xdWl6LWxldmVyIC5sZXZlci1zbGlkZXIge1xuICB3aWR0aDogNjAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAucXVpei1sZXZlciAubGV2ZXItc2xpZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5xdWl6LWxldmVyIC5sZXZlci1zbGlkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4ucXVpei1sZXZlciAubmc1LXNsaWRlci1idWJibGUge1xuICBib3R0b206IDIwcHg7XG59XG5cbi5sZXZlci13ZWlnaHRhZ2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRUVFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5pbmZvIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFRUQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYWRtaW4taW1hZ2UtdGFncyB7XG4gIHdpZHRoOiA4MyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuYWRtaW4taW1hZ2UtdGFncyB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAuYWRtaW4taW1hZ2UtdGFncyB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5hZG1pbi1pbWFnZS10YWdzIC5hZG1pbi1pbWFnZS10YWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDZlNzQ7XG4gIGNvbG9yOiAjMDA2ZTc0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDRTJFMztcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG4uYWRtaW4taW1hZ2UtdGFncyAuYWRtaW4taW1hZ2UtdGFnLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmU3NDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgLmFkbWluLWltYWdlLXRhZ3MgLmFkbWluLWltYWdlLXRhZyB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUycHgpIGFuZCAobWF4LWhlaWdodDogODY0cHgpIHtcbiAgLmFkbWluLWltYWdlLXRhZ3MgLmFkbWluLWltYWdlLXRhZyB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgLmFkbWluLWltYWdlLXRhZ3MgLmFkbWluLWltYWdlLXRhZyB7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vc2Fzcy9taXhpbnMnO1xuXG4ucXVpei1sZXZlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmxldmVyLXRleHQge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgIH1cblxuICAgIC5sZXZlci1zbGlkZXIge1xuICAgICAgICB3aWR0aDogNjAlO1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uZzUtc2xpZGVyLWJ1YmJsZSB7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5sZXZlci13ZWlnaHRhZ2Uge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjNjg2ODY4O1xuICAgIEBpbmNsdWRlIHNlY29uZGFyeS1mcygxNSk7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLmluZm8ge1xuICAgIEBpbmNsdWRlIHNlY29uZGFyeS1ib2xkLWZzKDE1KTtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hZG1pbi1pbWFnZS10YWdzIHtcbiAgICB3aWR0aDogODMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgIC5hZG1pbi1pbWFnZS10YWcge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRyaWdodC1mbG9hdGluZy1iZztcbiAgICAgICAgY29sb3I6ICRyaWdodC1mbG9hdGluZy1iZztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0UyRTM7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpZ2h0LWZsb2F0aW5nLWJnO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xuXG4kcHJlZml4ZXM6ICd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nLCAnbm9uZSc7XG5AbWl4aW4gcHJlZml4KCRwcm9wZXJ0eSwgJGFyZ3VtZW50cykge1xuICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XG4gICAgQGlmICRwcmVmaXggPT0gJ25vbmUnIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGFyZ3VtZW50cztcbiAgICB9IEBlbHNlIHtcbiAgICAgIC0jeyRwcmVmaXh9LSN7JHByb3BlcnR5fTogJGFyZ3VtZW50cztcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGZvcm0taW5wdXQtc3R5bGUoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtaXhpbiBwcmltYXJ5LWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gcHJpbWFyeS1leHRyYWJvbGQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udC1leHRyYWJvbGQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gc2Vjb25kYXJ5LWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBzZWNvbmRhcnktbGlnaHQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWxpZ2h0O1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1ib2xkLWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udC1ib2xkO1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1leHRyYWJvbGQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWV4dHJhYm9sZDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBiZ2Mtc3BlY2lhbCgpIHtcbiAgLmJnLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgLmJnLTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgLmJnLTMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTM7XG4gIH1cbiAgLmJnLTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgLmJnLTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgLmJnLTYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTY7XG4gIH1cbiAgLmJnLTcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgLmJnLTgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgLmJnLTkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTk7XG4gIH1cbiAgLmJnLTEwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAuYmctMTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gIC5iZy0xMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTI7XG4gIH1cbiAgLmJnLTEzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAuYmctMTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gIC5iZy0xNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTU7XG4gIH1cbn1cblxuQG1peGluIGNvbG9yLXNwZWNpYWwoKSB7XG4gIC5jb2xvci0xIHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAuY29sb3ItMiB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgLmNvbG9yLTMge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gIC5jb2xvci00IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAuY29sb3ItNSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgLmNvbG9yLTYge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gIC5jb2xvci03IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAuY29sb3ItOCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgLmNvbG9yLTkge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gIC5jb2xvci0xMCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gIC5jb2xvci0xMSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gIC5jb2xvci0xMiB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gIC5jb2xvci0xMyB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gIC5jb2xvci0xNCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gIC5jb2xvci0xNSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYmdjKCkge1xuICAmLmRvbWFpbjEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgJi5kb21haW4yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0yO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMztcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgJi5kb21haW41IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci01O1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNjtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgJi5kb21haW44IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci04O1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItOTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAmLmRvbWFpbjExIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMjtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAmLmRvbWFpbjE0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNDtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNTtcbiAgfVxufVxuXG5AbWl4aW4gcmdiYS1iZygkb3BhY2l0eSkge1xuICAmLmRvbWFpbjEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0yLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTMsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci01LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTYsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItNywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci04LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTksICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTEwLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTIsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTEzLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gZG9tYWluLWZpbGwoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYm9yZGVyLXJpZ2h0KCRvcGFjaXR5KSB7XG4gICYuZG9tYWluMSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItOCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItOSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTEwLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTEsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xMiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTEzLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTQsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xNSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYm9yZGVyLWxlZnQtMTUoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYm9yZGVyLTEoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBpZGVhdGhvbi1iYW5uZXItYmcoKSB7XG4gICYuYmctMSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTEpO1xuICB9XG4gICYuYmctMiB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTIpO1xuICB9XG4gICYuYmctMyB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTMpO1xuICB9XG4gICYuYmctNCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTQpO1xuICB9XG4gICYuYmctNSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTUpO1xuICB9XG4gICYuYmctNiB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTYpO1xuICB9XG4gICYuYmctNyB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTcpO1xuICB9XG4gICYuYmctOCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTgpO1xuICB9XG4gICYuYmctOSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTkpO1xuICB9XG4gICYuYmctMTAge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xMCk7XG4gIH1cbiAgJi5iZy0xMSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTExKTtcbiAgfVxuICAmLmJnLTEyIHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTIpO1xuICB9XG4gICYuYmctMTMge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xMyk7XG4gIH1cbiAgJi5iZy0xNCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTE0KTtcbiAgfVxuICAmLmJnLTE1IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTUpO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AnalyticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-analytics',
          templateUrl: './analytics.component.html',
          styleUrls: ['./analytics.component.scss']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    _createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "header-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ag-grid/ag-grid.component */
    "./src/app/ag-grid/ag-grid.component.ts");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/main.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./innovation-assurance/innovation-assurance.component */
    "./src/app/innovation-assurance/innovation-assurance.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./analytics/analytics.component */
    "./src/app/analytics/analytics.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var spinners_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! spinners-angular */
    "./node_modules/spinners-angular/__ivy_ngcc__/fesm2015/spinners-angular.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.routing.module */
    "./src/app/app.routing.module.ts");
    /* harmony import */


    var _app_ourdata_methodology_ourdata_methodology_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../app/ourdata-methodology/ourdata-methodology.component */
    "./src/app/ourdata-methodology/ourdata-methodology.component.ts");
    /* harmony import */


    var _app_analytics_live_analytics_live_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../app/analytics-live/analytics-live.component */
    "./src/app/analytics-live/analytics-live.component.ts");
    /* harmony import */


    var _cohort_builder_cohort_builder_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./cohort-builder/cohort-builder.component */
    "./src/app/cohort-builder/cohort-builder.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");
    /* harmony import */


    var _generate_cohort_generate_cohort_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./generate-cohort/generate-cohort.component */
    "./src/app/generate-cohort/generate-cohort.component.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");

    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([]), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], spinners_angular__WEBPACK_IMPORTED_MODULE_12__["SpinnersAngularModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["DragDropModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__["AutocompleteLibModule"]], spinners_angular__WEBPACK_IMPORTED_MODULE_12__["SpinnersAngularModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_6__["AgGridComponent"], _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_8__["InnovationAssuranceComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsComponent"], _app_ourdata_methodology_ourdata_methodology_component__WEBPACK_IMPORTED_MODULE_14__["OurdataMethodologyComponent"], _app_analytics_live_analytics_live_component__WEBPACK_IMPORTED_MODULE_15__["AnalyticsLiveComponent"], _cohort_builder_cohort_builder_component__WEBPACK_IMPORTED_MODULE_16__["CohortBuilderComponent"], _generate_cohort_generate_cohort_component__WEBPACK_IMPORTED_MODULE_18__["GenerateCohortComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], spinners_angular__WEBPACK_IMPORTED_MODULE_12__["SpinnersAngularModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["DragDropModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__["AutocompleteLibModule"]],
        exports: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_6__["AgGridComponent"], _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_8__["InnovationAssuranceComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsComponent"], spinners_angular__WEBPACK_IMPORTED_MODULE_12__["SpinnersAngularModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_6__["AgGridComponent"], _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_8__["InnovationAssuranceComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsComponent"], _app_ourdata_methodology_ourdata_methodology_component__WEBPACK_IMPORTED_MODULE_14__["OurdataMethodologyComponent"], _app_analytics_live_analytics_live_component__WEBPACK_IMPORTED_MODULE_15__["AnalyticsLiveComponent"], _cohort_builder_cohort_builder_component__WEBPACK_IMPORTED_MODULE_16__["CohortBuilderComponent"], _generate_cohort_generate_cohort_component__WEBPACK_IMPORTED_MODULE_18__["GenerateCohortComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([]), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], spinners_angular__WEBPACK_IMPORTED_MODULE_12__["SpinnersAngularModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["DragDropModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__["AutocompleteLibModule"]],
          exports: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_6__["AgGridComponent"], _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_8__["InnovationAssuranceComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsComponent"], spinners_angular__WEBPACK_IMPORTED_MODULE_12__["SpinnersAngularModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
          }],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app.routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./analytics/analytics.component */
    "./src/app/analytics/analytics.component.ts");
    /* harmony import */


    var _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./innovation-assurance/innovation-assurance.component */
    "./src/app/innovation-assurance/innovation-assurance.component.ts");
    /* harmony import */


    var _app_ourdata_methodology_ourdata_methodology_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app/ourdata-methodology/ourdata-methodology.component */
    "./src/app/ourdata-methodology/ourdata-methodology.component.ts");
    /* harmony import */


    var _app_analytics_live_analytics_live_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app/analytics-live/analytics-live.component */
    "./src/app/analytics-live/analytics-live.component.ts");
    /* harmony import */


    var _app_cohort_builder_cohort_builder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app/cohort-builder/cohort-builder.component */
    "./src/app/cohort-builder/cohort-builder.component.ts");

    var AppRoutingModule =
    /*#__PURE__*/
    _createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot([{
        path: 'analytics',
        component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"]
      }, {
        path: 'analytics-live',
        component: _app_analytics_live_analytics_live_component__WEBPACK_IMPORTED_MODULE_5__["AnalyticsLiveComponent"]
      }, {
        path: 'ourdata-methodology',
        component: _app_ourdata_methodology_ourdata_methodology_component__WEBPACK_IMPORTED_MODULE_4__["OurdataMethodologyComponent"]
      }, {
        path: '',
        component: _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_3__["InnovationAssuranceComponent"]
      }, {
        path: 'cohort-builder',
        component: _app_cohort_builder_cohort_builder_component__WEBPACK_IMPORTED_MODULE_6__["CohortBuilderComponent"]
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
        path: 'analytics',
        component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"]
      }, {
        path: 'analytics-live',
        component: _app_analytics_live_analytics_live_component__WEBPACK_IMPORTED_MODULE_5__["AnalyticsLiveComponent"]
      }, {
        path: 'ourdata-methodology',
        component: _app_ourdata_methodology_ourdata_methodology_component__WEBPACK_IMPORTED_MODULE_4__["OurdataMethodologyComponent"]
      }, {
        path: '',
        component: _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_3__["InnovationAssuranceComponent"]
      }, {
        path: 'cohort-builder',
        component: _app_cohort_builder_cohort_builder_component__WEBPACK_IMPORTED_MODULE_6__["CohortBuilderComponent"]
      }])], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot([{
            path: 'analytics',
            component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"]
          }, {
            path: 'analytics-live',
            component: _app_analytics_live_analytics_live_component__WEBPACK_IMPORTED_MODULE_5__["AnalyticsLiveComponent"]
          }, {
            path: 'ourdata-methodology',
            component: _app_ourdata_methodology_ourdata_methodology_component__WEBPACK_IMPORTED_MODULE_4__["OurdataMethodologyComponent"]
          }, {
            path: '',
            component: _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_3__["InnovationAssuranceComponent"]
          }, {
            path: 'cohort-builder',
            component: _app_cohort_builder_cohort_builder_component__WEBPACK_IMPORTED_MODULE_6__["CohortBuilderComponent"]
          }]), _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
            path: 'analytics',
            component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"]
          }, {
            path: 'analytics-live',
            component: _app_analytics_live_analytics_live_component__WEBPACK_IMPORTED_MODULE_5__["AnalyticsLiveComponent"]
          }, {
            path: 'ourdata-methodology',
            component: _app_ourdata_methodology_ourdata_methodology_component__WEBPACK_IMPORTED_MODULE_4__["OurdataMethodologyComponent"]
          }, {
            path: '',
            component: _innovation_assurance_innovation_assurance_component__WEBPACK_IMPORTED_MODULE_3__["InnovationAssuranceComponent"]
          }, {
            path: 'cohort-builder',
            component: _app_cohort_builder_cohort_builder_component__WEBPACK_IMPORTED_MODULE_6__["CohortBuilderComponent"]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppService =
    /*#__PURE__*/
    function () {
      function AppService(http) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.rootURL = '/HealthAPIv2';
        this.liveBaseUrl = 'http://20.228.170.193:8080';
      }

      _createClass(AppService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.rootURL + '/users');
        }
      }, {
        key: "getGridData",
        value: function getGridData(gridCount, searchText) {
          // return this.http.get(this.rootURL + `/drugInfo/${gridCount}?searchText=${searchText}`);
          if (gridCount == 1) {
            return this.http.get("http://127.0.0.1:5000/HealthAPIv2/ICD10v2/" + "".concat(searchText));
          } else if (gridCount == 2) {
            return this.http.get("http://127.0.0.1:5000/HealthAPIv2/ConceptIDs/" + "".concat(searchText));
          } else if (gridCount == 3) {
            return this.http.get("http://127.0.0.1:5000/HealthAPIv2/ICD10v2/" + "".concat(searchText));
          } else if (gridCount == 4) {
            return this.http.get("http://127.0.0.1:5000/HealthAPIv2/NDCs/" + "".concat(searchText));
          }
        }
      }, {
        key: "getGridDataLive",
        value: function getGridDataLive(gridName) {
          return this.http.get(this.rootURL + "/health/".concat(gridName).toString());
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          return this.http.post(this.rootURL + '/user', {
            user: user
          });
        }
      }]);

      return AppService;
    }();

    AppService.??fac = function AppService_Factory(t) {
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AppService,
      factory: AppService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cohort-builder/cohort-builder.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/cohort-builder/cohort-builder.component.ts ***!
    \************************************************************/

  /*! exports provided: CohortBuilderComponent */

  /***/
  function srcAppCohortBuilderCohortBuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CohortBuilderComponent", function () {
      return CohortBuilderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var spinners_angular_spinner_dotted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! spinners-angular/spinner-dotted */
    "./node_modules/spinners-angular/__ivy_ngcc__/fesm2015/spinners-angular-spinner-dotted.js");
    /* harmony import */


    var _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../ag-grid/ag-grid.component */
    "./src/app/ag-grid/ag-grid.component.ts");

    var _c0 = ["diseaseStateAutocomplete"];

    function CohortBuilderComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var criteria_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", criteria_r17.name, " ");
      }
    }

    function CohortBuilderComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CohortBuilderComponent_div_26_Template_img_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

          var i_r19 = ctx.index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r20.deleteIncTag(i_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r18.name, " ");
      }
    }

    function CohortBuilderComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Drag and Drop Criteria Or ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " + Add Criteria ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_button_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " + Add Criteria ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CohortBuilderComponent_div_32_Template_img_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

          var i_r23 = ctx.index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r24.deleteExcTag(i_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r22.name, " ");
      }
    }

    function CohortBuilderComponent_div_33_div_1_button_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " + Add Criteria ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Drag and Drop Criteria Or ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CohortBuilderComponent_div_33_div_1_button_2_Template, 2, 0, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r26.isShowTag1 === false);
      }
    }

    function CohortBuilderComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CohortBuilderComponent_div_33_div_1_Template, 3, 1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.isShowTag1 === false);
      }
    }

    function CohortBuilderComponent_button_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " + Add Criteria ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Values to Inclusion Criteria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add values to Exclusion Criteria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_1_input_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "input", 66);
      }

      if (rf & 2) {
        var i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "inc", i_r30, "");
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_1_ng_autocomplete_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-autocomplete", 67, 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("inputChanged", function CohortBuilderComponent_div_44_div_1_div_1_ng_autocomplete_29_Template_ng_autocomplete_inputChanged_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          return ctx_r43.getAllDiseaseState();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31);

        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](33);

        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx_r35.diseaseStates)("searchKeyword", ctx_r35.keyword)("minQueryLength", 3)("minlength", 3)("itemTemplate", _r36)("notFoundTemplate", _r38);
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_1_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "a", 69);
      }

      if (rf & 2) {
        var item_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", item_r45.Disease, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_1_ng_template_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 69);
      }

      if (rf & 2) {
        var notFound_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", notFound_r46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_1_button_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CohortBuilderComponent_div_44_div_1_div_1_button_34_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r49);

          var i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r47.addCohort(i_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Add Attribute ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Disease Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CohortBuilderComponent_div_44_div_1_div_1_Template_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r50.selectedDiseaseStateFilter = $event;
        })("change", function CohortBuilderComponent_div_44_div_1_div_1_Template_select_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

          var i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r52.onChangeIncDiseaseState($event, i_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Filter By: Recommended ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Equals");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Does not Equals");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Begins With");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Does Not Begins With");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Ends with");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Does not end with");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Contains");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Does not contain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "From List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, CohortBuilderComponent_div_44_div_1_div_1_input_28_Template, 1, 1, "input", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, CohortBuilderComponent_div_44_div_1_div_1_ng_autocomplete_29_Template, 2, 6, "ng-autocomplete", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, CohortBuilderComponent_div_44_div_1_div_1_ng_template_30_Template, 1, 1, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, CohortBuilderComponent_div_44_div_1_div_1_ng_template_32_Template, 1, 1, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, CohortBuilderComponent_div_44_div_1_div_1_button_34_Template, 3, 0, "button", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r31.selectedDiseaseStateFilter);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r31.isFromListInc[i_r30] === false || ctx_r31.isFromListInc.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r31.isFromListInc[i_r30] === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r30 === ctx_r31.add);
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_2_label_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "And");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_2_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "input", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Age of Patient ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "select", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CohortBuilderComponent_div_44_div_1_div_2_Template_select_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r58);

          var i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r57.onChange($event, i_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Less Than");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Less or Equal To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Equal To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Greater Than");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Greater or Equal To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Between");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Not Between");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, CohortBuilderComponent_div_44_div_1_div_2_label_23_Template, 2, 0, "label", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, CohortBuilderComponent_div_44_div_1_div_2_div_24_Template, 2, 0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r32.isShowAgeInputs[i_r30] === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r32.isShowAgeInputs[i_r30] === true);
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_3_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CohortBuilderComponent_div_44_div_1_div_3_li_7_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r65);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          return ctx_r64.incChecked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r62 = ctx.$implicit;

        var i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "Incx", i_r30, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r62.label);
      }
    }

    function CohortBuilderComponent_div_44_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Gender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, CohortBuilderComponent_div_44_div_1_div_3_li_7_Template, 4, 2, "li", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r33.genders);
      }
    }

    function CohortBuilderComponent_div_44_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CohortBuilderComponent_div_44_div_1_div_1_Template, 35, 5, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CohortBuilderComponent_div_44_div_1_div_2_Template, 25, 2, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CohortBuilderComponent_div_44_div_1_div_3_Template, 8, 1, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r29.id === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r29.id === 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r29.id === 10);
      }
    }

    function CohortBuilderComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CohortBuilderComponent_div_44_div_1_Template, 4, 3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r12.selectedIncCriterias);
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_1_input_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "input", 66);
      }

      if (rf & 2) {
        var i_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "exc", i_r69, "2");
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_1_ng_autocomplete_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ng-autocomplete", 88, 68);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);

        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31);

        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx_r74.diseaseStates)("searchKeyword", ctx_r74.keyword)("itemTemplate", _r75)("notFoundTemplate", _r77);
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_1_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "a", 69);
      }

      if (rf & 2) {
        var item_r82 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", item_r82.Disease, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_1_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 69);
      }

      if (rf & 2) {
        var notFound_r83 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", notFound_r83, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_1_button_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CohortBuilderComponent_div_45_div_1_div_1_button_32_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r86);

          var i_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r84.addExcCohort(i_r69);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Add Attribute ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Disease Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CohortBuilderComponent_div_45_div_1_div_1_Template_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r88);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          return ctx_r87.selectedDiseaseStateFilter = $event;
        })("change", function CohortBuilderComponent_div_45_div_1_div_1_Template_select_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r88);

          var i_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r89.onChangeExcDiseaseState($event, i_r69);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Equals");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Does not Equals");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Begins With");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Does Not Begins With");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Ends with");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Does not end with");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Contains");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Does not contain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "From List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, CohortBuilderComponent_div_45_div_1_div_1_input_26_Template, 1, 1, "input", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, CohortBuilderComponent_div_45_div_1_div_1_ng_autocomplete_27_Template, 2, 4, "ng-autocomplete", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, CohortBuilderComponent_div_45_div_1_div_1_ng_template_28_Template, 1, 1, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, CohortBuilderComponent_div_45_div_1_div_1_ng_template_30_Template, 1, 1, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, CohortBuilderComponent_div_45_div_1_div_1_button_32_Template, 3, 0, "button", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r70.selectedDiseaseStateFilter);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r70.isFromListExc[i_r69] === false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r70.isFromListExc[i_r69] === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r69 === ctx_r70.add);
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_2_label_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "And");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_2_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "input", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Age of Patient ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "select", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CohortBuilderComponent_div_45_div_1_div_2_Template_select_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r95);

          var i_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r94.onChangeEx($event, i_r69);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Less Than");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Less or Equal To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Equal To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Greater Than");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Greater or Equal To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Between");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Not Between");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, CohortBuilderComponent_div_45_div_1_div_2_label_23_Template, 2, 0, "label", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, CohortBuilderComponent_div_45_div_1_div_2_div_24_Template, 2, 0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r71.isShowExAgeInputs[i_r69] === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r71.isShowExAgeInputs[i_r69] === true);
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_3_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CohortBuilderComponent_div_45_div_1_div_3_li_7_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r102);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          return ctx_r101.excChecked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r99 = ctx.$implicit;

        var i_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "Exc", i_r69, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r99.label);
      }
    }

    function CohortBuilderComponent_div_45_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Gender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, CohortBuilderComponent_div_45_div_1_div_3_li_7_Template, 4, 2, "li", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r72.genders);
      }
    }

    function CohortBuilderComponent_div_45_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CohortBuilderComponent_div_45_div_1_div_1_Template, 33, 4, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CohortBuilderComponent_div_45_div_1_div_2_Template, 25, 2, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CohortBuilderComponent_div_45_div_1_div_3_Template, 8, 1, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r68 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r68.id === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r68.id === 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r68.id === 10);
      }
    }

    function CohortBuilderComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CohortBuilderComponent_div_45_div_1_Template, 4, 3, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r13.selectedExlCriterias);
      }
    }

    function CohortBuilderComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CohortBuilderComponent_div_46_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r104.generateCohort();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Generate Cohort ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CohortBuilderComponent_div_46_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r106.deleteAllTag();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Reset All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CohortBuilderComponent_div_46_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r107.saveAsCohort();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Save As Cohort ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_47_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-ag-grid", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Diseases/ICD10 - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, ctx_r110.diseaseName), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r110.grid1ColumnDefs)("RowData", ctx_r110.gridData1)("IsColumnsToFit", true);
      }
    }

    function CohortBuilderComponent_div_47_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-ag-grid", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Relevant Concepts - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, ctx_r111.diseaseName), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r111.grid2ColumnDefs)("RowData", ctx_r111.gridData2)("IsColumnsToFit", true);
      }
    }

    function CohortBuilderComponent_div_47_div_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-ag-grid", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Find Drug Codes - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, ctx_r112.diseaseName), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r112.grid4ColumnDefs)("RowData", ctx_r112.gridData4)("IsColumnsToFit", true);
      }
    }

    function CohortBuilderComponent_div_47_div_1_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-ag-grid", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Pharmacological Substance/Clinical Drugs - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, ctx_r113.diseaseName), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r113.grid3ColumnDefs)("RowData", ctx_r113.gridData3)("IsColumnsToFit", true);
      }
    }

    function CohortBuilderComponent_div_47_div_1_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_47_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "sa-spinner-dotted", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Finding Diseases/ICD10...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, CohortBuilderComponent_div_47_div_1_div_5_Template, 8, 6, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "sa-spinner-dotted", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Getting Relevant Concepts...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, CohortBuilderComponent_div_47_div_1_div_10_Template, 8, 6, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "sa-spinner-dotted", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Find Drug Codes ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, CohortBuilderComponent_div_47_div_1_div_15_Template, 8, 6, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "sa-spinner-dotted", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Searching Clinical Drugs ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, CohortBuilderComponent_div_47_div_1_div_20_Template, 8, 6, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, CohortBuilderComponent_div_47_div_1_div_21_Template, 3, 0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx_r108.gridData1 && ctx_r108.AgLoad)("color", "#1e90ff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r108.gridData1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx_r108.gridData2 && ctx_r108.AgLoad)("color", "#1e90ff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r108.gridData2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx_r108.gridData4 && ctx_r108.AgLoad)("color", "#1e90ff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r108.gridData4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx_r108.gridData3 && ctx_r108.AgLoad)("color", "#1e90ff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r108.gridData3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r108.asthmaGrid);
      }
    }

    function CohortBuilderComponent_div_47_div_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Diseases/ICD10 - Diabetes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r115.grid1ColumnDefs)("RowData", ctx_r115.gridDataD1)("IsColumnsToFit", true);
      }
    }

    function CohortBuilderComponent_div_47_div_2_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Relevant Concepts - Diabetes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r116.grid2ColumnDefs)("RowData", ctx_r116.gridDataD2)("IsColumnsToFit", true);
      }
    }

    function CohortBuilderComponent_div_47_div_2_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Find Drug Codes - Diabetes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r117.grid4ColumnDefs)("RowData", ctx_r117.gridDataD4)("IsColumnsToFit", true);
      }
    }

    function CohortBuilderComponent_div_47_div_2_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Pharmacological Substance/Clinical Drugs - Diabetes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-ag-grid", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ColumnDefs", ctx_r118.grid3ColumnDefs)("RowData", ctx_r118.gridDataD3)("IsColumnsToFit", true);
      }
    }

    function CohortBuilderComponent_div_47_div_2_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CohortBuilderComponent_div_47_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "sa-spinner-dotted", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Finding Diseases/ICD10...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, CohortBuilderComponent_div_47_div_2_div_5_Template, 7, 3, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "sa-spinner-dotted", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Getting Relevant Concepts...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, CohortBuilderComponent_div_47_div_2_div_10_Template, 7, 3, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "sa-spinner-dotted", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Find Drug Codes ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, CohortBuilderComponent_div_47_div_2_div_15_Template, 7, 3, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "sa-spinner-dotted", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Searching Clinical Drugs ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, CohortBuilderComponent_div_47_div_2_div_20_Template, 7, 3, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, CohortBuilderComponent_div_47_div_2_div_21_Template, 3, 0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx_r109.gridDataD1 && ctx_r109.AgLoad)("color", "#1e90ff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r109.gridDataD1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx_r109.gridDataD2 && ctx_r109.AgLoad)("color", "#1e90ff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r109.gridDataD2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx_r109.gridDataD4 && ctx_r109.AgLoad)("color", "#1e90ff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r109.gridDataD4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("enabled", !ctx_r109.gridDataD3 && ctx_r109.AgLoad)("color", "#1e90ff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r109.gridDataD3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r109.diabeticsGrid);
      }
    }

    function CohortBuilderComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CohortBuilderComponent_div_47_div_1_Template, 22, 13, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CohortBuilderComponent_div_47_div_2_Template, 22, 13, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r15.DiseaseGrid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r15.diabeticsGrid);
      }
    }

    function CohortBuilderComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Save Cohort As ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " x ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Cohort Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Add Cohort Discription");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "textarea", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Save Cohort");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c1 = function _c1(a0, a1) {
      return [a0, a1];
    };

    var _c2 = function _c2(a0) {
      return [a0];
    };

    var CohortBuilderComponent =
    /*#__PURE__*/
    function () {
      function CohortBuilderComponent(httpClient, appService) {
        _classCallCheck(this, CohortBuilderComponent);

        this.httpClient = httpClient;
        this.appService = appService; //diseaseStates: any = (DiseaseStateDropdownJson as any).default;

        this.diseaseStates = [];
        this.criterias = [{
          id: 1,
          value: "diseasestate",
          name: "Disease State"
        }, {
          id: 2,
          value: "medication",
          name: "Medication"
        }, {
          id: 3,
          value: "icd10code",
          name: "ICD10 Code"
        }, {
          id: 4,
          value: "conceptid",
          name: "Concept ID"
        }, {
          id: 5,
          value: "rxnorm",
          name: "RxNorm#"
        }, {
          id: 6,
          value: "conceptid",
          name: "Concept ID"
        }, {
          id: 7,
          value: "gpi",
          name: "GPI"
        }, {
          id: 8,
          value: "dateofbirth",
          name: "Date Of Birth"
        }, {
          id: 9,
          value: "age",
          name: "Age"
        }, {
          id: 10,
          value: "gender",
          name: "Gender"
        }, {
          id: 11,
          value: "patientZipcode",
          name: "Patient Zip Code"
        }, {
          id: 12,
          value: "state",
          name: "State"
        }, {
          id: 13,
          value: "prescriptionDate",
          name: "Prescription Date"
        }, {
          id: 14,
          value: "ndc",
          name: "NDC"
        }];
        this.genders = [{
          label: "Male",
          isChecked: false
        }, {
          label: "Female",
          isChecked: false
        }, {
          label: "Others",
          isChecked: false
        }, {
          label: "None Specified",
          isChecked: false
        }];
        this.selectedCriteria = "";
        this.selectedIncCriterias = [];
        this.selectedExlCriterias = [];
        this.isShowTag = false;
        this.isShowTag1 = false;
        this.showIncAddValue = false;
        this.showExcAddValue = false;
        this.isShowAgeInputs = [];
        this.isShowExAgeInputs = [];
        this.dragPosition = {
          x: 0,
          y: 0
        };
        this.isPreview = false;
        this.keyword = "Disease";
        this.valueDiseaseState = "Equals";
        this.isFromListInc = [];
        this.isFromListExc = [];
        this.isSaveCohort = false;
        this.DiseaseGrid = false;
        this.asthmaGrid = false;
        this.diabeticsGrid = false;
        this.AgLoad = false;
        this.FormattedData1 = [];
        this.FormattedData2 = [];
        this.FormattedData3 = [];
        this.FormattedData4 = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showDiseaseState = false;
        this.inclusionCriteria = [];
        this.exclusionCriteria = [];
        this.add = 0;
        this.allCount = 0;
        this.selectedDiseaseStateFilter = "Contains";
      }

      _createClass(CohortBuilderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("class loading...");
          this.GetAgColumns();
        }
      }, {
        key: "getAllDiseaseState",
        value: function getAllDiseaseState() {
          var _this3 = this;

          console.log('get all disease called');
          this.httpClient.get("assets/json/diseaseStateDropdown.json").subscribe(function (data) {
            _this3.diseaseStates = data;
          });
        }
      }, {
        key: "GetAgColumns",
        value: function GetAgColumns() {
          this.grid1ColumnDefs = [{
            headerName: "ICD10_ID",
            field: "ICD10_ID",
            sortable: true,
            filter: true
          }, {
            headerName: "Disease",
            field: "Disease",
            sortable: true,
            filter: true
          }];
          this.grid2ColumnDefs = [{
            headerName: "Rx_Unique_ID",
            field: "Rx_Unique_ID",
            sortable: true,
            filter: true
          }, {
            headerName: "Rx_Code",
            field: "Rx_Code",
            sortable: true,
            filter: true
          }, {
            headerName: "Drugname",
            field: "Drugname",
            sortable: true,
            filter: true
          }];
          this.grid3ColumnDefs = [{
            headerName: "GENERIC_PROD_ID_NAME",
            field: "GENERIC_PROD_ID_NAME",
            sortable: true,
            filter: true
          }, {
            headerName: "COUNT",
            field: "COUNT",
            sortable: true,
            filter: true
          }];
          this.grid4ColumnDefs = [{
            headerName: "Code",
            field: "Code",
            sortable: true,
            filter: true
          }, {
            headerName: "NDC",
            field: "NDC",
            sortable: true,
            filter: true
          }, {
            headerName: "STR",
            field: "STR",
            sortable: true,
            filter: true
          }];
        }
      }, {
        key: "selectDiseaseState",
        value: function selectDiseaseState(item) {
          var _this4 = this;

          var tempIndex = this.diseaseStates.findIndex(function (x) {
            return x.UID === item.UID;
          });

          if (tempIndex === -1) {
            this.diseaseStates.shift();
            this.diseaseStates.push(item);
          }

          this.diseaseStateAutocomplete.clear();
          setTimeout(function () {
            _this4.diseaseStateAutocomplete.searchInput.nativeElement.value = "";
          }, 10);
        }
      }, {
        key: "getDiseaseState",
        value: function getDiseaseState(event) {
          var _this5 = this;

          this.httpClient.get("assets/json/diseaseStateDropdown.json").subscribe(function (data) {
            _this5.diseaseStates = data;
          });
        }
      }, {
        key: "deleteAllTag",
        value: function deleteAllTag() {
          this.selectedCriteria = "";
          this.selectedExlCriterias = [];
          this.selectedIncCriterias = [];
          this.inclusionCriteria = [];
          this.exclusionCriteria = [];
          this.isShowTag = false;
          this.isShowTag1 = false;
          this.showIncAddValue = false;
          this.showExcAddValue = false;
          this.DiseaseGrid = false;
          this.asthmaGrid = false;
          this.diabeticsGrid = false; // this.gridData1 =[];
          // this.gridData2 =[];
          // this.gridData3 =[];
          // this.gridData4 =[];
          // this.FormattedData1 =[];
          // this.FormattedData2 =[];
          // this.FormattedData3 =[];
          // this.FormattedData4 =[]; 

          window.location.reload();
        }
      }, {
        key: "deleteIncTag",
        value: function deleteIncTag(i) {
          this.selectedIncCriterias.splice(i, 1);
          this.inclusionCriteria = this.selectedIncCriterias;

          if (this.selectedIncCriterias.length === 0) {
            this.isShowTag = false;
          }
        }
      }, {
        key: "deleteExcTag",
        value: function deleteExcTag(i) {
          this.selectedExlCriterias.splice(i, 1);
          this.exclusionCriteria = this.selectedExlCriterias;

          if (this.selectedExlCriterias.length === 0) {
            this.isShowTag1 = false;
          }
        }
      }, {
        key: "addValue",
        value: function addValue() {
          if (this.selectedIncCriterias.length !== 0) {
            this.showIncAddValue = true;
          }

          if (this.selectedExlCriterias.length !== 0) {
            this.showExcAddValue = true;
          }
        }
      }, {
        key: "dropInclusion",
        value: function dropInclusion(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["copyArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex); //this.inclusionCriteria = [];

            this.inclusionCriteria = event.container.data;

            if (this.inclusionCriteria.length !== 0) {
              for (var index = 1; index < this.inclusionCriteria.length; index++) {
                if (this.inclusionCriteria[index].id === this.inclusionCriteria[0].id) {
                  // this.selectedIncCriterias.splice(0, 1);
                  this.inclusionCriteria.splice(0, 1);
                  this.selectedIncCriterias = _toConsumableArray(this.inclusionCriteria);
                }

                if (this.inclusionCriteria[index].id === 1) {
                  this.add = index;
                }
              }

              this.selectedIncCriterias = _toConsumableArray(this.inclusionCriteria);
            }
          }

          if (this.selectedIncCriterias.length !== 0 || this.inclusionCriteria.length !== 0) {
            this.isShowTag = true;
          }

          if (this.selectedExlCriterias.length !== 0) {
            this.isShowTag1 = true;
          }
        }
      }, {
        key: "dropExclusion",
        value: function dropExclusion(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["copyArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.exclusionCriteria = event.container.data;

            if (this.exclusionCriteria.length !== 0) {
              for (var index = 1; index < this.exclusionCriteria.length; index++) {
                if (this.exclusionCriteria[index].id === this.exclusionCriteria[0].id) {
                  this.selectedExlCriterias.splice(0, 1);
                  this.exclusionCriteria = _toConsumableArray(this.selectedExlCriterias);
                }

                if (this.exclusionCriteria[index].id === 1) {
                  this.add = index;
                }
              }

              this.exclusionCriteria = _toConsumableArray(this.selectedExlCriterias);
            }
          }

          if (this.selectedIncCriterias.length !== 0) {
            this.isShowTag = true;
          }

          if (this.selectedExlCriterias.length !== 0) {
            this.isShowTag1 = true;
          }
        }
      }, {
        key: "saveAsCohort",
        value: function saveAsCohort() {
          this.isPreview = true;
        }
      }, {
        key: "onChange",
        value: function onChange(e, i) {
          if (e.target.value === "Between" || e.target.value === "Not Between") {
            this.isShowAgeInputs[i] = true;
          } else {
            this.isShowAgeInputs[i] = false;
          }
        }
      }, {
        key: "onChangeEx",
        value: function onChangeEx(e, i) {
          if (e.target.value === "Between" || e.target.value === "Not Between") {
            this.isShowExAgeInputs[i] = true;
          } else {
            this.isShowExAgeInputs[i] = false;
          }
        }
      }, {
        key: "onChangeIncDiseaseState",
        value: function onChangeIncDiseaseState(event, i) {
          this.selectedDiseaseStateFilter = event.target.value;

          if (this.selectedDiseaseStateFilter === "From List") {
            this.isFromListInc[i] = true;
          } else {
            this.isFromListInc[i] = false;
          }
        }
      }, {
        key: "onChangeExcDiseaseState",
        value: function onChangeExcDiseaseState(event, i) {
          if (event.target.value === "From List") {
            this.isFromListExc[i] = true;
          } else {
            this.isFromListExc[i] = false;
          }
        }
      }, {
        key: "excChecked",
        value: function excChecked() {}
      }, {
        key: "incChecked",
        value: function incChecked() {}
      }, {
        key: "diseaseStateGenerate",
        value: function diseaseStateGenerate(type, i) {
          this.showDiseaseState = true;
          var input = document.getElementById(type + i);

          if (input !== null) {
            this.diseaseName = input.value;
          }

          if (this.diseaseName === "asthma" || this.diseaseName === "astma" || this.diseaseName === "astmma" || this.diseaseName === "asthma") {
            this.diseaseName = "asthma";
            this.asthmaGrid = true;
            this.allCount++;
          }

          if (this.diseaseName === "diabetic" || this.diseaseName === "diabeteic" || this.diseaseName === "diabetes type 2" || this.diseaseName === "type 2 diabetes" || this.diseaseName === "diabetes" || this.diseaseName === "diabetestype2" || this.diseaseName === "type2diabetes") {
            this.diseaseName = "diabetic";
            this.diabeticsGrid = true;
            this.allCount++; // this.getDrugInfoDiabetic( this.diseaseName);
          }

          this.DiseaseGrid = true;
          this.getDrugInfo(this.diseaseName.toLowerCase()); // }
        }
      }, {
        key: "getDrugInfo",
        value: function getDrugInfo(name) {
          var _this6 = this;

          console.log("getdruginfo " + name);
          this.AgLoad = true;
          this.appService.getGridData(1, name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              //console.log(gridData);
              for (var i = 0; i < gridData.length; i++) {
                _this6.FormattedData1.push({
                  "ICD10_ID": gridData[i][0],
                  "Disease": gridData[i][1]
                });
              } //  console.log(this.FormattedData1)


              _this6.gridData1 = _this6.FormattedData1;
              console.log(_this6.gridData1); // console.log(this.gridData1);

              _this6.getDrugInfo1(name);
            }, 4000);
          });
        }
      }, {
        key: "getDrugInfo1",
        value: function getDrugInfo1(name) {
          var _this7 = this;

          this.appService.getGridData(2, name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              for (var i = 0; i < gridData.length; i++) {
                _this7.FormattedData2.push({
                  "Rx_Unique_ID": gridData[i][0],
                  "Rx_Code": gridData[i][1],
                  "Drugname": gridData[i][2]
                });
              }

              _this7.gridData2 = _this7.FormattedData2;

              _this7.getDrugInfo2(name);
            }, 4000);
          });
        }
      }, {
        key: "getDrugInfo2",
        value: function getDrugInfo2(name) {
          var _this8 = this;

          this.appService.getGridData(3, name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              for (var i = 0; i < gridData.length; i++) {
                _this8.FormattedData3.push({
                  "ICD10_ID": gridData[i][0],
                  "Disease": gridData[i][1]
                });
              }

              _this8.gridData3 = _this8.FormattedData3;

              _this8.getDrugInfo3(name);
            }, 4000);
          });
        }
      }, {
        key: "getDrugInfo3",
        value: function getDrugInfo3(name) {
          var _this9 = this;

          this.appService.getGridData(4, name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              for (var i = 0; i < gridData.length; i++) {
                _this9.FormattedData4.push({
                  "Code": gridData[i][0],
                  "NDC": gridData[i][1],
                  "STR": gridData[i][2]
                });
              }

              _this9.gridData4 = _this9.FormattedData4;
              _this9.AgLoad = false;
            }, 4000);
          });
        }
      }, {
        key: "getDrugInfoDiabetic",
        value: function getDrugInfoDiabetic(name) {
          var _this10 = this;

          this.AgLoad = true;
          this.appService.getGridData(1, name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              _this10.gridDataD1 = gridData;

              _this10.getDrugInfoDiabetic1(name);
            }, 4000);
          });
        }
      }, {
        key: "getDrugInfoDiabetic1",
        value: function getDrugInfoDiabetic1(name) {
          var _this11 = this;

          this.appService.getGridData(2, name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              _this11.gridDataD2 = gridData;

              _this11.getDrugInfoDiabetic2(name);
            }, 4000);
          });
        }
      }, {
        key: "getDrugInfoDiabetic2",
        value: function getDrugInfoDiabetic2(name) {
          var _this12 = this;

          this.appService.getGridData(3, name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              _this12.gridDataD3 = gridData;

              _this12.getDrugInfoDiabetic3(name);
            }, 4000);
          });
        }
      }, {
        key: "getDrugInfoDiabetic3",
        value: function getDrugInfoDiabetic3(name) {
          var _this13 = this;

          this.appService.getGridData(4, name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (gridData) {
            setTimeout(function () {
              _this13.gridDataD4 = gridData;
              _this13.AgLoad = false;
            }, 4000);
          });
        }
      }, {
        key: "addCohort",
        value: function addCohort(i) {
          var item = {
            id: 1,
            value: "diseasestate",
            name: "Disease State"
          };
          this.selectedIncCriterias.splice(i + 1, 0, item);
          this.add = i + 1;
        }
      }, {
        key: "addExcCohort",
        value: function addExcCohort(i) {
          var item = {
            id: 1,
            value: "diseasestate",
            name: "Disease State"
          };
          this.selectedExlCriterias.splice(i + 1, 0, item);
          this.add = i + 1;
        }
      }, {
        key: "generateCohort",
        value: function generateCohort() {
          console.log("generate cohort line 569");
          console.log("generate cohort before for loop" + this.selectedIncCriterias.values);

          for (var index = 0; index < this.selectedIncCriterias.length; index++) {
            if (this.selectedIncCriterias[index].id === 1) {
              console.log("generate cohort line 572" + this.selectedIncCriterias.values);
              this.diseaseStateGenerate("inc", index);
            } else {
              console.log("generate cohort else part" + this.selectedIncCriterias.values);
            }
          }
        }
      }]);

      return CohortBuilderComponent;
    }();

    CohortBuilderComponent.??fac = function CohortBuilderComponent_Factory(t) {
      return new (t || CohortBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]));
    };

    CohortBuilderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CohortBuilderComponent,
      selectors: [["app-cohort-builder"]],
      viewQuery: function CohortBuilderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.diseaseStateAutocomplete = _t.first);
        }
      },
      decls: 49,
      vars: 27,
      consts: [[1, "ideathon-banner-wrapper"], [1, "ideathon-banner", "clearfix"], [1, "ideathon-banner-image"], ["src", "assets/images/ideathon-banner.png", "alt", ""], [1, "card"], [1, "card-body", "pb-0"], [1, "crt-slctn-container"], [1, "row"], [1, "criteria-label"], [1, "tag-container"], ["cdkDropList", "", 1, "tag-box", 3, "cdkDropListData", "cdkDropListConnectedTo"], ["todoList", "cdkDropList"], ["class", "example-box tag-label", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "col1", 2, "width", "590px"], [1, "col2", 2, "width", "590px"], ["cdkDropList", "", 1, "ctr-container-2", 2, "background-color", "rgba(1, 178, 124, 0.05)", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["doneList", "cdkDropList"], [1, "align_Cont"], ["class", "example-box crt-tag", "style", " background: rgba(1, 178, 124, 0.05);\n            border: 1px solid #01B27C;\n            color: #01B27C", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["class", "pos_center", 4, "ngIf"], ["class", "add-crt-btn", "style", "background-color: #01B27C", 4, "ngIf"], ["cdkDropList", "", 1, "ctr-container-2", 2, "background-color", "rgba(252, 106, 89, 0.1)", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["doneList1", "cdkDropList"], ["class", "example-box crt-tag", "style", " background: rgba(252, 106, 89, 0.1);\n            border: 1px solid #FC6A59;\n            color:#FC6A59", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["class", "add-crt-btn", "style", "background-color: rgb(255, 127, 80, 1)", 4, "ngIf"], [1, "btnarrange"], [1, "remove-btn", 3, "click"], [1, "grt-crt-btn", 3, "click"], ["class", "col1", "style", "width: 590px", 4, "ngIf"], ["class", "col2", "style", "width: 590px", 4, "ngIf"], ["class", "IncSelected", 4, "ngIf"], ["class", "ExcSelected", 4, "ngIf"], ["class", "row-btn", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "alert-box", 4, "ngIf"], ["cdkDrag", "", 1, "example-box", "tag-label"], ["cdkDrag", "", 1, "example-box", "crt-tag", 2, "background", "rgba(1, 178, 124, 0.05)", "border", "1px solid #01B27C", "color", "#01B27C"], [1, "dlt-tag", 2, "color", "#01b27c"], ["src", "../../assets/images/close-line.png", 1, "close-btn", 3, "click"], [1, "pos_center"], [1, "dragndrop-txt1"], [1, "add-crt-btn1", 2, "background", "#01B27C", "border", "none"], [1, "add-crt-btn", 2, "background-color", "#01B27C"], ["cdkDrag", "", 1, "example-box", "crt-tag", 2, "background", "rgba(252, 106, 89, 0.1)", "border", "1px solid #FC6A59", "color", "#FC6A59"], [1, "dlt-tag", 2, "color", "rgba(255, 127, 80)"], ["src", "../../assets/images/close-line-ex.png", 1, "close-btn", 3, "click"], ["class", "dragndrop-txt1", 4, "ngIf"], ["class", "add-crt-btn1", "style", "background: rgba(252, 106, 89, 1);\n              border: none", 4, "ngIf"], [1, "add-crt-btn1", 2, "background", "rgba(252, 106, 89, 1)", "border", "none"], [1, "add-crt-btn", 2, "background-color", "rgb(255, 127, 80, 1)"], [1, "IncSelected"], ["class", "value-container", 4, "ngFor", "ngForOf"], [1, "value-container"], [4, "ngIf"], [2, "background", "rgb(245, 249, 252, 0.1)", "width", "590px", "height", "141px"], [1, "add-value-container"], [1, "crt-name", 2, "color", "#01b27c"], [1, "sort-disease", 3, "ngModel", "ngModelChange", "change"], ["disabled", "", 3, "ngValue"], [1, "disease-cohort"], [1, "disease-ctr-search"], ["class", "input_hide", "type", "text", "placeholder", "Type Disease Name...", 3, "id", 4, "ngIf"], ["minlength", "3", "placeholder", "Type Disease Name...", "class", "autocomplete", 3, "data", "searchKeyword", "minQueryLength", "minlength", "itemTemplate", "notFoundTemplate", "inputChanged", 4, "ngIf"], ["itemTemplate", ""], ["notFoundTemplate", ""], ["class", "generate-cohort-btn", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Type Disease Name...", 1, "input_hide", 3, "id"], ["minlength", "3", "placeholder", "Type Disease Name...", 1, "autocomplete", 3, "data", "searchKeyword", "minQueryLength", "minlength", "itemTemplate", "notFoundTemplate", "inputChanged"], ["diseaseStateAutoComplete", ""], [3, "innerHTML"], [1, "generate-cohort-btn", 3, "click"], ["src", "assets/images/add-line.png", "alt", "", 2, "width", "30px", "height", "30px", "margin-right", "5px"], [2, "display", "flex"], [1, "sort-patient", 3, "change"], [1, "type-age-1"], ["type", "number", 1, "input_hide"], ["class", "and-label", 4, "ngIf"], ["class", "type-age-2", 4, "ngIf"], [1, "and-label"], [1, "type-age-2"], [1, "checkbox-items", "clearfix"], ["class", "checkbox-item", 4, "ngFor", "ngForOf"], [1, "checkbox-item"], ["type", "checkbox", 3, "id", "change"], [1, "ExcSelected"], [4, "ngFor", "ngForOf"], [1, "crt-name", 2, "color", "rgb(255, 127, 80, 1)"], ["placeholder", "Type Disease Name...", "class", "autocomplete", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", 4, "ngIf"], ["placeholder", "Type Disease Name...", 1, "autocomplete", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate"], [1, "crt-name", 2, "color", "#FC6A59"], [1, "row-btn"], ["class", "card-body pb-0", 4, "ngIf"], [1, "col-sm-12", 2, "text-align", "center"], [3, "enabled", "color"], ["class", "col-sm-12", 4, "ngIf"], [1, "col-sm-12"], [1, "card-body"], [1, "ag-theme-balham", 2, "height", "350px"], [3, "ColumnDefs", "RowData", "IsColumnsToFit"], [2, "text-align", "center"], ["src", "assets/images/astma.png", "alt", "", 2, "width", "1400px", "height", "600px"], ["src", "assets/images/diabetic.png", "alt", "", 2, "width", "1400px", "height", "600px"], [1, "alert-box"], [1, "flex-class"], [1, "alert-content"], [1, "alert-icon"], [1, "alert-title"], [1, "alert-desc"], ["type", "text", "value", "", 1, "input_hide"], ["id", "input_hide", "rows", "3", "cols", "33"], [1, "alert-buttons"], [1, "blur"]],
      template: function CohortBuilderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Criteria Selection Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, CohortBuilderComponent_div_14_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Inclusion Criteria demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Exclusion Criteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function CohortBuilderComponent_Template_div_cdkDropListDropped_23_listener($event) {
            return ctx.dropInclusion($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, CohortBuilderComponent_div_26_Template, 4, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, CohortBuilderComponent_div_27_Template, 5, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, CohortBuilderComponent_button_28_Template, 2, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function CohortBuilderComponent_Template_div_cdkDropListDropped_29_listener($event) {
            return ctx.dropExclusion($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, CohortBuilderComponent_div_32_Template, 4, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, CohortBuilderComponent_div_33_Template, 2, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, CohortBuilderComponent_button_34_Template, 2, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CohortBuilderComponent_Template_button_click_36_listener() {
            return ctx.deleteAllTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Remove all Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CohortBuilderComponent_Template_button_click_38_listener() {
            return ctx.addValue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Generate Criteria ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, CohortBuilderComponent_div_41_Template, 3, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, CohortBuilderComponent_div_42_Template, 3, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, CohortBuilderComponent_div_44_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, CohortBuilderComponent_div_45_Template, 2, 1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, CohortBuilderComponent_div_46_Template, 7, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, CohortBuilderComponent_div_47_Template, 3, 2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, CohortBuilderComponent_div_48_Template, 22, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](24);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cdkDropListData", ctx.criterias)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](20, _c1, _r2, _r6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.criterias);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cdkDropListData", ctx.inclusionCriteria)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](23, _c2, _r0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.inclusionCriteria);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isShowTag === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isShowTag === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cdkDropListData", ctx.selectedExlCriterias)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](25, _c2, _r0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.exclusionCriteria);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isShowTag1 === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isShowTag1 === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showIncAddValue === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showExcAddValue === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showIncAddValue === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showExcAddValue === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showIncAddValue === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showDiseaseState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isSaveCohort);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_x"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutocompleteComponent"], spinners_angular_spinner_dotted__WEBPACK_IMPORTED_MODULE_9__["SpinnerDottedComponent"], _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_10__["AgGridComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]],
      styles: [".card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  margin: 50px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 5px;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crt-slctn-container[_ngcontent-%COMP%] {\n  height: 150px;\n  background: #f5f9fc;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .tag-container[_ngcontent-%COMP%] {\n  display: flex !important;\n  margin: 10px 0px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .tag-container[_ngcontent-%COMP%]   .tag-box[_ngcontent-%COMP%] {\n  display: flex;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .tag-container[_ngcontent-%COMP%]   .tag-box[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  align-content: center;\n  padding: 5px;\n  height: 40px;\n  border: 1px solid black;\n  margin: 0 5px;\n  border-radius: 10px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .ctr-container-2[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 590px;\n  display: flex;\n  border-radius: 10px;\n  \n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .ctr-container-2[_ngcontent-%COMP%]   .add-crt-btn[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 54px;\n  margin: 20px;\n  position: absolute;\n  bottom: 0px;\n  border-radius: 10px;\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .ctr-container-2[_ngcontent-%COMP%]   .crt-tag[_ngcontent-%COMP%] {\n  \n  \n  \n  padding: 15px;\n  \n  height: 54px;\n  border-radius: 10px;\n  font-family: \"Fort\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  \n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: 7px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .ctr-container-2[_ngcontent-%COMP%]   .crt-tag[_ngcontent-%COMP%]   .dlt-tag[_ngcontent-%COMP%] {\n  background: rgba(1, 178, 124, 0);\n  border: none;\n  font-family: \"Fort\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #01b27c;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .ctr-container-1[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 590px;\n  position: relative;\n  border-radius: 10px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .ctr-container-1[_ngcontent-%COMP%]   .add-crt-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 20px;\n  position: absolute;\n  width: 164px;\n  height: 44px;\n  top: 50%;\n  left: 50%;\n  margin: -35px 0 0 -35px;\n  border: none;\n  font-family: \"Fort\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  \n  text-align: center;\n  text-transform: capitalize;\n  color: #ffffff;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .ctr-container-1[_ngcontent-%COMP%]   .dragndrop-txt[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 176px;\n  height: 44px;\n  font-family: \"Fort\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #000000;\n  top: 31%;\n  left: 47%;\n  margin: -35px 0 0 -35px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .criteria-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 10px 0px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 15px 25px;\n  \n  width: 173px;\n  height: 52px;\n  margin-right: 10px;\n  \n  \n  background: #006e74;\n  border: 1px solid #006e74;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .grt-crt-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 15px 25px;\n  \n  width: 179px;\n  height: 52px;\n  margin-right: 10px;\n  \n  \n  background: #006e74;\n  border: 1px solid #006e74;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .add-value-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 0px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .add-value-container-patient[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .crt-name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 16px 0px;\n  width: 400px;\n  height: 54px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  \n  text-transform: capitalize;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .sort-disease[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 37px;\n  background: #ffffff;\n  border: 1px solid #c4c4c4;\n  \n  margin: 16px 0px;\n  border-radius: 5px;\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .sort-patient[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 15px;\n  width: 336px;\n  height: 54px;\n  margin: 10px;\n  background: #ffffff;\n  border: 1px solid #c4c4c4;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 60px;\n  background: #ffffff;\n  border: 1px solid #d9d9d9;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .downArrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 13px;\n  top: 10px;\n  width: 35px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .temp-x[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  margin: auto;\n  cursor: pointer;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 9999;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .temp-x[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 22px;\n  vertical-align: middle;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .autocomplete-container[_ngcontent-%COMP%] {\n  height: 60px;\n  border: 0px;\n  box-shadow: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .autocomplete-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%] {\n  display: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .autocomplete-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 60px;\n  background-color: rgba(255, 255, 255, 0);\n  color: #000;\n  outline: none;\n  line-height: 30px;\n  padding: 15px 20px;\n  border: 0px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .autocomplete-container[_ngcontent-%COMP%]   .suggestions-container[_ngcontent-%COMP%] {\n  top: 75px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .autocomplete-container[_ngcontent-%COMP%]   .suggestions-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .autocomplete-container[_ngcontent-%COMP%]   .suggestions-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  margin-top: 5px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .autocomplete-container[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #fff;\n  margin-top: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  box-sizing: border-box;\n  z-index: 99999;\n  position: relative;\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .autocomplete-container[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-bottom: 0px;\n  padding-left: 10px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .hideSuggestion[_ngcontent-%COMP%]   .suggestions-container[_ngcontent-%COMP%] {\n  display: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .hideDisplayText[_ngcontent-%COMP%]   .display-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 20px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: transparent;\n  opacity: 0.75;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0);\n  color: #000;\n  height: 52px;\n  outline: none;\n  line-height: 30px;\n  padding: 10px 15px;\n  border: 0px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nsdicon-angle-down[_ngcontent-%COMP%] {\n  display: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  line-height: 30px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .singleSelect[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%] {\n  display: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .singleSelect[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]    + hr[_ngcontent-%COMP%] {\n  display: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .disease-ctr-search[_ngcontent-%COMP%]   .available-items[_ngcontent-%COMP%] {\n  line-height: 30px;\n  max-height: 200px;\n}\n.card[_ngcontent-%COMP%]   .disease-cohort[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: space-around;\n}\n.card[_ngcontent-%COMP%]   .type-age-1[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100px;\n  height: 50px;\n  margin: 10px;\n  background: #ffffff;\n  border: 1px solid #d9d9d9;\n}\n.card[_ngcontent-%COMP%]   .type-age-2[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100px;\n  height: 50px;\n  margin: 10px;\n  background: #ffffff;\n  border: 1px solid #d9d9d9;\n}\n.card[_ngcontent-%COMP%]   .and-label[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 66px;\n  font-family: \"Fort\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  \n  display: flex;\n  align-items: center;\n  text-transform: capitalize;\n  color: #000000;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.pos_center[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pos_center[_ngcontent-%COMP%]   .add-crt-btn1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  gap: 10px;\n  position: absolute;\n  width: 164px;\n  height: 44px;\n  margin: 50px 10px;\n}\n.dragndrop-txt1[_ngcontent-%COMP%] {\n  \n  width: 176px;\n  height: 44px;\n  font-family: \"Fort\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #000000;\n  \n  \n  margin: -35px 0 0 -35px;\n  flex-direction: column;\n  display: flex;\n  flex-direction: column;\n}\n.checkbox-items[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 10px;\n}\n.checkbox-items[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%] {\n  float: left;\n  width: 25%;\n  list-style-type: none;\n}\n.checkbox-items[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.align_Cont[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: start;\n}\n.IncSelected[_ngcontent-%COMP%], .ExcSelected[_ngcontent-%COMP%] {\n  flex: 1;\n  flex-direction: column;\n  width: 50%;\n}\n.input_hide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.btnarrange[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.ng-autocomplete[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  display: table;\n  margin: 0 auto;\n}\n.align_Cont[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: start;\n}\n.IncSelected[_ngcontent-%COMP%], .ExcSelected[_ngcontent-%COMP%] {\n  flex: 1;\n  flex-direction: column;\n  width: 50%;\n}\n.input_hide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.alert-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: #fff;\n  z-index: 1001;\n  \n  \n  width: 1000px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 25px;\n  font-size: 20px;\n}\n.alert-box.special[_ngcontent-%COMP%] {\n  position: fixed;\n  border: 1px solid;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-close[_ngcontent-%COMP%]   .alert-close-icon[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #222222;\n  font-size: 25;\n  font-weight: 400;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-desc[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  opacity: 0.75;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-desc[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #D7E0E3;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  margin: 50px auto;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 15px 25px;\n  width: 173px;\n  height: 52px;\n  \n  background: #006e74;\n  border: 1px solid #006e74;\n  color: white;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%] {\n  background-color: rgba(1, 178, 124, 0.1);\n  padding: 20px 30px 10px;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 50px;\n  left: 51px;\n  top: 167px;\n  background: #FFFFFF;\n  border: 1px solid #D7E0E3;\n}\n.flex-class[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 25px;\n  padding: 20px 30px 10px;\n}\n.generate-cohort-btn[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  \n  \n  background: #006e74;\n  border: 1px solid #006e74;\n  color: white;\n  margin-left: 20px;\n  font-size: 16px;\n  height: 47px;\n  display: flex;\n  width: 197px;\n}\n.row-btn[_ngcontent-%COMP%] {\n  display: flex;\n  \n  margin-right: -15px;\n  \n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ob3J0LWJ1aWxkZXIvQzpcXFVzZXJzXFx5cmFvXFxPbmVEcml2ZSAtIE1lcmF0aXZlXFxEZXNrdG9wXFx1c3QgY29ob3J0IGJ1aWxkZXJcXGhlYWx0aGNhcmVcXEhlYWx0aENhcmVBbmFseXRpY3MtMjAtMDUtMjAyMi1tYWluXFxteS1hcHAvc3JjXFxhcHBcXGNvaG9ydC1idWlsZGVyXFxjb2hvcnQtYnVpbGRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29ob3J0LWJ1aWxkZXIvY29ob3J0LWJ1aWxkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtBQ0FOO0FER0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNETjtBRElJO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQ0ZOO0FESU07RUFLRSxhQUFBO0FDTlI7QURRUTtFQUNFLHFCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1BWO0FEWUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNWTjtBRFlNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDVlI7QURhTTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsV0FBQTtBQ1pSO0FEY1E7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDWlY7QURpQkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNmTjtBRGlCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFFQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtFQUNBLDBCQUFBO0VBRUEsY0FBQTtBQ2xCUjtBRHFCTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUNuQlI7QUR1Qkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3JCTjtBRHdCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUN0Qk47QUR5Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDeEJOO0FEMkJJO0VBQ0UsYUFBQTtFQUVBLGdCQUFBO0FDMUJOO0FENkJJO0VBQ0Usb0JBQUE7QUMzQk47QUQ4Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSwwQkFBQTtBQzlCTjtBRGlDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDL0JOO0FEa0NJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ2pDTjtBRG9DSTtFQUNFLHNCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBSUEsa0JBQUE7QUN2Q047QUQwQ007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ3hDUjtBRDJDTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUVBLDJCQUFBO0VBQ0EsYUFBQTtBQ3pDUjtBRDJDUTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDekNWO0FENkNNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzNDUjtBRDhDVTtFQUNFLGFBQUE7QUM1Q1o7QUQrQ1U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQzdDWjtBRGlEUTtFQUNFLFNBQUE7QUMvQ1Y7QURpRFU7RUFDRSxZQUFBO0FDL0NaO0FEaURZO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUMvQ2Q7QURvRFE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNsRFY7QURvRFU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDbERaO0FEdURNO0VBQ0UsYUFBQTtBQ3JEUjtBRHdETTtFQUNFLGFBQUE7QUN0RFI7QUR5RE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDdkRSO0FEeURRO0VBQ0UsWUFBQTtBQ3ZEVjtBRDJETTtFQUNFLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUN6RFI7QUQyRFE7RUFDRSxhQUFBO0FDekRWO0FENkRNO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQzNEUjtBRDhETTtFQUNFLGFBQUE7QUM1RFI7QUQ4RFE7RUFDRSxhQUFBO0FDNURWO0FEZ0VNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQzlEUjtBRGtGRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQ2hGSjtBRG1GRTtFQUNFLHNCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtBQ25GSjtBRHNGRTtFQUNFLHNCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtBQ3RGSjtBRHlGRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUVBLGNBQUE7QUMxRko7QUQrRkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUM1RkY7QURnR0E7RUFDRSxVQUFBO0FDN0ZGO0FEZ0dBO0VBQ0Usc0RBQUE7QUM3RkY7QURnR0E7RUFDRSxzREFBQTtBQzdGRjtBRGdHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQzdGRjtBRGlHQTtFQUNFLFVBQUE7QUM5RkY7QURpR0E7RUFDRSxzREFBQTtBQzlGRjtBRGlHQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUM5RkY7QURpR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUM5RkY7QURrR0E7RUFDRSxVQUFBO0FDL0ZGO0FEa0dBO0VBQ0Usc0RBQUE7QUMvRkY7QURrR0E7RUFDRSxZQUFBO0FDL0ZGO0FEa0dBO0VBQ0Usc0RBQUE7QUMvRkY7QURrR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUMvRkY7QURpR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDaEdKO0FEb0dBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDakdGO0FEcUdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNsR0Y7QURvR0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDbEdKO0FEb0dJO0VBQ0UsaUJBQUE7QUNsR047QUR1R0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDcEdGO0FEdUdBOztFQUVFLE9BQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNwR0Y7QUR1R0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNwR0Y7QUR1R0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNwR0Y7QUR1R0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ3BHRjtBRHVHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNwR0Y7QUR1R0E7O0VBRUUsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ3BHRjtBRHVHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3BHRjtBRHVHQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBR0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUN2R0Y7QUR5R0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUN2R0o7QUQwR0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDeEdKO0FEMEdJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUN4R047QUQ0R0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUMxR0o7QUQ2R0U7RUFHRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUM3R0o7QURnSEU7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQy9HSjtBRGtISTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ2hITjtBRG9IRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNsSEo7QURvSEk7RUFnQkUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ2pJTjtBRHFJRTtFQUNFLHdDQUFBO0VBQ0EsdUJBQUE7QUNuSUo7QURxSUk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0FDcElOO0FEeUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ3ZJRjtBRDBJQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUN2SUY7QUQwSUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUN2SUYiLCJmaWxlIjoic3JjL2FwcC9jb2hvcnQtYnVpbGRlci9jb2hvcnQtYnVpbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgLmNhcmQtYm9keSB7XG4gICAgbWFyZ2luOiA1MHB4O1xuXG4gICAgLnJvdyB7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAuY3J0LXNsY3RuLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ5LCAyNTIpO1xuICAgIH1cblxuICAgIC50YWctY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMTBweCAwcHg7XG5cbiAgICAgIC50YWctYm94IHtcbiAgICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgLy8gbWFyZ2luOiAwIDVweDtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAudGFnLWxhYmVsIHtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jdHItY29udGFpbmVyLTIge1xuICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgIHdpZHRoOiA1OTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuYWRkLWNydC1idG4ge1xuICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5jcnQtdGFnIHtcbiAgICAgICAgLyogZGlzcGxheTogaW5saW5lLWZsZXg7ICovXG4gICAgICAgIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXG4gICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICAgICAgaGVpZ2h0OiA1NHB4O1xuXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAvKiBtYXJnaW46IDdweDsgKi9cbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICBtYXJnaW46IDdweDtcblxuICAgICAgICAuZGx0LXRhZyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxLCAxNzgsIDEyNCwgLTAuOSk7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgY29sb3I6ICMwMWIyN2M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY3RyLWNvbnRhaW5lci0xIHtcbiAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICB3aWR0aDogNTkwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAuYWRkLWNydC1idG4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDE2NHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIHRvcDogNTAlO1xuXG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAtMzVweCAwIDAgLTM1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cblxuICAgICAgLmRyYWduZHJvcC10eHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxNzZweDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJGb3J0XCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIHRvcDogMzElO1xuICAgICAgICBsZWZ0OiA0NyU7XG4gICAgICAgIG1hcmdpbjogLTM1cHggMCAwIC0zNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jcml0ZXJpYS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgfVxuXG4gICAgLnJlbW92ZS1idG4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgICAgd2lkdGg6IDE3M3B4O1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgLyogbGVmdDogMTM1NnB4OyAqL1xuICAgICAgLyogdG9wOiAxNjQ1cHg7ICovXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA2ZTc0O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwNmU3NDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZ3J0LWNydC1idG4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICAgIHdpZHRoOiAxNzlweDtcbiAgICAgIGhlaWdodDogNTJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiA4MTBweDtcbiAgICAgIC8qIGxlZnQ6IDE1NDZweDsgKi9cbiAgICAgIC8qIHRvcDogMTY0NXB4OyAqL1xuICAgICAgYmFja2dyb3VuZDogIzAwNmU3NDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDZlNzQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmFkZC12YWx1ZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC8vIHdpZHRoOiA1ODBweDtcbiAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgfVxuXG4gICAgLmFkZC12YWx1ZS1jb250YWluZXItcGF0aWVudCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG5cbiAgICAuY3J0LW5hbWUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgLy8gZm9udC1mYW1pbHk6IFwiRm9ydCBUVFwiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgLnNvcnQtZGlzZWFzZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgIC8qIHBhZGRpbmc6IDE2cHg7ICovXG4gICAgICBtYXJnaW46IDE2cHggMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5zb3J0LXBhdGllbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgd2lkdGg6IDMzNnB4O1xuICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gICAgfVxuXG4gICAgLmRpc2Vhc2UtY3RyLXNlYXJjaCB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIC8vIG1hcmdpbjogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuXG4gICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gICAgICAuZG93bkFycm93IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTNweDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgIH1cblxuICAgICAgLnRlbXAteCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYXV0b2NvbXBsZXRlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgLngge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc3VnZ2VzdGlvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICB0b3A6IDc1cHg7XG5cbiAgICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XG5cbiAgICAgICAgICAgIC5lbWFpbCB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3QtZm91bmQge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5oaWRlU3VnZ2VzdGlvbiAuc3VnZ2VzdGlvbnMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmhpZGVEaXNwbGF5VGV4dCAuZGlzcGxheS10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBvcGFjaXR5OiAwLjc1O1xuXG4gICAgICAgIG9wdGlvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuXG4gICAgICAgIC5uc2RpY29uLWFuZ2xlLWRvd24ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1jb250YWluZXIgaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIC5zaW5nbGVTZWxlY3QgLnNlbGVjdGVkLWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAmK2hyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hdmFpbGFibGUtaXRlbXMge1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICB9XG5cbiAgICAgIC8vIC51c2VycyB7XG4gICAgICAvLyAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAvLyAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICAgICAgLy8gICAmLnNpbmdsZSB7XG4gICAgICAvLyAgICAgcGFkZGluZzogMHB4O1xuICAgICAgLy8gICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZDlkOWQ5O1xuICAgICAgLy8gICAgIGhlaWdodDogNzBweDtcbiAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAvLyAgIH1cblxuICAgIH1cblxuXG5cbiAgfVxuXG4gIC5kaXNlYXNlLWNvaG9ydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cblxuICAudHlwZS1hZ2UtMSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICB9XG5cbiAgLnR5cGUtYWdlLTIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweDtcblxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgfVxuXG4gIC5hbmQtbGFiZWwge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogNjZweDtcblxuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG59XG5cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLnBvc19jZW50ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLmFkZC1jcnQtYnRuMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGdhcDogMTBweDtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTY0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIG1hcmdpbjogNTBweCAxMHB4O1xuICB9XG59XG5cbi5kcmFnbmRyb3AtdHh0MSB7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgLyogdG9wOiAzMSU7ICovXG4gIC8qIGxlZnQ6IDQ3JTsgKi9cbiAgbWFyZ2luOiAtMzVweCAwIDAgLTM1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbn1cblxuLmNoZWNrYm94LWl0ZW1zIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4O1xuXG4gIC5jaGVja2JveC1pdGVtIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjUlO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgIGxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWxpZ25fQ29udCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBzdGFydDtcbn1cblxuLkluY1NlbGVjdGVkLFxuLkV4Y1NlbGVjdGVkIHtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmlucHV0X2hpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idG5hcnJhbmdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4ubmctYXV0b2NvbXBsZXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFsaWduX0NvbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG59XG5cbi5JbmNTZWxlY3RlZCxcbi5FeGNTZWxlY3RlZCB7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5pbnB1dF9oaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYWxlcnQtYm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLy8gd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XG4gIC8vIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDEwMDE7XG4gIC8qIHBhZGRpbmc6IDYwcHg7ICovXG4gIC8qIHBhZGRpbmctYm90dG9tOiAxMHB4OyAqL1xuICB3aWR0aDogMTAwMHB4O1xuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG5cbiAgJi5zcGVjaWFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gIH1cblxuICAuYWxlcnQtY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICByaWdodDogNXB4O1xuXG4gICAgLmFsZXJ0LWNsb3NlLWljb24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC5hbGVydC1pY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWxlcnQtdGl0bGUge1xuICAgIC8vIEBpbmNsdWRlIHNlY29uZGFyeS1ib2xkLWZzKDI1KTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXNpemU6IDI1O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICAuYWxlcnQtZGVzYyB7XG4gICAgLy8gQGluY2x1ZGUgc2Vjb25kYXJ5LWZzKDIwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBvcGFjaXR5OiAwLjc1O1xuXG4gICAgLy8gY29sb3I6ICM2ODY4Njg7XG4gICAgdGV4dGFyZWEge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDdFMEUzO1xuICAgIH1cbiAgfVxuXG4gIC5hbGVydC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcblxuICAgIGJ1dHRvbiB7XG4gICAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICAgIC8vIG91dGxpbmU6IG5vbmU7XG4gICAgICAvLyBib3JkZXI6IDA7XG4gICAgICAvLyBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAvLyBtaW4td2lkdGg6IDE0MHB4O1xuICAgICAgLy8gbWFyZ2luOiA1cHg7XG4gICAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAvLyBmb250LXNpemU6IDE0cHg7XG4gICAgICAvLyAmLmJsdXIge1xuICAgICAgLy8gICAvLyBib3JkZXI6IDFweCBzb2xpZCAkcmlnaHQtZmxvYXRpbmctYmc7XG4gICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAvLyAgIC8vIGNvbG9yOiAkcmlnaHQtZmxvYXRpbmctYmc7XG4gICAgICAvLyAgIGNvbG9yOiBibGFjaztcbiAgICAgIC8vICAgb3BhY2l0eTogMC41O1xuICAgICAgLy8gfVxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgICAgd2lkdGg6IDE3M3B4O1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgLyogbWFyZ2luLXJpZ2h0OiAxMHB4OyAqL1xuICAgICAgYmFja2dyb3VuZDogIzAwNmU3NDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDZlNzQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLmFsZXJ0LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTc4LCAxMjQsIDAuMSk7XG4gICAgcGFkZGluZzogMjBweCAzMHB4IDEwcHg7XG5cbiAgICBpbnB1dCB7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBsZWZ0OiA1MXB4O1xuICAgICAgdG9wOiAxNjdweDtcblxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEN0UwRTM7XG4gICAgfVxuICB9XG59XG5cbi5mbGV4LWNsYXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvLyBmb250LWZhbWlseTogJ0ludGVyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAxMHB4O1xufVxuXG4uZ2VuZXJhdGUtY29ob3J0LWJ0biB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIHdpZHRoOiAxMjBweDsgKi9cbiAgLyogaGVpZ2h0OiA1MnB4OyAqL1xuICBiYWNrZ3JvdW5kOiAjMDA2ZTc0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA2ZTc0O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDE5N3B4O1xufVxuXG4ucm93LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgLyogbWFyZ2luLWxlZnQ6IC0xNXB4OyAqL1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59IiwiLmNhcmQgLmNhcmQtYm9keSB7XG4gIG1hcmdpbjogNTBweDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLnJvdyB7XG4gIG1hcmdpbjogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jcnQtc2xjdG4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjlmYztcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLnRhZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC50YWctY29udGFpbmVyIC50YWctYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLnRhZy1jb250YWluZXIgLnRhZy1ib3ggLnRhZy1sYWJlbCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDAgNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSAuY3RyLWNvbnRhaW5lci0yIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDU5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmN0ci1jb250YWluZXItMiAuYWRkLWNydC1idG4ge1xuICB3aWR0aDogNTUwcHg7XG4gIGhlaWdodDogNTRweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jdHItY29udGFpbmVyLTIgLmNydC10YWcge1xuICAvKiBkaXNwbGF5OiBpbmxpbmUtZmxleDsgKi9cbiAgLyogZmxleC1kaXJlY3Rpb246IHJvdzsgKi9cbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgcGFkZGluZzogMTVweDtcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICBoZWlnaHQ6IDU0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBtYXJnaW46IDdweDsgKi9cbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXJnaW46IDdweDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmN0ci1jb250YWluZXItMiAuY3J0LXRhZyAuZGx0LXRhZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMSwgMTc4LCAxMjQsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzAxYjI3Yztcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmN0ci1jb250YWluZXItMSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiA1OTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSAuY3RyLWNvbnRhaW5lci0xIC5hZGQtY3J0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTY0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luOiAtMzVweCAwIDAgLTM1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuY3RyLWNvbnRhaW5lci0xIC5kcmFnbmRyb3AtdHh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTc2cHg7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0b3A6IDMxJTtcbiAgbGVmdDogNDclO1xuICBtYXJnaW46IC0zNXB4IDAgMCAtMzVweDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmNyaXRlcmlhLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLnJlbW92ZS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgd2lkdGg6IDE3M3B4O1xuICBoZWlnaHQ6IDUycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgLyogbGVmdDogMTM1NnB4OyAqL1xuICAvKiB0b3A6IDE2NDVweDsgKi9cbiAgYmFja2dyb3VuZDogIzAwNmU3NDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNmU3NDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZ3J0LWNydC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIHdpZHRoOiAxNzlweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC8qIGxlZnQ6IDE1NDZweDsgKi9cbiAgLyogdG9wOiAxNjQ1cHg7ICovXG4gIGJhY2tncm91bmQ6ICMwMDZlNzQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDZlNzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmFkZC12YWx1ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSAuYWRkLXZhbHVlLWNvbnRhaW5lci1wYXRpZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jcnQtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5zb3J0LWRpc2Vhc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIC8qIHBhZGRpbmc6IDE2cHg7ICovXG4gIG1hcmdpbjogMTZweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSAuc29ydC1wYXRpZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDMzNnB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmRpc2Vhc2UtY3RyLXNlYXJjaCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmRpc2Vhc2UtY3RyLXNlYXJjaCAuZG93bkFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMzVweDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmRpc2Vhc2UtY3RyLXNlYXJjaCAudGVtcC14IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIC50ZW1wLXggaSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5kaXNlYXNlLWN0ci1zZWFyY2ggLmF1dG9jb21wbGV0ZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIC5hdXRvY29tcGxldGUtY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLngge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIC5hdXRvY29tcGxldGUtY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgY29sb3I6ICMwMDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIC5hdXRvY29tcGxldGUtY29udGFpbmVyIC5zdWdnZXN0aW9ucy1jb250YWluZXIge1xuICB0b3A6IDc1cHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5kaXNlYXNlLWN0ci1zZWFyY2ggLmF1dG9jb21wbGV0ZS1jb250YWluZXIgLnN1Z2dlc3Rpb25zLWNvbnRhaW5lciB1bCBsaSB7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmRpc2Vhc2UtY3RyLXNlYXJjaCAuYXV0b2NvbXBsZXRlLWNvbnRhaW5lciAuc3VnZ2VzdGlvbnMtY29udGFpbmVyIHVsIGxpIC5lbWFpbCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIC5hdXRvY29tcGxldGUtY29udGFpbmVyIC5ub3QtZm91bmQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAxO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIC5hdXRvY29tcGxldGUtY29udGFpbmVyIC5ub3QtZm91bmQgZGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5kaXNlYXNlLWN0ci1zZWFyY2ggLmhpZGVTdWdnZXN0aW9uIC5zdWdnZXN0aW9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIC5oaWRlRGlzcGxheVRleHQgLmRpc3BsYXktdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5kaXNlYXNlLWN0ci1zZWFyY2ggc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwLjc1O1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIHNlbGVjdCBvcHRpb24ge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5kaXNlYXNlLWN0ci1zZWFyY2ggYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgY29sb3I6ICMwMDA7XG4gIGhlaWdodDogNTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5kaXNlYXNlLWN0ci1zZWFyY2ggYnV0dG9uIC5uc2RpY29uLWFuZ2xlLWRvd24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIC5zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSAuZGlzZWFzZS1jdHItc2VhcmNoIC5zaW5nbGVTZWxlY3QgLnNlbGVjdGVkLWl0ZW1zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmRpc2Vhc2UtY3RyLXNlYXJjaCAuc2luZ2xlU2VsZWN0IC5zZWxlY3RlZC1pdGVtcyArIGhyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmRpc2Vhc2UtY3RyLXNlYXJjaCAuYXZhaWxhYmxlLWl0ZW1zIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuLmNhcmQgLmRpc2Vhc2UtY29ob3J0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmNhcmQgLnR5cGUtYWdlLTEge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xufVxuLmNhcmQgLnR5cGUtYWdlLTIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xufVxuLmNhcmQgLmFuZC1sYWJlbCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDY2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5wb3NfY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBvc19jZW50ZXIgLmFkZC1jcnQtYnRuMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGdhcDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTY0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luOiA1MHB4IDEwcHg7XG59XG5cbi5kcmFnbmRyb3AtdHh0MSB7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgd2lkdGg6IDE3NnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgLyogdG9wOiAzMSU7ICovXG4gIC8qIGxlZnQ6IDQ3JTsgKi9cbiAgbWFyZ2luOiAtMzVweCAwIDAgLTM1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jaGVja2JveC1pdGVtcyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jaGVja2JveC1pdGVtcyAuY2hlY2tib3gtaXRlbSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uY2hlY2tib3gtaXRlbXMgLmNoZWNrYm94LWl0ZW0gbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmFsaWduX0NvbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG59XG5cbi5JbmNTZWxlY3RlZCxcbi5FeGNTZWxlY3RlZCB7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5pbnB1dF9oaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnRuYXJyYW5nZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLm5nLWF1dG9jb21wbGV0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hbGlnbl9Db250IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4uSW5jU2VsZWN0ZWQsXG4uRXhjU2VsZWN0ZWQge1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xufVxuXG4uaW5wdXRfaGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmFsZXJ0LWJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTAwMTtcbiAgLyogcGFkZGluZzogNjBweDsgKi9cbiAgLyogcGFkZGluZy1ib3R0b206IDEwcHg7ICovXG4gIHdpZHRoOiAxMDAwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYWxlcnQtYm94LnNwZWNpYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmFsZXJ0LWJveCAuYWxlcnQtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xufVxuLmFsZXJ0LWJveCAuYWxlcnQtY2xvc2UgLmFsZXJ0LWNsb3NlLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hbGVydC1ib3ggLmFsZXJ0LWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFsZXJ0LWJveCAuYWxlcnQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAyNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5hbGVydC1ib3ggLmFsZXJ0LWRlc2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG4uYWxlcnQtYm94IC5hbGVydC1kZXNjIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEN0UwRTM7XG59XG4uYWxlcnQtYm94IC5hbGVydC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4uYWxlcnQtYm94IC5hbGVydC1idXR0b25zIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgd2lkdGg6IDE3M3B4O1xuICBoZWlnaHQ6IDUycHg7XG4gIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cbiAgYmFja2dyb3VuZDogIzAwNmU3NDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNmU3NDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFsZXJ0LWJveCAuYWxlcnQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTc4LCAxMjQsIDAuMSk7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAxMHB4O1xufVxuLmFsZXJ0LWJveCAuYWxlcnQtY29udGVudCBpbnB1dCB7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogNTFweDtcbiAgdG9wOiAxNjdweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q3RTBFMztcbn1cblxuLmZsZXgtY2xhc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiAyMHB4IDMwcHggMTBweDtcbn1cblxuLmdlbmVyYXRlLWNvaG9ydC1idG4ge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiB3aWR0aDogMTIwcHg7ICovXG4gIC8qIGhlaWdodDogNTJweDsgKi9cbiAgYmFja2dyb3VuZDogIzAwNmU3NDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNmU3NDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxOTdweDtcbn1cblxuLnJvdy1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIC8qIG1hcmdpbi1sZWZ0OiAtMTVweDsgKi9cbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CohortBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-cohort-builder",
          templateUrl: "./cohort-builder.component.html",
          styleUrls: ["./cohort-builder.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
        }];
      }, {
        diseaseStateAutocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["diseaseStateAutocomplete"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/generate-cohort/generate-cohort.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/generate-cohort/generate-cohort.component.ts ***!
    \**************************************************************/

  /*! exports provided: GenerateCohortComponent */

  /***/
  function srcAppGenerateCohortGenerateCohortComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateCohortComponent", function () {
      return GenerateCohortComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GenerateCohortComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 2);
      }
    }

    function GenerateCohortComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Save Cohort As");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var GenerateCohortComponent =
    /*#__PURE__*/
    function () {
      function GenerateCohortComponent() {
        _classCallCheck(this, GenerateCohortComponent);
      }

      _createClass(GenerateCohortComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("generate cohort", this.isPreview);
        }
      }]);

      return GenerateCohortComponent;
    }();

    GenerateCohortComponent.??fac = function GenerateCohortComponent_Factory(t) {
      return new (t || GenerateCohortComponent)();
    };

    GenerateCohortComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: GenerateCohortComponent,
      selectors: [["app-generate-cohort"]],
      inputs: {
        isPreview: "isPreview"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "backdrop", 4, "ngIf"], ["class", "preview-box", 4, "ngIf"], [1, "backdrop"], [1, "preview-box"], [1, "preview-box-content"], [1, "preview-label-box"], [1, "preview-label"]],
      template: function GenerateCohortComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, GenerateCohortComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, GenerateCohortComponent_div_1_Template, 6, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isPreview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isPreview);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".preview-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  z-index: 1001;\n  padding: 10px 0px;\n  width: 1362px;\n  height: 561px;\n  background: #F2F7F8;\n}\n\n.preview-box-content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 1200px;\n  margin: 0 auto;\n  margin-top: 75px;\n  min-height: 1000px;\n}\n\n.y-scroll[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.preview-label-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 20px 30px 20px 50px;\n  gap: 1072px;\n  position: absolute;\n  width: 1360px;\n  height: 70px;\n  left: 0px;\n  top: 0px;\n  background: #FFFFFF;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  width: 184px;\n  height: 30px;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 25px;\n  line-height: 30px;\n  color: #000000;\n  \n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhdGUtY29ob3J0L0M6XFxVc2Vyc1xceXJhb1xcT25lRHJpdmUgLSBNZXJhdGl2ZVxcRGVza3RvcFxcdXN0IGNvaG9ydCBidWlsZGVyXFxoZWFsdGhjYXJlXFxIZWFsdGhDYXJlQW5hbHl0aWNzLTIwLTA1LTIwMjItbWFpblxcbXktYXBwL3NyY1xcYXBwXFxnZW5lcmF0ZS1jb2hvcnRcXGdlbmVyYXRlLWNvaG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2VuZXJhdGUtY29ob3J0L2dlbmVyYXRlLWNvaG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNKLGFBQUE7RUFFQSxtQkFBQTtBQ0RBOztBREdBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0VBQ0osWUFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFHQSx1QkFBQTtFQUVBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0pBIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhdGUtY29ob3J0L2dlbmVyYXRlLWNvaG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnByZXZpZXctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDEwMDE7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgd2lkdGg6IDEzNjJweDtcbmhlaWdodDogNTYxcHg7XG5cbmJhY2tncm91bmQ6ICNGMkY3Rjg7XG4gIH1cbi5wcmV2aWV3LWJveC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XG59XG4ueS1zY3JvbGwge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbi5wcmV2aWV3LWxhYmVsLWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCA1MHB4O1xuICAgIGdhcDogMTA3MnB4O1xuICAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTM2MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cbi5wcmV2aWV3LWxhYmVse1xuICAgIHdpZHRoOiAxODRweDtcbmhlaWdodDogMzBweDtcblxuZm9udC1mYW1pbHk6ICdJbnRlcic7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAyNXB4O1xubGluZS1oZWlnaHQ6IDMwcHg7XG5cbmNvbG9yOiAjMDAwMDAwO1xuXG5cbi8qIEluc2lkZSBhdXRvIGxheW91dCAqL1xuXG5mbGV4OiBub25lO1xub3JkZXI6IDA7XG5mbGV4LWdyb3c6IDA7XG59XG4gIFxuICAiLCIucHJldmlldy1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxMDAxO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgd2lkdGg6IDEzNjJweDtcbiAgaGVpZ2h0OiA1NjFweDtcbiAgYmFja2dyb3VuZDogI0YyRjdGODtcbn1cblxuLnByZXZpZXctYm94LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgbWluLWhlaWdodDogMTAwMHB4O1xufVxuXG4ueS1zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucHJldmlldy1sYWJlbC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCA1MHB4O1xuICBnYXA6IDEwNzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTM2MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbi5wcmV2aWV3LWxhYmVsIHtcbiAgd2lkdGg6IDE4NHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIC8qIEluc2lkZSBhdXRvIGxheW91dCAqL1xuICBmbGV4OiBub25lO1xuICBvcmRlcjogMDtcbiAgZmxleC1ncm93OiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GenerateCohortComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-generate-cohort',
          templateUrl: './generate-cohort.component.html',
          styleUrls: ['./generate-cohort.component.scss']
        }]
      }], function () {
        return [];
      }, {
        isPreview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r3.closeAlert();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HeaderComponent_span_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_span_46_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r5.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HeaderComponent_span_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_span_47_Template_div_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r7.goToAdmin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Admin ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_span_47_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r9.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.userName = '';
        this.isAdmin = false;
        this.isProblemBtnClick = false;
        this.isIdeathonBtnClick = false;
        this.isExperimentBtnClick = false;
        this.isInnovationBtnClick = false;
        this.isMyInitiativeBtnClick = false;
        this.myInitiativesTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {}
      }, {
        key: "goToActiveProblems",
        value: function goToActiveProblems() {
          this.router.navigate(['']);
        }
      }, {
        key: "goToProblemArea",
        value: function goToProblemArea() {
          this.router.navigate(['']);
        }
      }, {
        key: "goToIdeathons",
        value: function goToIdeathons() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToExperiments",
        value: function goToExperiments() {
          this.router.navigate(['ourdata-methodology']);
        }
      }, {
        key: "goToAdmin",
        value: function goToAdmin() {
          this.router.navigate(['/admin-member']);
        }
      }, {
        key: "goToMyinitiatives",
        value: function goToMyinitiatives(option) {
          localStorage.setItem('myInitiativeClicked', option);
          this.myInitiativesTab.emit(option);
          this.router.navigate(['/my-initiatives']);
        }
      }, {
        key: "goToInnovationAssurance",
        value: function goToInnovationAssurance() {
          this.router.navigate(['/innovation-assurance']);
        }
      }, {
        key: "comingSoon",
        value: function comingSoon() {
          this.router.navigate(['/coming-soon']);
        }
      }, {
        key: "problemMappingClick",
        value: function problemMappingClick() {
          this.isProblemBtnClick = !this.isProblemBtnClick;
          this.isIdeathonBtnClick = false;
          this.isExperimentBtnClick = false;
          this.isMyInitiativeBtnClick = false;
          this.isInnovationBtnClick = false;
        }
      }, {
        key: "ideathonClick",
        value: function ideathonClick() {
          this.isIdeathonBtnClick = !this.isIdeathonBtnClick;
          this.isProblemBtnClick = false;
          this.isExperimentBtnClick = false;
          this.isInnovationBtnClick = false;
          this.isMyInitiativeBtnClick = false;
        }
      }, {
        key: "experimentClick",
        value: function experimentClick() {
          this.isExperimentBtnClick = !this.isExperimentBtnClick;
          this.isProblemBtnClick = false;
          this.isIdeathonBtnClick = false;
          this.isInnovationBtnClick = false;
          this.isMyInitiativeBtnClick = false;
        }
      }, {
        key: "innovationClick",
        value: function innovationClick() {
          this.isInnovationBtnClick = !this.isInnovationBtnClick;
          this.isProblemBtnClick = false;
          this.isIdeathonBtnClick = false;
          this.isExperimentBtnClick = false;
          this.isMyInitiativeBtnClick = false;
        }
      }, {
        key: "myInitiativeClick",
        value: function myInitiativeClick() {
          this.isMyInitiativeBtnClick = !this.isMyInitiativeBtnClick;
          this.isProblemBtnClick = false;
          this.isIdeathonBtnClick = false;
          this.isExperimentBtnClick = false;
          this.isInnovationBtnClick = false;
        }
      }, {
        key: "closeAlert",
        value: function closeAlert() {
          this.isProblemBtnClick = false;
          this.isIdeathonBtnClick = false;
          this.isExperimentBtnClick = false;
          this.isInnovationBtnClick = false;
          this.isMyInitiativeBtnClick = false;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.??fac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      outputs: {
        myInitiativesTab: "myInitiativesTab"
      },
      decls: 48,
      vars: 20,
      consts: [["class", "backdropHeader", 3, "click", 4, "ngIf"], [1, "header-logo"], ["src", "assets/images/ust-logo.png", "alt", "Waggle"], [1, "header-nav"], [1, "header-item"], [1, "effect", 3, "ngClass", "click"], ["alt", ">", 1, "problem-mapping-img", 3, "ngClass", "src"], [1, "header-sub-nav", 3, "ngClass"], [1, "header-sub-nav-item", 3, "click"], [1, "waggle-logo-link"], ["src", "assets/images/UST-Health.png", "alt", "Waggle", 1, "header-item", "waggle-logo"], ["class", "header-item logout", 3, "click", 4, "ngIf"], ["class", "header-item admin-nav", 4, "ngIf"], [1, "backdropHeader", 3, "click"], [1, "header-item", "logout", 3, "click"], ["src", "assets/images/logout.png", "title", "Logout", "alt", "Logout"], [1, "header-item", "admin-nav"], [1, "btn-wrapper"], ["src", "assets/images/down-arrow.png", "alt", ""], [1, "header-sub-nav", "header-sub-nav-logout"], ["src", "assets/images/admin.png", "alt", ""], [1, "header-sub-nav-item", "no-border", 3, "click"], ["src", "assets/images/logout.png", "alt", ""]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HeaderComponent_div_1_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_button_click_6_listener() {
            return ctx.problemMappingClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Clinical Ops & Research ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_div_click_10_listener() {
            return ctx.goToProblemArea();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Map a Problem Area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_div_click_12_listener() {
            return ctx.goToActiveProblems();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "List of Problems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_button_click_15_listener() {
            return ctx.ideathonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Patient Health ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_div_click_19_listener() {
            return ctx.goToIdeathons();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "List of Idea Drives");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_button_click_22_listener() {
            return ctx.experimentClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Data Sources ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_div_click_26_listener() {
            return ctx.goToExperiments();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Our data-methodology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_button_click_29_listener() {
            return ctx.goToInnovationAssurance();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Payor & Claims ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_button_click_32_listener() {
            return ctx.myInitiativeClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " AI Model Marketplace ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_div_click_36_listener() {
            return ctx.goToMyinitiatives("ideathons");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "My Problems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_div_click_38_listener() {
            return ctx.goToMyinitiatives("ideas");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "My Ideas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_div_click_40_listener() {
            return ctx.goToMyinitiatives("experiments");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "My Experiments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_div_click_42_listener() {
            return ctx.goToMyinitiatives("actions");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "My Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, HeaderComponent_span_46_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, HeaderComponent_span_47_Template, 10, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isProblemBtnClick || ctx.isIdeathonBtnClick || ctx.isExperimentBtnClick || ctx.isInnovationBtnClick || ctx.isMyInitiativeBtnClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isProblemBtnClick ? "btn-change" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isProblemBtnClick ? "img-change" : "")("src", ctx.isProblemBtnClick ? "assets/images/up-arrow-icon.svg" : "assets/images/down-arrow-icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isProblemBtnClick ? "tab-change" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isIdeathonBtnClick ? "btn-change" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isIdeathonBtnClick ? "img-change" : "")("src", ctx.isIdeathonBtnClick ? "assets/images/up-arrow-icon.svg" : "assets/images/down-arrow-icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isIdeathonBtnClick ? "tab-change-ideathons" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isExperimentBtnClick ? "btn-change" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isExperimentBtnClick ? "img-change" : "")("src", ctx.isExperimentBtnClick ? "assets/images/up-arrow-icon.svg" : "assets/images/down-arrow-icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isExperimentBtnClick ? "tab-change-experiments" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isInnovationBtnClick ? "btn-change" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isMyInitiativeBtnClick ? "btn-change" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isMyInitiativeBtnClick ? "img-change" : "")("src", ctx.isMyInitiativeBtnClick ? "assets/images/up-arrow-icon.svg" : "assets/images/down-arrow-icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.isMyInitiativeBtnClick ? "tab-change-myinitiatives" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isAdmin);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["@font-face {\n  font-family: \"Fort\";\n  src: url(/assets/fonts/Fort-Book.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortExtraBold\";\n  src: url(/assets/fonts/Fort-Extrabold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortTT\";\n  src: url(/assets/fonts/FortTT-Book.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTBold\";\n  src: url(/assets/fonts/FortTT-Bold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTExtraBold\";\n  src: url(/assets/fonts/FortTT-Extrabold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTLight\";\n  src: url(/assets/fonts/FortTT-Light.ttf) format(\"truetype\");\n}\nheader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  padding: 0 7.8125%;\n  background-color: #fff;\n  color: #222;\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%] {\n    height: 65px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%] {\n    height: 55px;\n  }\n}\nheader[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  width: calc(50% - 40.8125%);\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n}\nheader[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-shadow: none;\n}\nheader[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 65px;\n  margin-right: 30px;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 65px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 55px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 52px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 45px;\n    margin-right: 25px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 43px;\n    margin-right: 15px;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 36px;\n    margin-right: 14px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n}\nheader[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Fort\", sans-serif;\n  font-size: 18px;\n  letter-spacing: 0.5em;\n  line-height: 27px;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 9px;\n  }\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n  width: calc(50% - -260px);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n    width: calc(46% - -260px);\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n    width: calc(45% - -260px);\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n    width: calc(41% - -260px);\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n    width: calc(40% - -260px);\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n    width: calc(38% - -260px);\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n    width: calc(36% - -260px);\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n    width: calc(30% - -260px);\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%] {\n    width: calc(26% - -260px);\n  }\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item.logout[_ngcontent-%COMP%] {\n  font-family: \"Fort\", sans-serif;\n  font-size: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 35px;\n  right: 15px;\n  color: #27757c;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item.logout[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  color: #000;\n  font-family: \"Fort\", sans-serif;\n  font-size: 16px;\n  height: 50px;\n  border: 1px solid #fff;\n  outline: none;\n  padding: 0px 40px;\n  margin: 5px;\n  cursor: default;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button.effect[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 1px solid #006e74;\n  color: #006e74;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button.effect[_ngcontent-%COMP%]:active {\n  box-shadow: none;\n  border: 1px solid #27757c;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button.no-effect[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  border: 1px solid #27757c;\n  cursor: default;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button.active-sub-head[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 18px;\n    font-family: \"Fort\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 16px;\n    font-family: \"Fort\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 14px;\n    font-family: \"Fort\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 12px;\n    font-family: \"Fort\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n    font-family: \"Fort\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n    font-family: \"Fort\", sans-serif;\n    font-size: 12px;\n    height: 40px;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 6px;\n    font-family: \"Fort\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0px 5px;\n    font-family: \"Fort\", sans-serif;\n    font-size: 10px;\n    height: 35px;\n  }\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 54px;\n  left: 5px;\n  background-color: #fff;\n  padding: 5px;\n  width: 91.8%;\n  border: 1px solid #27757c;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%] {\n    width: 89.6%;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%] {\n    width: 88.1%;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%] {\n    width: 87.9%;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%] {\n    width: 87.2%;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%] {\n    top: 44px;\n    width: 86.2%;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%] {\n    width: 84.5%;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%] {\n    top: 39px;\n    width: 82.5%;\n  }\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-family: \"Fort\", sans-serif;\n  font-size: 16px;\n  color: #27757c;\n  border-bottom: 1px solid #d4e5f5;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px solid #d4e5f5;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 10px;\n    padding: 11px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 8px;\n    padding: 10px;\n  }\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-notification[_ngcontent-%COMP%] {\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .header-notification[_ngcontent-%COMP%]   .header-notification-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  left: 7px;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: #f34800;\n  font-family: \"Fort\", sans-serif;\n  font-size: 10px;\n  letter-spacing: -0.06em;\n  line-height: 27px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-sub-nav-logout[_ngcontent-%COMP%] {\n  border: 1px solid black !important;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:hover   .header-sub-nav-logout[_ngcontent-%COMP%] {\n  display: block;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .btn-change[_ngcontent-%COMP%] {\n  border: 1px solid #27757c !important;\n  color: #27757c !important;\n  background-color: #fff !important;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change[_ngcontent-%COMP%] {\n  display: block !important;\n  background-color: #f2f7f8 !important;\n  min-width: 165px;\n  z-index: 9;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-ideathons[_ngcontent-%COMP%] {\n  display: block !important;\n  background-color: #f2f7f8 !important;\n  width: 89.2% !important;\n  min-width: 175px;\n  z-index: 9;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-experiments[_ngcontent-%COMP%] {\n  display: block !important;\n  background-color: #f2f7f8 !important;\n  width: 89.7% !important;\n  min-width: 165px;\n  z-index: 9;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-innovation[_ngcontent-%COMP%] {\n  display: block !important;\n  background-color: #f2f7f8 !important;\n  width: 92.2% !important;\n  min-width: 165px;\n  z-index: 9;\n}\nheader[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-myinitiatives[_ngcontent-%COMP%] {\n  display: block !important;\n  background-color: #f2f7f8 !important;\n  width: 90.4% !important;\n  min-width: 165px;\n  z-index: 9;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-myinitiatives[_ngcontent-%COMP%] {\n    width: 87.6% !important;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-myinitiatives[_ngcontent-%COMP%] {\n    width: 87% !important;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-myinitiatives[_ngcontent-%COMP%] {\n    width: 86% !important;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-myinitiatives[_ngcontent-%COMP%] {\n    width: 85.6% !important;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-myinitiatives[_ngcontent-%COMP%] {\n    width: 84.6% !important;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-myinitiatives[_ngcontent-%COMP%] {\n    width: 83.6% !important;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-myinitiatives[_ngcontent-%COMP%] {\n    width: 81.5% !important;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .tab-change-myinitiatives[_ngcontent-%COMP%] {\n    width: 79.5% !important;\n  }\n}\nheader[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 25px;\n  right: 20px;\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%] {\n    top: 17px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%] {\n    top: 17px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%] {\n    top: 7px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%] {\n    top: 4px;\n  }\n}\nheader[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n  color: #000000 !important;\n  border-bottom: 1px solid #b4b4b4 !important;\n}\nheader[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%]   .no-border[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #b4b4b4 !important;\n}\nheader[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #000000;\n  width: 40px;\n  height: 40px;\n  color: #000000;\n  background-color: #f2f7f8;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 20px;\n  font-family: \"FortTTBold\", sans-serif;\n  font-size: 15px;\n}\nheader[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: -5px;\n}\nheader[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%] {\n  width: 140px !important;\n  top: 50px !important;\n  left: unset !important;\n  right: 0px !important;\n}\nheader[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .admin-nav[_ngcontent-%COMP%]   .header-sub-nav[_ngcontent-%COMP%]   .header-sub-nav-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\nheader[_ngcontent-%COMP%]   .waggle-logo[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 190px !important;\n  top: 25px !important;\n  right: 150px;\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  header[_ngcontent-%COMP%]   .waggle-logo[_ngcontent-%COMP%] {\n    top: 17px !important;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  header[_ngcontent-%COMP%]   .waggle-logo[_ngcontent-%COMP%] {\n    top: 17px !important;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  header[_ngcontent-%COMP%]   .waggle-logo[_ngcontent-%COMP%] {\n    top: 10px !important;\n    width: 175px !important;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  header[_ngcontent-%COMP%]   .waggle-logo[_ngcontent-%COMP%] {\n    top: 3px !important;\n    width: 170px !important;\n  }\n}\n.waggle-logo-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xceXJhb1xcT25lRHJpdmUgLSBNZXJhdGl2ZVxcRGVza3RvcFxcdXN0IGNvaG9ydCBidWlsZGVyXFxoZWFsdGhjYXJlXFxIZWFsdGhDYXJlQW5hbHl0aWNzLTIwLTA1LTIwMjItbWFpblxcbXktYXBwL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFx5cmFvXFxPbmVEcml2ZSAtIE1lcmF0aXZlXFxEZXNrdG9wXFx1c3QgY29ob3J0IGJ1aWxkZXJcXGhlYWx0aGNhcmVcXEhlYWx0aENhcmVBbmFseXRpY3MtMjAtMDUtMjAyMi1tYWluXFxteS1hcHAvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFx5cmFvXFxPbmVEcml2ZSAtIE1lcmF0aXZlXFxEZXNrdG9wXFx1c3QgY29ob3J0IGJ1aWxkZXJcXGhlYWx0aGNhcmVcXEhlYWx0aENhcmVBbmFseXRpY3MtMjAtMDUtMjAyMi1tYWluXFxteS1hcHAvc3JjXFxzYXNzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHdEQUFBO0FDQ0Y7QURDQTtFQUNFLDRCQUFBO0VBQ0EsNkRBQUE7QUNDRjtBRENBO0VBQ0UscUJBQUE7RUFDQSwwREFBQTtBQ0NGO0FEQ0E7RUFDRSx5QkFBQTtFQUNBLDBEQUFBO0FDQ0Y7QURDQTtFQUNFLDhCQUFBO0VBQ0EsK0RBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSwyREFBQTtBQ0NGO0FDdEJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBRHdCRjtBQ3ZCRTtFQVJGO0lBU0ksWUFBQTtFRDBCRjtBQUNGO0FDekJFO0VBWEY7SUFZSSxZQUFBO0VENEJGO0FBQ0Y7QUMzQkU7RUFkRjtJQWVJLFlBQUE7RUQ4QkY7QUFDRjtBQzdCRTtFQWpCRjtJQWtCSSxZQUFBO0VEZ0NGO0FBQ0Y7QUMvQkU7RUFFRSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FEZ0NKO0FDOUJJO0VBQ0UsaUJBQUE7QURnQ047QUM5Qkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QURnQ047QUMvQk07RUFIRjtJQUlJLFlBQUE7RURrQ047QUFDRjtBQ2pDTTtFQU5GO0lBT0ksWUFBQTtFRG9DTjtBQUNGO0FDbkNNO0VBVEY7SUFVSSxZQUFBO0VEc0NOO0FBQ0Y7QUNyQ007RUFaRjtJQWFJLFlBQUE7SUFDQSxrQkFBQTtFRHdDTjtBQUNGO0FDdkNNO0VBaEJGO0lBaUJJLFlBQUE7SUFDQSxrQkFBQTtFRDBDTjtBQUNGO0FDekNNO0VBcEJGO0lBcUJJLFlBQUE7SUFDQSxrQkFBQTtFRDRDTjtBQUNGO0FDM0NNO0VBeEJGO0lBeUJJLFlBQUE7RUQ4Q047QUFDRjtBQzVDSTtFQ3pDRiwrQkgyQmE7RUcxQmIsZUFBQTtFRDBDSSxxQkFBQTtFQUNBLGlCQUFBO0FEK0NOO0FDOUNNO0VBSkY7SUN6Q0YsK0JIMkJhO0lHMUJiLGVBQUE7RUYrRkE7QUFDRjtBQ2pETTtFQVBGO0lDekNGLCtCSDJCYTtJRzFCYixlQUFBO0VGcUdBO0FBQ0Y7QUNwRE07RUFWRjtJQ3pDRiwrQkgyQmE7SUcxQmIsZUFBQTtFRjJHQTtBQUNGO0FDdkRNO0VBYkY7SUN6Q0YsK0JIMkJhO0lHMUJiLGVBQUE7RUZpSEE7QUFDRjtBQzFETTtFQWhCRjtJQ3pDRiwrQkgyQmE7SUcxQmIsZUFBQTtFRnVIQTtBQUNGO0FDN0RNO0VBbkJGO0lDekNGLCtCSDJCYTtJRzFCYixlQUFBO0VGNkhBO0FBQ0Y7QUNoRU07RUF0QkY7SUN6Q0YsK0JIMkJhO0lHMUJiLGNBQUE7RUZtSUE7QUFDRjtBQ2pFRTtFQUVFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURrRUo7QUNqRUk7RUFORjtJQU9JLHlCQUFBO0VEb0VKO0FBQ0Y7QUNuRUk7RUFURjtJQVVJLHlCQUFBO0VEc0VKO0FBQ0Y7QUNyRUk7RUFaRjtJQWFJLHlCQUFBO0VEd0VKO0FBQ0Y7QUN2RUk7RUFmRjtJQWdCSSx5QkFBQTtFRDBFSjtBQUNGO0FDekVJO0VBbEJGO0lBbUJJLHlCQUFBO0VENEVKO0FBQ0Y7QUMzRUk7RUFyQkY7SUFzQkkseUJBQUE7RUQ4RUo7QUFDRjtBQzdFSTtFQXhCRjtJQXlCSSx5QkFBQTtFRGdGSjtBQUNGO0FDL0VJO0VBM0JGO0lBNEJJLHlCQUFBO0VEa0ZKO0FBQ0Y7QUNqRkk7RUFDRSxrQkFBQTtBRG1GTjtBQ2xGTTtFQ3BHSiwrQkgyQmE7RUcxQmIsZUFBQTtFRHFHTSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNGdEdRO0FDMkxoQjtBQ3BGUTtFQUNFLGtCQUFBO0FEc0ZWO0FDbkZNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VDckhOLCtCSDJCYTtFRzFCYixlQUFBO0VEc0hNLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEc0ZSO0FDckZRO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0Z2SFU7QUM4TXBCO0FDckZRO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBRHVGVjtBQ3JGUTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FEdUZWO0FDckZRO0VBQ0UsVUFBQTtBRHVGVjtBQ3JGUTtFQTdCRjtJQThCSSxpQkFBQTtJQy9JUiwrQkgyQmE7SUcxQmIsZUFBQTtFRndPQTtBQUNGO0FDeEZRO0VBakNGO0lBa0NJLGlCQUFBO0lDbkpSLCtCSDJCYTtJRzFCYixlQUFBO0VGK09BO0FBQ0Y7QUMzRlE7RUFyQ0Y7SUFzQ0ksaUJBQUE7SUN2SlIsK0JIMkJhO0lHMUJiLGVBQUE7RUZzUEE7QUFDRjtBQzlGUTtFQXpDRjtJQTBDSSxpQkFBQTtJQzNKUiwrQkgyQmE7SUcxQmIsZUFBQTtFRjZQQTtBQUNGO0FDakdRO0VBN0NGO0lDakhKLCtCSDJCYTtJRzFCYixlQUFBO0VGbVFBO0FBQ0Y7QUNwR1E7RUFoREY7SUFpREksaUJBQUE7SUNsS1IsK0JIMkJhO0lHMUJiLGVBQUE7RUYwUUE7QUFDRjtBQ3ZHUTtFQXBERjtJQXFESSxpQkFBQTtJQ3RLUiwrQkgyQmE7SUcxQmIsZUFBQTtJRHVLUSxZQUFBO0VEMkdSO0FBQ0Y7QUMxR1E7RUF6REY7SUEwREksZ0JBQUE7SUMzS1IsK0JIMkJhO0lHMUJiLGVBQUE7RUZ5UkE7QUFDRjtBQzdHUTtFQTdERjtJQThESSxnQkFBQTtJQy9LUiwrQkgyQmE7SUcxQmIsZUFBQTtJRGdMUSxZQUFBO0VEaUhSO0FBQ0Y7QUNoSFE7RUFDRSxpQkFBQTtBRGtIVjtBQzlHTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FEZ0hSO0FDL0dRO0VBVEY7SUFVSSxZQUFBO0VEa0hSO0FBQ0Y7QUNqSFE7RUFaRjtJQWFJLFlBQUE7RURvSFI7QUFDRjtBQ25IUTtFQWZGO0lBZ0JJLFlBQUE7RURzSFI7QUFDRjtBQ3JIUTtFQWxCRjtJQW1CSSxZQUFBO0VEd0hSO0FBQ0Y7QUN2SFE7RUFyQkY7SUFzQkksU0FBQTtJQUNBLFlBQUE7RUQwSFI7QUFDRjtBQ3pIUTtFQXpCRjtJQTBCSSxZQUFBO0VENEhSO0FBQ0Y7QUMzSFE7RUE1QkY7SUE2QkksU0FBQTtJQUNBLFlBQUE7RUQ4SFI7QUFDRjtBQzdIUTtFQUNFLGFBQUE7RUN6TlIsK0JIMkJhO0VHMUJiLGVBQUE7RUQwTlEsY0ZyTk07RUVzTk4sZ0NBQUE7RUFDQSxlQUFBO0FEZ0lWO0FDL0hVO0VBQ0UsZ0NBQUE7QURpSVo7QUMvSFU7RUFDRSxXQUFBO0FEaUlaO0FDL0hVO0VBWkY7SUN4Tk4sK0JIMkJhO0lHMUJiLGVBQUE7RUZ1V0E7QUFDRjtBQ2xJVTtFQWZGO0lDeE5OLCtCSDJCYTtJRzFCYixlQUFBO0VGNldBO0FBQ0Y7QUNySVU7RUFsQkY7SUN4Tk4sK0JIMkJhO0lHMUJiLGVBQUE7RUZtWEE7QUFDRjtBQ3hJVTtFQXJCRjtJQXNCSSxhQUFBO0VEMklWO0FBQ0Y7QUMxSVU7RUF4QkY7SUN4Tk4sK0JIMkJhO0lHMUJiLGVBQUE7RUY4WEE7QUFDRjtBQzdJVTtFQTNCRjtJQ3hOTiwrQkgyQmE7SUcxQmIsZUFBQTtJRG9QVSxhQUFBO0VEaUpWO0FBQ0Y7QUNoSlU7RUEvQkY7SUN4Tk4sK0JIMkJhO0lHMUJiLGNBQUE7SUR3UFUsYUFBQTtFRG9KVjtBQUNGO0FDakpNO0VBQ0Usa0JBQUE7QURtSlI7QUNsSlE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VDdFFSLCtCSDJCYTtFRzFCYixlQUFBO0VEdVFRLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURxSlY7QUNqSkk7RUFDRSxrQ0FBQTtBRG1KTjtBQy9JSTtFQUNFLGNBQUE7QURpSk47QUM5SUk7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QURnSk47QUM3SUk7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FEK0lOO0FDNUlJO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FEOElOO0FDM0lJO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FENklOO0FDMUlJO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FENElOO0FDeklJO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FEMklOO0FDMUlNO0VBTkY7SUFPSSx1QkFBQTtFRDZJTjtBQUNGO0FDNUlNO0VBVEY7SUFVSSxxQkFBQTtFRCtJTjtBQUNGO0FDOUlNO0VBWkY7SUFhSSxxQkFBQTtFRGlKTjtBQUNGO0FDaEpNO0VBZkY7SUFnQkksdUJBQUE7RURtSk47QUFDRjtBQ2xKTTtFQWxCRjtJQW1CSSx1QkFBQTtFRHFKTjtBQUNGO0FDcEpNO0VBckJGO0lBc0JJLHVCQUFBO0VEdUpOO0FBQ0Y7QUN0Sk07RUF4QkY7SUF5QkksdUJBQUE7RUR5Sk47QUFDRjtBQ3hKTTtFQTNCRjtJQTRCSSx1QkFBQTtFRDJKTjtBQUNGO0FDeEpFO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRDBKSjtBQ3pKSTtFQUpGO0lBS0ksU0FBQTtFRDRKSjtBQUNGO0FDM0pJO0VBUEY7SUFRSSxTQUFBO0VEOEpKO0FBQ0Y7QUM3Skk7RUFWRjtJQVdJLFFBQUE7RURnS0o7QUFDRjtBQy9KSTtFQWJGO0lBY0ksUUFBQTtFRGtLSjtBQUNGO0FDaktJO0VBQ0UseUJBQUE7RUFDQSwyQ0FBQTtBRG1LTjtBQ2pLSTtFQUNFLDJDQUFBO0FEbUtOO0FDaktJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FEbUtOO0FDbEtNO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkZ2WFU7RUV3WFYsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VDL1dOLHFDSFdvQjtFR1ZwQixlQUFBO0FGb2hCRjtBQ25LTTtFQUNFLGlCQUFBO0FEcUtSO0FDbEtJO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QURvS047QUNuS007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QURxS1I7QUNwS1E7RUFDRSxrQkFBQTtBRHNLVjtBQ2pLRTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QURtS0o7QUNoS0k7RUFQRjtJQVFJLG9CQUFBO0VEbUtKO0FBQ0Y7QUNoS0k7RUFaRjtJQWFJLG9CQUFBO0VEbUtKO0FBQ0Y7QUNsS0k7RUFmRjtJQWdCSSxvQkFBQTtJQUNBLHVCQUFBO0VEcUtKO0FBQ0Y7QUNsS0k7RUFyQkY7SUFzQkksbUJBQUE7SUFDQSx1QkFBQTtFRHFLSjtBQUNGO0FDaktBO0VBQ0UsZUFBQTtBRG9LRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb3J0JztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0LUJvb2sub3RmKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb3J0RXh0cmFCb2xkJztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0LUV4dHJhYm9sZC5vdGYpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvcnRUVCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUJvb2sudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb3J0VFRCb2xkJztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtQm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvcnRUVEV4dHJhQm9sZCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUV4dHJhYm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvcnRUVExpZ2h0JztcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtTGlnaHQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbiRwcmltYXJ5LWNvbG9yOiAjMjc3NTdjO1xuJHByaW1hcnktcXVpei1iZzogI2YyZjdmODtcbiRzZWNvbmRhcnktY29sb3I6ICMwMDk3YWM7XG4kcmlnaHQtZmxvYXRpbmctYmc6ICMwMDZlNzQ7XG5cbiRzcGVjaWFsLWNvbG9yLTE6ICM2NjVmZDE7XG4kc3BlY2lhbC1jb2xvci0yOiAjNTc0YjkwO1xuJHNwZWNpYWwtY29sb3ItMzogIzM4YWRhOTtcbiRzcGVjaWFsLWNvbG9yLTQ6ICNhNTVlZWE7XG4kc3BlY2lhbC1jb2xvci01OiAjZDU1NTU4O1xuJHNwZWNpYWwtY29sb3ItNjogI2Q2YTA1YjtcbiRzcGVjaWFsLWNvbG9yLTc6ICNhNDY3MGI7XG4kc3BlY2lhbC1jb2xvci04OiAjNDc3ZTgwO1xuJHNwZWNpYWwtY29sb3ItOTogI2ZjODI0YTtcbiRzcGVjaWFsLWNvbG9yLTEwOiAjZmYxZTAwO1xuJHNwZWNpYWwtY29sb3ItMTE6ICMwMGFlZmY7XG4kc3BlY2lhbC1jb2xvci0xMjogIzMyNGU3YjtcbiRzcGVjaWFsLWNvbG9yLTEzOiAjYzk0ZTRlO1xuJHNwZWNpYWwtY29sb3ItMTQ6ICMwMWJlZmY7XG4kc3BlY2lhbC1jb2xvci0xNTogIzYwNjA2MDtcblxuJHByaW1hcnktZm9udDogJ0ZvcnQnLCBzYW5zLXNlcmlmO1xuJHByaW1hcnktZm9udC1leHRyYWJvbGQ6ICdGb3J0RXh0cmFCb2xkJywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udDogJ0ZvcnRUVCcsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQtbGlnaHQ6ICdGb3J0VFRMaWdodCcsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQtYm9sZDogJ0ZvcnRUVEJvbGQnLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250LWV4dHJhYm9sZDogJ0ZvcnRUVEV4dHJhQm9sZCcsIHNhbnMtc2VyaWY7XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFwiO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnQtQm9vay5vdGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0LUV4dHJhYm9sZC5vdGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRUVFwiO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1Cb29rLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFRUQm9sZFwiO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFRURXh0cmFCb2xkXCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUV4dHJhYm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRUVExpZ2h0XCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA3LjgxMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzIyMjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICBoZWFkZXIge1xuICAgIGhlaWdodDogODBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICBoZWFkZXIge1xuICAgIGhlaWdodDogODBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICBoZWFkZXIge1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIGhlYWRlciB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICB9XG59XG5oZWFkZXIgLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNDAuODEyNSUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5oZWFkZXIgLmhlYWRlci1sb2dvIHNwYW4ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbmhlYWRlciAuaGVhZGVyLWxvZ28gaW1nIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLWxvZ28gaW1nIHtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICBoZWFkZXIgLmhlYWRlci1sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbG9nbyBpbWcge1xuICAgIGhlaWdodDogNTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICBoZWFkZXIgLmhlYWRlci1sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICBoZWFkZXIgLmhlYWRlci1sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MnB4KSBhbmQgKG1heC1oZWlnaHQ6IDg2NHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLWxvZ28gaW1nIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbG9nbyBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuaGVhZGVyIC5oZWFkZXItbG9nbyBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLWxvZ28gc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLWxvZ28gc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLWxvZ28gc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICBoZWFkZXIgLmhlYWRlci1sb2dvIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbG9nbyBzcGFuIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUycHgpIGFuZCAobWF4LWhlaWdodDogODY0cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbG9nbyBzcGFuIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbG9nbyBzcGFuIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbn1cbmhlYWRlciAuaGVhZGVyLW5hdiB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIC0yNjBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiB7XG4gICAgd2lkdGg6IGNhbGMoNDYlIC0gLTI2MHB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiB7XG4gICAgd2lkdGg6IGNhbGMoNDUlIC0gLTI2MHB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiB7XG4gICAgd2lkdGg6IGNhbGMoNDElIC0gLTI2MHB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYge1xuICAgIHdpZHRoOiBjYWxjKDQwJSAtIC0yNjBweCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYge1xuICAgIHdpZHRoOiBjYWxjKDM4JSAtIC0yNjBweCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IHtcbiAgICB3aWR0aDogY2FsYygzNiUgLSAtMjYwcHgpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUycHgpIGFuZCAobWF4LWhlaWdodDogODY0cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IHtcbiAgICB3aWR0aDogY2FsYygzMCUgLSAtMjYwcHgpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IHtcbiAgICB3aWR0aDogY2FsYygyNiUgLSAtMjYwcHgpO1xuICB9XG59XG5oZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbS5sb2dvdXQge1xuICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjMjc3NTdjO1xufVxuaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbS5sb2dvdXQgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMHB4IDQwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5oZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIGJ1dHRvbi5lZmZlY3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDZlNzQ7XG4gIGNvbG9yOiAjMDA2ZTc0O1xufVxuaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSBidXR0b24uZWZmZWN0OmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNzc1N2M7XG59XG5oZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIGJ1dHRvbi5uby1lZmZlY3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjc3NTdjO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5oZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIGJ1dHRvbi5hY3RpdmUtc3ViLWhlYWQge1xuICBvcGFjaXR5OiAxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMHB4IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAuaGVhZGVyLWl0ZW0gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSBidXR0b24ge1xuICAgIHBhZGRpbmc6IDBweCAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSBidXR0b24ge1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDk2MHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAuaGVhZGVyLWl0ZW0gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MnB4KSBhbmQgKG1heC1oZWlnaHQ6IDg2NHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAuaGVhZGVyLWl0ZW0gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxufVxuaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSBidXR0b24gaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5oZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NHB4O1xuICBsZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDkxLjglO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjc3NTdjO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiB7XG4gICAgd2lkdGg6IDg5LjYlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSAuaGVhZGVyLXN1Yi1uYXYge1xuICAgIHdpZHRoOiA4OC4xJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiB7XG4gICAgd2lkdGg6IDg3LjklO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSAuaGVhZGVyLXN1Yi1uYXYge1xuICAgIHdpZHRoOiA4Ny4yJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiB7XG4gICAgdG9wOiA0NHB4O1xuICAgIHdpZHRoOiA4Ni4yJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MnB4KSBhbmQgKG1heC1oZWlnaHQ6IDg2NHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAuaGVhZGVyLWl0ZW0gLmhlYWRlci1zdWItbmF2IHtcbiAgICB3aWR0aDogODQuNSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiB7XG4gICAgdG9wOiAzOXB4O1xuICAgIHdpZHRoOiA4Mi41JTtcbiAgfVxufVxuaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSAuaGVhZGVyLXN1Yi1uYXYgLmhlYWRlci1zdWItbmF2LWl0ZW0ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyNzc1N2M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRlNWY1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiAuaGVhZGVyLXN1Yi1uYXYtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkNGU1ZjU7XG59XG5oZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiAuaGVhZGVyLXN1Yi1uYXYtaXRlbSBpbWcge1xuICB3aWR0aDogMjRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiAuaGVhZGVyLXN1Yi1uYXYtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiAuaGVhZGVyLXN1Yi1uYXYtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAuaGVhZGVyLWl0ZW0gLmhlYWRlci1zdWItbmF2IC5oZWFkZXItc3ViLW5hdi1pdGVtIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAuaGVhZGVyLWl0ZW0gLmhlYWRlci1zdWItbmF2IC5oZWFkZXItc3ViLW5hdi1pdGVtIHtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSAuaGVhZGVyLXN1Yi1uYXYgLmhlYWRlci1zdWItbmF2LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICBoZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItc3ViLW5hdiAuaGVhZGVyLXN1Yi1uYXYtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAxMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSAuaGVhZGVyLXN1Yi1uYXYgLmhlYWRlci1zdWItbmF2LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5oZWFkZXIgLmhlYWRlci1uYXYgLmhlYWRlci1pdGVtIC5oZWFkZXItbm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbSAuaGVhZGVyLW5vdGlmaWNhdGlvbiAuaGVhZGVyLW5vdGlmaWNhdGlvbi1jb3VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiA3cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNDgwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNmVtO1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItc3ViLW5hdi1sb2dvdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufVxuaGVhZGVyIC5oZWFkZXItbmF2IC5oZWFkZXItaXRlbTpob3ZlciAuaGVhZGVyLXN1Yi1uYXYtbG9nb3V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5oZWFkZXIgLmhlYWRlci1uYXYgLmJ0bi1jaGFuZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjc3NTdjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjc3NTdjICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbmhlYWRlciAuaGVhZGVyLW5hdiAudGFiLWNoYW5nZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY3ZjggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxNjVweDtcbiAgei1pbmRleDogOTtcbn1cbmhlYWRlciAuaGVhZGVyLW5hdiAudGFiLWNoYW5nZS1pZGVhdGhvbnMge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmN2Y4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OS4yJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDE3NXB4O1xuICB6LWluZGV4OiA5O1xufVxuaGVhZGVyIC5oZWFkZXItbmF2IC50YWItY2hhbmdlLWV4cGVyaW1lbnRzIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjdmOCAhaW1wb3J0YW50O1xuICB3aWR0aDogODkuNyUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxNjVweDtcbiAgei1pbmRleDogOTtcbn1cbmhlYWRlciAuaGVhZGVyLW5hdiAudGFiLWNoYW5nZS1pbm5vdmF0aW9uIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjdmOCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTIuMiUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxNjVweDtcbiAgei1pbmRleDogOTtcbn1cbmhlYWRlciAuaGVhZGVyLW5hdiAudGFiLWNoYW5nZS1teWluaXRpYXRpdmVzIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjdmOCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAuNCUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxNjVweDtcbiAgei1pbmRleDogOTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC50YWItY2hhbmdlLW15aW5pdGlhdGl2ZXMge1xuICAgIHdpZHRoOiA4Ny42JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC50YWItY2hhbmdlLW15aW5pdGlhdGl2ZXMge1xuICAgIHdpZHRoOiA4NyUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAudGFiLWNoYW5nZS1teWluaXRpYXRpdmVzIHtcbiAgICB3aWR0aDogODYlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC50YWItY2hhbmdlLW15aW5pdGlhdGl2ZXMge1xuICAgIHdpZHRoOiA4NS42JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItbmF2IC50YWItY2hhbmdlLW15aW5pdGlhdGl2ZXMge1xuICAgIHdpZHRoOiA4NC42JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAudGFiLWNoYW5nZS1teWluaXRpYXRpdmVzIHtcbiAgICB3aWR0aDogODMuNiUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MnB4KSBhbmQgKG1heC1oZWlnaHQ6IDg2NHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAudGFiLWNoYW5nZS1teWluaXRpYXRpdmVzIHtcbiAgICB3aWR0aDogODEuNSUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIGhlYWRlciAuaGVhZGVyLW5hdiAudGFiLWNoYW5nZS1teWluaXRpYXRpdmVzIHtcbiAgICB3aWR0aDogNzkuNSUgIWltcG9ydGFudDtcbiAgfVxufVxuaGVhZGVyIC5hZG1pbi1uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAyNXB4O1xuICByaWdodDogMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICBoZWFkZXIgLmFkbWluLW5hdiB7XG4gICAgdG9wOiAxN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIGhlYWRlciAuYWRtaW4tbmF2IHtcbiAgICB0b3A6IDE3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgaGVhZGVyIC5hZG1pbi1uYXYge1xuICAgIHRvcDogN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgaGVhZGVyIC5hZG1pbi1uYXYge1xuICAgIHRvcDogNHB4O1xuICB9XG59XG5oZWFkZXIgLmFkbWluLW5hdiAuaGVhZGVyLXN1Yi1uYXYtaXRlbSB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjRiNGI0ICFpbXBvcnRhbnQ7XG59XG5oZWFkZXIgLmFkbWluLW5hdiAubm8tYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNiNGI0YjQgIWltcG9ydGFudDtcbn1cbmhlYWRlciAuYWRtaW4tbmF2IC5idG4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXIgLmFkbWluLW5hdiAuYnRuLXdyYXBwZXIgYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY3Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBmb250LWZhbWlseTogXCJGb3J0VFRCb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmhlYWRlciAuYWRtaW4tbmF2IC5idG4td3JhcHBlciBpbWcge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cbmhlYWRlciAuYWRtaW4tbmF2IC5oZWFkZXItc3ViLW5hdiB7XG4gIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xuICB0b3A6IDUwcHggIWltcG9ydGFudDtcbiAgbGVmdDogdW5zZXQgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuaGVhZGVyIC5hZG1pbi1uYXYgLmhlYWRlci1zdWItbmF2IC5oZWFkZXItc3ViLW5hdi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmhlYWRlciAuYWRtaW4tbmF2IC5oZWFkZXItc3ViLW5hdiAuaGVhZGVyLXN1Yi1uYXYtaXRlbSBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5oZWFkZXIgLndhZ2dsZS1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxOTBweCAhaW1wb3J0YW50O1xuICB0b3A6IDI1cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDE1MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIGhlYWRlciAud2FnZ2xlLWxvZ28ge1xuICAgIHRvcDogMTdweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIGhlYWRlciAud2FnZ2xlLWxvZ28ge1xuICAgIHRvcDogMTdweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIGhlYWRlciAud2FnZ2xlLWxvZ28ge1xuICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxNzVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgaGVhZGVyIC53YWdnbGUtbG9nbyB7XG4gICAgdG9wOiAzcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTcwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4ud2FnZ2xlLWxvZ28tbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zYXNzL21peGlucyc7XG5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA3LjgxMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzIyMjtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gIH1cbiAgLmhlYWRlci1sb2dvIHtcbiAgICAvLyB3aWR0aDogY2FsYyg1MCUgLSA3LjgxMjUlKTtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSA0MC44MTI1JSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgc3BhbiB7XG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogNjVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxOCk7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41ZW07XG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxNSk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxNSk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxMyk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTMpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDEyKTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDExKTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaGVhZGVyLW5hdiB7XG4gICAgLy8gd2lkdGg6IGNhbGMoNTAlIC0gMTQ0cHgpO1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIC0yNjBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAgICAgd2lkdGg6IGNhbGMoNDYlIC0gLTI2MHB4KTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICB3aWR0aDogY2FsYyg0NSUgLSAtMjYwcHgpO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgIHdpZHRoOiBjYWxjKDQxJSAtIC0yNjBweCk7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgIHdpZHRoOiBjYWxjKDQwJSAtIC0yNjBweCk7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgd2lkdGg6IGNhbGMoMzglIC0gLTI2MHB4KTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgd2lkdGg6IGNhbGMoMzYlIC0gLTI2MHB4KTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MnB4KSBhbmQgKG1heC1oZWlnaHQ6IDg2NHB4KSB7XG4gICAgICB3aWR0aDogY2FsYygzMCUgLSAtMjYwcHgpO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiBjYWxjKDI2JSAtIC0yNjBweCk7XG4gICAgfVxuICAgIC5oZWFkZXItaXRlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAmLmxvZ291dCB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTYpO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDBweCA0MHB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAmLmVmZmVjdDpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRyaWdodC1mbG9hdGluZy1iZztcbiAgICAgICAgICBjb2xvcjogJHJpZ2h0LWZsb2F0aW5nLWJnO1xuICAgICAgICB9XG4gICAgICAgICYuZWZmZWN0OmFjdGl2ZSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgICAmLm5vLWVmZmVjdDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUtc3ViLWhlYWQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxOHB4O1xuICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTUpO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTUpO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxNHB4O1xuICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTMpO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTJweDtcbiAgICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDEzKTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDEyKTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxMyk7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDk2MHB4KSB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxMik7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCA2cHg7XG4gICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxMik7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDEwKTtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaGVhZGVyLXN1Yi1uYXYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTRweDtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHdpZHRoOiA5MS44JTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgICB3aWR0aDogODkuNiU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDg4LjElO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgICB3aWR0aDogODcuOSU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDg3LjIlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgICAgICAgICB0b3A6IDQ0cHg7XG4gICAgICAgICAgd2lkdGg6IDg2LjIlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICAgICAgICAgIHdpZHRoOiA4NC41JTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgICB0b3A6IDM5cHg7XG4gICAgICAgICAgd2lkdGg6IDgyLjUlO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXItc3ViLW5hdi1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTYpO1xuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZTVmNTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZDRlNWY1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAgICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUycHgpIGFuZCAobWF4LWhlaWdodDogODY0cHgpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTApO1xuICAgICAgICAgICAgcGFkZGluZzogMTFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDgpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5oZWFkZXItbm90aWZpY2F0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuaGVhZGVyLW5vdGlmaWNhdGlvbi1jb3VudCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM0ODAwO1xuICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTApO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuaGVhZGVyLXN1Yi1uYXYtbG9nb3V0e1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbiAgICAgIFxuICAgIH1cblxuICAgIC5oZWFkZXItaXRlbTpob3ZlciAuaGVhZGVyLXN1Yi1uYXYtbG9nb3V0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5idG4tY2hhbmdlIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudGFiLWNoYW5nZSB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjdmOCAhaW1wb3J0YW50O1xuICAgICAgbWluLXdpZHRoOiAxNjVweDtcbiAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxuXG4gICAgLnRhYi1jaGFuZ2UtaWRlYXRob25zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmN2Y4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogODkuMiUgIWltcG9ydGFudDtcbiAgICAgIG1pbi13aWR0aDogMTc1cHg7XG4gICAgICB6LWluZGV4OiA5O1xuICAgIH1cblxuICAgIC50YWItY2hhbmdlLWV4cGVyaW1lbnRzIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmN2Y4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogODkuNyUgIWltcG9ydGFudDtcbiAgICAgIG1pbi13aWR0aDogMTY1cHg7XG4gICAgICB6LWluZGV4OiA5O1xuICAgIH1cblxuICAgIC50YWItY2hhbmdlLWlubm92YXRpb24ge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY3ZjggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiA5Mi4yJSAhaW1wb3J0YW50O1xuICAgICAgbWluLXdpZHRoOiAxNjVweDtcbiAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxuXG4gICAgLnRhYi1jaGFuZ2UtbXlpbml0aWF0aXZlcyB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjdmOCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDkwLjQlICFpbXBvcnRhbnQ7XG4gICAgICBtaW4td2lkdGg6IDE2NXB4O1xuICAgICAgei1pbmRleDogOTtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgd2lkdGg6IDg3LjYlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDg3JSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgIHdpZHRoOiA4NiUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgd2lkdGg6IDg1LjYlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDg0LjYlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gICAgICAgIHdpZHRoOiA4My42JSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MnB4KSBhbmQgKG1heC1oZWlnaHQ6IDg2NHB4KSB7XG4gICAgICAgIHdpZHRoOiA4MS41JSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiA3OS41JSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYWRtaW4tbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICB0b3A6IDE3cHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgIHRvcDogMTdweDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgdG9wOiA3cHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgdG9wOiA0cHg7XG4gICAgfVxuICAgIC5oZWFkZXItc3ViLW5hdi1pdGVte1xuICAgICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjRiNGI0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5uby1ib3JkZXJ7XG4gICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2I0YjRiNCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnRuLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBidXR0b24ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktcXVpei1iZztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIEBpbmNsdWRlIHNlY29uZGFyeS1ib2xkLWZzKDE1KTtcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuaGVhZGVyLXN1Yi1uYXYge1xuICAgICAgd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB0b3A6IDUwcHggIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAuaGVhZGVyLXN1Yi1uYXYtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC53YWdnbGUtbG9nbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE5MHB4ICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDE1MHB4O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICB0b3A6IDE3cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgIHRvcDogMTdweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gICAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxNzVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUycHgpIGFuZCAobWF4LWhlaWdodDogODY0cHgpIHtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICB0b3A6IDNweCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi53YWdnbGUtbG9nby1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuJHByZWZpeGVzOiAnd2Via2l0JywgJ21veicsICdtcycsICdvJywgJ25vbmUnO1xuQG1peGluIHByZWZpeCgkcHJvcGVydHksICRhcmd1bWVudHMpIHtcbiAgQGVhY2ggJHByZWZpeCBpbiAkcHJlZml4ZXMge1xuICAgIEBpZiAkcHJlZml4ID09ICdub25lJyB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRhcmd1bWVudHM7XG4gICAgfSBAZWxzZSB7XG4gICAgICAtI3skcHJlZml4fS0jeyRwcm9wZXJ0eX06ICRhcmd1bWVudHM7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBmb3JtLWlucHV0LXN0eWxlKCkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWl4aW4gcHJpbWFyeS1mcygkZm9udC1zaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIHByaW1hcnktZXh0cmFib2xkLWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQtZXh0cmFib2xkO1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1mcygkZm9udC1zaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gc2Vjb25kYXJ5LWxpZ2h0LWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udC1saWdodDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBzZWNvbmRhcnktYm9sZC1mcygkZm9udC1zaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQtYm9sZDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBzZWNvbmRhcnktZXh0cmFib2xkLWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udC1leHRyYWJvbGQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gYmdjLXNwZWNpYWwoKSB7XG4gIC5iZy0xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xO1xuICB9XG4gIC5iZy0yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0yO1xuICB9XG4gIC5iZy0zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gIC5iZy00IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci00O1xuICB9XG4gIC5iZy01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci01O1xuICB9XG4gIC5iZy02IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gIC5iZy03IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci03O1xuICB9XG4gIC5iZy04IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci04O1xuICB9XG4gIC5iZy05IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gIC5iZy0xMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTA7XG4gIH1cbiAgLmJnLTExIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMTtcbiAgfVxuICAuYmctMTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gIC5iZy0xMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTM7XG4gIH1cbiAgLmJnLTE0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNDtcbiAgfVxuICAuYmctMTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBjb2xvci1zcGVjaWFsKCkge1xuICAuY29sb3ItMSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgLmNvbG9yLTIge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0yO1xuICB9XG4gIC5jb2xvci0zIHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMztcbiAgfVxuICAuY29sb3ItNCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgLmNvbG9yLTUge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci01O1xuICB9XG4gIC5jb2xvci02IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItNjtcbiAgfVxuICAuY29sb3ItNyB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgLmNvbG9yLTgge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci04O1xuICB9XG4gIC5jb2xvci05IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItOTtcbiAgfVxuICAuY29sb3ItMTAge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAuY29sb3ItMTEge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMTtcbiAgfVxuICAuY29sb3ItMTIge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMjtcbiAgfVxuICAuY29sb3ItMTMge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAuY29sb3ItMTQge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNDtcbiAgfVxuICAuY29sb3ItMTUge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNTtcbiAgfVxufVxuXG5AbWl4aW4gZG9tYWluLWJnYygpIHtcbiAgJi5kb21haW4xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMjtcbiAgfVxuICAmLmRvbWFpbjMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTM7XG4gIH1cbiAgJi5kb21haW40IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci00O1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNTtcbiAgfVxuICAmLmRvbWFpbjYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTY7XG4gIH1cbiAgJi5kb21haW43IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci03O1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItODtcbiAgfVxuICAmLmRvbWFpbjkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTk7XG4gIH1cbiAgJi5kb21haW4xMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTA7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTE7XG4gIH1cbiAgJi5kb21haW4xMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTI7XG4gIH1cbiAgJi5kb21haW4xMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTM7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTQ7XG4gIH1cbiAgJi5kb21haW4xNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTU7XG4gIH1cbn1cblxuQG1peGluIHJnYmEtYmcoJG9wYWNpdHkpIHtcbiAgJi5kb21haW4xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTEsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0zLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW40IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTQsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItNSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci02LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW43IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTcsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItOCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci05LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xMCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTEsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTEyLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xMywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTQsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTE1LCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuQG1peGluIGRvbWFpbi1maWxsKCkge1xuICAmLmRvbWFpbjEge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgJi5kb21haW4yIHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0yO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMztcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgJi5kb21haW41IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci01O1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItNjtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgJi5kb21haW44IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci04O1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItOTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAmLmRvbWFpbjExIHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0xMTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0xMjtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAmLmRvbWFpbjE0IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0xNDtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0xNTtcbiAgfVxufVxuXG5AbWl4aW4gZG9tYWluLWJvcmRlci1yaWdodCgkb3BhY2l0eSkge1xuICAmLmRvbWFpbjEge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTEsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTIsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjMge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTMsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTQsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTUsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjYge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTYsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTcsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTgsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjkge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTksICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xMCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTExLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTIsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xMywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTE0LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xNSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gZG9tYWluLWJvcmRlci1sZWZ0LTE1KCkge1xuICAmLmRvbWFpbjEge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgJi5kb21haW4yIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0yO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMztcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgJi5kb21haW41IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci01O1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItNjtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgJi5kb21haW44IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci04O1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItOTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAmLmRvbWFpbjExIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xMTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xMjtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAmLmRvbWFpbjE0IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xNDtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xNTtcbiAgfVxufVxuXG5AbWl4aW4gZG9tYWluLWJvcmRlci0xKCkge1xuICAmLmRvbWFpbjEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgJi5kb21haW4yIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0yO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMztcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgJi5kb21haW41IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci01O1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItNjtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgJi5kb21haW44IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci04O1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItOTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAmLmRvbWFpbjExIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xMTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xMjtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAmLmRvbWFpbjE0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xNDtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xNTtcbiAgfVxufVxuXG5AbWl4aW4gaWRlYXRob24tYmFubmVyLWJnKCkge1xuICAmLmJnLTEge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xKTtcbiAgfVxuICAmLmJnLTIge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0yKTtcbiAgfVxuICAmLmJnLTMge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0zKTtcbiAgfVxuICAmLmJnLTQge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci00KTtcbiAgfVxuICAmLmJnLTUge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci01KTtcbiAgfVxuICAmLmJnLTYge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci02KTtcbiAgfVxuICAmLmJnLTcge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci03KTtcbiAgfVxuICAmLmJnLTgge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci04KTtcbiAgfVxuICAmLmJnLTkge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci05KTtcbiAgfVxuICAmLmJnLTEwIHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTApO1xuICB9XG4gICYuYmctMTEge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xMSk7XG4gIH1cbiAgJi5iZy0xMiB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTEyKTtcbiAgfVxuICAmLmJnLTEzIHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTMpO1xuICB9XG4gICYuYmctMTQge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xNCk7XG4gIH1cbiAgJi5iZy0xNSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTE1KTtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        myInitiativesTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/innovation-assurance/innovation-assurance.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/innovation-assurance/innovation-assurance.component.ts ***!
    \************************************************************************/

  /*! exports provided: InnovationAssuranceComponent */

  /***/
  function srcAppInnovationAssuranceInnovationAssuranceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InnovationAssuranceComponent", function () {
      return InnovationAssuranceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var InnovationAssuranceComponent =
    /*#__PURE__*/
    function () {
      function InnovationAssuranceComponent(router) {
        _classCallCheck(this, InnovationAssuranceComponent);

        this.router = router;
      }

      _createClass(InnovationAssuranceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToHexa1",
        value: function goToHexa1() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa2",
        value: function goToHexa2() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa3",
        value: function goToHexa3() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa4",
        value: function goToHexa4() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa5",
        value: function goToHexa5() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa6",
        value: function goToHexa6() {
          this.router.navigate(['cohort-builder']);
        }
      }, {
        key: "goToHexa7",
        value: function goToHexa7() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa8",
        value: function goToHexa8() {
          this.router.navigate(['analytics-live']);
        }
      }, {
        key: "goToHexa9",
        value: function goToHexa9() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa10",
        value: function goToHexa10() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa11",
        value: function goToHexa11() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa12",
        value: function goToHexa12() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa13",
        value: function goToHexa13() {
          this.router.navigate(['analytics']);
        }
      }, {
        key: "goToHexa14",
        value: function goToHexa14() {
          this.router.navigate(['analytics']);
        }
      }]);

      return InnovationAssuranceComponent;
    }();

    InnovationAssuranceComponent.??fac = function InnovationAssuranceComponent_Factory(t) {
      return new (t || InnovationAssuranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    InnovationAssuranceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: InnovationAssuranceComponent,
      selectors: [["app-innovation-assurance"]],
      decls: 387,
      vars: 0,
      consts: [[1, "innovation-container"], [1, "innovation-banner-wrapper"], [1, "innovation-banner", "clearfix"], ["src", "assets/images/banner-overlay.png", "alt", "", 1, "innovation-banner-overlay"], [1, "innovation-banner-image"], ["src", "assets/images/innovation-banner.jpg", "alt", ""], [1, "innovation-main"], [1, "grid"], ["src", "../../assets/images/Picture1.jpg", "alt", ""], ["id", "hexagon", 1, "hexa1", 3, "click"], ["id", "hexagon", 1, "hexa2", 3, "click"], ["id", "hexagon", 1, "hexa3", 3, "click"], ["id", "hexagon", 1, "hexa4", 3, "click"], ["id", "hexagon", 1, "hexa5", 3, "click"], ["id", "hexagon", 1, "hexa6", 3, "click"], ["id", "hexagon", 1, "hexa7", 3, "click"], ["id", "hexagon", 1, "hexa8", 3, "click"], ["id", "hexagon", 1, "hexa9", 3, "click"], ["id", "hexagon", 1, "hexa10", 3, "click"], ["id", "hexagon", 1, "hexa11", 3, "click"], ["id", "hexagon", 1, "hexa12", 3, "click"], ["id", "hexagon", 1, "hexa13", 3, "click"], ["id", "hexagon", 1, "hexa14", 3, "click"], [1, "innovation-intro"], [2, "font-size", "20px"], [1, "innovation-intro-title"], [1, "single-image"], ["src", "assets/images/innovation-intro.png", "alt", ""], [1, "innovation-section"], [1, "innovation-section-title"], [1, "innovation-section-multiple-images"], ["src", "assets/images/innovation-problem-area-1.png", "alt", ""], ["src", "assets/images/innovation-problem-area-2.png", "alt", ""], ["src", "assets/images/innovation-narrow-area-1.png", "alt", ""], ["src", "assets/images/innovation-narrow-area-2.png", "alt", ""], ["src", "assets/images/innovation-problem-discovery-1.png", "alt", ""], ["src", "assets/images/innovation-problem-discovery-2.png", "alt", ""], ["src", "assets/images/innovation-problem-discovery-3.png", "alt", ""], ["src", "assets/images/innovation-problem-discovery-4.png", "alt", ""], ["src", "assets/images/innovation-problem-discovery-5.png", "alt", ""], [1, "d-flex"], ["src", "assets/images/innovation-problem-discovery-6.png", "alt", "", 1, "maxWidth"], [1, "maxWidth"], ["src", "assets/images/innovation-problem-discovery-7.png", "alt", ""], ["src", "assets/images/innovation-problem-discovery-8.png", "alt", ""], [1, "innovation-section-multiple-images", "three"], ["src", "assets/images/innovation-ideathon-1.png", "alt", ""], ["src", "assets/images/innovation-ideathon-2.png", "alt", ""], ["src", "assets/images/innovation-ideathon-3.png", "alt", ""], ["src", "assets/images/innovation-ideathon-4.png", "alt", "", 1, "maxWidth"], ["src", "assets/images/innovation-mvp-1.png", "alt", "", 1, "maxWidth"], ["src", "assets/images/innovation-mvp-2.png", "alt", "", 1, "maxWidth"], ["src", "assets/images/innovation-mvc-1.png", "alt", ""], ["src", "assets/images/innovation-mvc-2.png", "alt", ""], ["src", "assets/images/innovation-prototype-1.png", "alt", ""], ["src", "assets/images/innovation-prototype-2.png", "alt", ""], ["src", "assets/images/innovation-prototype-3.png", "alt", "", 1, "maxWidth"], ["src", "assets/images/innovation-prototype-4.png", "alt", ""], [1, "highlight"], [1, "innovation-section-subtitle"], ["src", "assets/images/innovation-challenge-1.png", "alt", "", 1, "maxWidth"], ["src", "assets/images/innovation-challenge-2.png", "alt", ""], ["src", "assets/images/innovation-challenge-3.png", "alt", ""], ["src", "assets/images/innovation-acceleration-1.png", "alt", ""], ["src", "assets/images/innovation-acceleration-2.png", "alt", ""], ["src", "assets/images/innovation-scale-1.png", "alt", "", 1, "maxWidth"], ["src", "assets/images/innovation-scale-2.png", "alt", "", 1, "maxWidth"], ["src", "assets/images/innovation-scale-3.png", "alt", "", 1, "maxWidth"], ["src", "assets/images/innovation-built-1.png", "alt", "", 1, "maxWidth"], ["src", "assets/images/innovation-built-2.png", "alt", "", 1, "maxWidth"], [1, "bold-underline"], ["src", "assets/images/innovation-waggle.png", "alt", ""]],
      template: function InnovationAssuranceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_9_listener() {
            return ctx.goToHexa1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_10_listener() {
            return ctx.goToHexa2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_11_listener() {
            return ctx.goToHexa3();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_12_listener() {
            return ctx.goToHexa4();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_13_listener() {
            return ctx.goToHexa5();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_14_listener() {
            return ctx.goToHexa6();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_15_listener() {
            return ctx.goToHexa7();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_16_listener() {
            return ctx.goToHexa8();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_17_listener() {
            return ctx.goToHexa9();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_18_listener() {
            return ctx.goToHexa10();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_19_listener() {
            return ctx.goToHexa11();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_20_listener() {
            return ctx.goToHexa12();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_21_listener() {
            return ctx.goToHexa13();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InnovationAssuranceComponent_Template_div_click_22_listener() {
            return ctx.goToHexa14();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " UST Health - Purpose-built AI driven services and solutions for healthcare providers, payors, and healthtech organizations to transform their business and patient care. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " We have bred Innovation at UST organically, with expertise from diverse experiences around the world by applying empathy first design, digital born innovation models and technology prowless that focused on problem solving. Rather than leading with a solution to a partially understood or in most cases a misunderstood problem, we spend time in understanding the context, economics, competition, the advantage before developing the solution. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " UST\u2019s 4500+ semiconductor unit works closely with leading chip manufacturers like Intel, AMD, Qualcomm and others in both pre and post silicon areas as well as IoT solutions specific to various industries. We are also a strategic 360 partner to their efforts as they move to the edge and build industry solutions. Through this strategic alignment we get the privilege to leverage the solution architects from the chip manufacturers like Intel. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Few solutions that are in the market are the frictionless checkouts for retailers like Ahold-Delhaize and LIDL in Germany. Also rolling out a vision box solution for cafeterias of hotel chains like Hilton to automate checkouts. Our unique edge is to fill the gap between the chips companies and domains like retail, banking, hospitality, education and manufacturing - our ability to stitch the solutions to a business problem by bringing in the latest on chip design to engineering development and device manufacturing to bring in an end-to-end strategic business outcomes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " We have developed several techniques and methods into the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "UST Innovation Assurance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " that helps us accelerate problem solving and get to viable products in 8 weeks! Our expertise comes from the maturity with the ability to build a concept prototype \u2013 Minimum Viable Concept and extend it to a product prototype, a Minimum Viable Product, to quickly bring it into the market. We have the engineering scale through an extensive ecosystem to support the industrial strength product release into the market via production release, through an Initial Operational Release. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " We come in when a customer is struggling within a problem area that has several problems that needs to be addressed. We get engaged when they are running out of budget, resources, time and bandwidth. This is when we help organize by running ideation exercises, hackathons to develop prototypes. Additionally, we accelerate pilots and scale as the initiative expands to add innovative capabilities. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " UST Innovation Acceleration Approach ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Our approach applies several design thinking principles to realistically apply ideas to the problem to formulate a solution that has the best in class innovative technologies. We have evolved several design techniques and engineering methods that provide human empathy engineered designs. For example, we have extended the User Journey Mapping to include Time and Motion study and visualize it, applied Dioramas to illustrate complex problems and the nuances, graphic novels to illustrate in simple ways the problem, ideas and solutions etc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Our approach detailed here is based on our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "UST Innovation Assurance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Method, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "UST Innovation Pod\u2122");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, ". We utilize an empathy first design approach, that combines human centric design with anthropologists throughout the innovation life cycle. We will customize this method to best fit the Innovation culture and our customers schedules and urgencies to develop an adapted approach to execution plan. The approach is detailed as follows: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " There are several sub-capabilities that we offer to accelerate innovation for our customers. This is dependent on where they are stuck or lack the capability to put into action. Many of the customers find themselves in a place where they must come up with innovative solutions to existing business to keep moving forward. The typical research & developments are plagued with inefficiencies, lack of accountability, cost overruns etc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "UST Innovation Assurance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " provides a methodical approach to this challenge and capabilities that have predictable outcomes. Here are a couple of areas where we it is different and unique that makes a world of difference. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " Through the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "UST Innovation Hub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Tel Aviv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, ", we are leveraging the deep relationships with Israel\u2019s startup and high-tech ecosystem through solid engagements with entrepreneurs, companies and VCs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " We have developed a network of 750+ startups and mature companies, all scale-ready and enterprise-relevant, from the fields of digital health, predictive retail and healthcare capabilities, IoT, testing and more. We have actively teamed with more than 20 mature companies and have established numerous PoCs (Proof of concepts) and joint strategies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Starting with a better Problem Area map ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Some customers find it challenging to prioritize areas where problems exist and rank them, so that they can create a roadmap and execution plan to address them. We help in the problem area identification by compiling insights from research, markets, key differentiators, analysts\u2019 views, competition, macroeconomics, where the customer is at etc. This helps highlight what problems to focus efforts on from where the customer\u2019s business is placed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Narrowing the problem areas help focus on which are the areas with problems that would be of greater value to the business. We have a comprehensive forensics model that identifies what are the key problems that are prioritized and ranked based on Business Value and Technology capability. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " Understanding problem nuances through unique problem discovery techniques ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " We start with our Problem discovery methodology to deeply understand the probem and refine the problem definition with high fidelity. We use several empathy driven design tools to fully understand the the scope and friction points of a problem with Time and Motion Studies and produce graphic novels, journey maps, empathy maps, and dioramas the problem in greater details. These diverse set of outputs help us to visualize complex processes and understand the end user challenges including what they are trying to achieve, their motivations, emotions and friction points. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " Taking an Empathy-First design approach, we developed a unique technique of telling the observed problem via a graphic novel. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "UST Graphic Novel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " consists of the comic-style frames relaying the story conveying emotion effectively. We have a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "UST Limbic Index");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " created to illustrate the emotion index. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " We create dioramas to illustrate complex multi-dimensional problems. This is a unique capability that we have build in UST is to supplement the journey map. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "UST Dioramas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " helps in identifying the various journeys involved, the key friction points all together, in a manner to understand the problem and the nuances. The visual nomenclature of the diorama uses universal iconography to ensure that the focus is the pathways of flow and activities incolved and most important the people who are participating and interacting. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " Setting up nimble teams by organizing them into ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Squads");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, ", provide us with the best acceleration with highly focused members, who execute to near perfection. These members are organized into self organizing teams and leverage the best frameworks, platforms and ecosystems with partners & startups. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, " The organization of the teams into ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Agile Platoons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, " help us to deploy into initiatives based on the expertise required to turn the innovation and quickly build the product or solution. This organization is highly effective and has delivered across 100+ projects, where we have ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " We create the business case as we are conceptualizing the solution and have a understanding of the problem. We have developed a creative way to develop the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Lean Business Model Canvas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " and a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Value Stream Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, ". These artifacts are living canvases and reflect the segments that are key to justify the value of the solution, the problem that it is solving for, the costs involved, durable advantage and the unique value proposition. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " Rally the innovators in an Ideathon and generate problem solving ideas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " We have developed techniques to really get to the problem and the run an ideation campaign to help solve the problem, that we call the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "UST Ideathon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, ". Once the problem is clearly defined, we run an ideathon to generate ideas which are used to conceptualize the solution. Ideathons are cross functional, collaborative ideation sessions where we can invite both interal and external sources to submit ideas. Typically, there are 50-80 viable ideas generated from these ideation campaigns that can be tested and implemented. This is done in 2-3 weeks; this extraordinary feat provides a great acceleration advantage. We select ideas to run experiments based on strategic levers to identify top ideas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " We have created a digital platform to manage ideas, collaborate with innovators to firm up on ideas to solve the problem. The innovators posing ideas are able to articulate it succinctly in a format that is understable and executable by the technologists as well as the business. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " Our selection of ideas for experiment across a various types of Ideathons have helped in understanding a pattern. This is represented in a band of ideas that appears on an ideation map, we call that the \u2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Goldilocks Zone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "\u2019. These ideas were found to be the most acceptable group of ideas for an MVC. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " We have a digital portal that virtualizes the innovation acceleration via a comprehensive tool, UST Waggle, this provides our customers, associates and partners to collaborate on innovation led solutions. We allow the ideation to experimentation and then to be packaged into a solution to be deployed into an initial operational release to a ongoing business release managed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "UST Waggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " and scaled with optimized DevOps practices. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " Experimentation and Conceptualizing the Solution into a Minimum Viable Concept ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, " We utilize an agile approach to experimentation. This allows us to quickly validate ideas and conceptualize the solution into a Concept Prototype (we call it the Minimum Viable Concept \u2013 MVC). We create prototypes using design tools like InVision to visualize the look and feel of the end product. We conduct usability testing to get feedback on features and functions to improve and refine the MVC. Our cross functional teams work together to develop the solution together as part of our agile approach to development. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " The ideas that we compile into logical sets and groups are prioritized and ranked. Through the earlier step of ideation, the ideas to solve the problem completely. A map of the ideas against the friction points to articulate the idea, the context and resolution. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, " This method has been finetuned to harvest the best idea and run experiments on the ones that make the most business sense. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, " We are able to determine the scenarios with data-driven insights to provide us objective parameters to incorporate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " We are able to articulate the flow through a Diorama, amongst other visualizations to illustrate the how we have addressed the friction points. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " We are able to show how the new landscape looks like. The visualization also take the form of a clickable prototype, an illustrative functional component and others to ensure that the idea resolves the problem at a whole or partially. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, " Concept validated by business in 3 weeks with a Minimum Viable Concept (MVC) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " We provide a great acceleration of ideas to experiments in a variety of ways. The first step to converting ideas to concepts in the form of paper prototypes, digital dioramas, stop-motion animations, immersive reality illustrations, graphic novels, storyboards, digital screen prototypes to name a few. This helps contextualize the solution from the various ideas. We create a business canvas to ensure that the concept is truly viable with clear understanding of the durable advantage, the unique value proposition, partners, customer segments, costs and most importantly how revenues look. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](191, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " From Concept Prototype to Product ready for Release in 5 weeks! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, " After the Concept Prototype is built and approved, we will develop a meaningful Product Prototype (we call it the Minimal Viable Product \u2013 MVP). We develop user stories based on the desired features and functions to development using agile sprints. Our focus is on providing demo-able functionality each sprint showcasing incremental features. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](200, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, " We create a visual execution plan of the various tasks and sub-streams of work that we need to perform. This helps the teams organize themselves and work with our innovation squads. The self organizing squads with grouping of tasks for sprints makes it possible to achieve the goals. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " A concept that we created for managing ultra-perishable items in a controlled environment throuh the coldchain. We developed this solution and competed in an IoT Hackathon in Chicago, where we won at the Hackathon for leveraging AI on the edge with cutting edge hardware and software frameworks. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, " Rapid solution with a Product into consumers hands via Minimum Viable Product (MVP) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, " The path to creating the product prototype with some of the innovative business models and specific innovative technologies are available through the UST ecosystem, where we leverage UST Product & Platforms, Partner & Startup Products & Platforms as well as work with Academia in specific areas to build that advantage. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " We can leverage our innovation labs and innovation garages to develop software and hardware prototypes within our labs around the world. Solutions are built on a variety of technology stacks and leverage IoT, AR/MR/VR, Blockchain, Quantum Compute, Analytics, Machine Learning, Edge Compute to name a few. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, " Highlight: Here is an example of a MVP in the manufacturing space during drug manufacturing, our focus was on Optimizing the cleaning and documentation process during Continuous Drug Manufacturing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, " Challenge: Cleaning process after drug manufacturing run ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](221, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, " The drug manufacturing process for large pharmaceutical Research and Development (R&D) group has a series of steps that must be followed to produce the drug product. The process requires the drug manufacturing team to document each step once it is completed per cGMP regulations. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, " This is a manual process where the drug manufacturing engineer and technicians need to follow the check list and signoff after every step. This is a time-consuming process and takes almost 8-10 hours per batch run. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, " During this process, the drug manufacturing team must account for all the parts that goes into the apparatus used to manufacture the drugs. The cleaning process once a drug is produced, takes around 3 to 4 days. The most time that is consumed is in the cleaning of the stainless-steel hopper, feeders, sieves, blenders etc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, " The problem that needs to be addressed is improvement in the efficiency of identification, tracking and documentation of parts during the equipment assembly and detailed cleaning phases of the manufacturing process. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, " The organization is looking to bring efficiencies and optimizing this process while being compliant to the cGMP regulations. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, " What we did? An innovative solution using Vision & RFID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, " We developed a combination of solutions with multiple experiments to solve the problem with RFID Tags on Stainless Steel Metal \u2013 Given RFID tags can withstand extreme conditions; the experiment placed RFID tags on the various equipment parts. The data from the reader was pushed to a backend system that was used to create a digital trace of all parts. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, " Applied Computer Vision to identify equipment parts after disassembly, we could track the components during each stage of the cleaning process. The experiment required building of the hardware and a machine learning based image processing part. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, " Complemented the radio identification with vision to create near 100% accuracy. Built a robust vision training of parts and creating identification and tracking models. We extended this to identify residue, active pharma ingredients by illuminating it with light from invisible spectrum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, " Picking Solution for Retailer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, " Another example of how we scaled to develop a solution to improve the picking proces at a retail store. The intent was to provide a comprehensive analytical view of the behavior of a consumer, a store associate and vendor/supplier perfroming their chores, duties and tasks during a normal day. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](247, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](248, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, " An example of MVP we built was on a Retail solution, with the ability to detect several actions performed by the customer when they are in a store navigating through the aisles. Our solution is trained on standard actions, such as (1) pushing the cart / walking in the aisles (2) Picking items from store shelves (3) placing the item in the cart/ walking with the item (4) Dwell time in the a specific location. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, " Acceleration with Innovation Lab and Garages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, " Leveraging our labs and garages, clients can accelerate the development of pilot products and experiment them with minimum setup time and much lowered costs. We have several software and hardware stacks that are available that can help in the acceleration. Our teams have minimized ramp up and take on an experiment for building a prototype and accelerate pilot development in weeks. We have done 1000+ prototypes and pilots in various areas of Retail, Healthcare, Manufacturing, Financial Technologies, High Tech and new areas in Semiconductor, Pharma and Life sciences. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](257, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](258, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "Innovation at Scale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, " We are able to scale the MVP into a full featured release. This is done once the MVP goes through the validation process with \u2018Friends & Family\u2019. The metrics from the MVP is evaluated, and evaluated if it met the success goals. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, " Since the MVP is built on industrial strength platforms, products and frameworks using extensive ecosystem, we scale it to high performance needs, with minimal effort. Some of the examples of Innovation at scale are described below: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, " For Walmart, within the logistics group, the problem surfaced as existing processes required to identify carrier for tendering of loads from distribution centers to stores were inefficient. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, " We could solve this problem through intelligent algorithms, enhanced carrier tendering and timely insights that improved the business efficiency by increasing productivity of their carriers. Avoided potential overstocks due to load management delays. Estimated $3 million in direct cost savings annually. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](272, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](274, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, " For a home mortgage company, the problem identified was the declining sales of home sales and the rise of foreclosures put the Realtors in a difficult position that lowered conversion. The Realtors could not keep up with the savvy buyers and were not able to keep up with options buyers were interested in. We conceptualized a product that engaged Realtor and Buyers of homes in a meaningful and productive manner that helped drive efficiencies in collaboration that would increase conversion to mortgages. The digital solution created improved how home options are shared while they buyer is in the market for a purchasing a home. The estimated increase in revenue with this is projected to be $275 million annually. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, " For an electronics equipment\u2019s manufacturer, the problem initially stated was the lack of location data that could help field technicians be effective find the equipment to fix/service. With our problem discovery, distillation, definition process we could develop an innovative concept that could result in an estimated 10% to 20% efficacy in technical service maintenance, which is an annualized $15 million direct cost savings. Additionally, through the problem sensing process, we could identify the problem behind the symptom, which was attributed to access to entitlements that would make the technician productive. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " Highlight: The ability to scale innovation is key. One such innovation is what we built for Virgin Racing to build their one-of-a-kind Race Management System that they were building for their Formula 1 race car. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, " Challenge: To build a new software system of Formula F1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, " Virgin was entering into the Formula 1 with Marussia Virgin Racing and needed partners to build a team with the best in software required to manage end-to-end race management, over and above the Formula F1 race car itself ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, " Due to the time constraints, they needed to build a comprehensive Race Management System to fit the need of a completely reimagined F1 car that Marussia Virgin Racing was envisioning ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, " Marussia Virgin Racing was looking to bring in various types of data to analyze the performance during a race with a Race Management System, that needed to analyze the F1 car performance, the track data, the GPS data, including various video feeds to correlate data events to visual events. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, " The data needed to be analyzed at high speed to provide detailed analytical information to the Pit Crew, such that, they can calibrate during a race and provide important information to the driver to help him make the rights adjustments. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, " What we built? A race-ready scalable solution in weeks. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](297, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "ul", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, " UST built a Race Management System that ingested data from over a thousand sensors, from the F1 car and the racetrack. This also included the data from video feeds from various cameras that were monitoring the race, weather conditions before and during the race, the GPS data etc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, " UST created views for the Pit Crew to analyze with correlated events that was made available to the pit crew during a race. The data that was captured was also archived for replay so that the tuning crew and engineering can review to improve the performance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "ul", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, " A comprehensive analysis of disparate data streams provided actionable insights to the Pit Crew, such that they could make split second decisions as well as intelligence that are helpful in an intensely competitive race ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, " Additionally, there were several supporting applications that were built for Marussia Virgin Racing to support various software functions that included spare parts ordering, Pit Crew scheduling amongst other functions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](309, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, " Why is this important for our customers? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, " For our customers, we are focusing on the problem and not the symptom of the problem. We can determine what the underlying issues is and how we can bring ideas that solve the nuanced problem. The solution generated aligns with the business of the client and enhances the ecosystem. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, " For our partners, we work in a symbiotic manner, where we understand the problem together, look at how we can apply our partner\u2019s products, platforms and expertise in a complemented manner, such that we are building the best possible solution for our client. In this manner, the client know that we are bring best partner option and for the partner they know that together with UST, the best chance of success. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, " Our innovation service brings the best of capabilities from a global innovation ecosystem to focus on the business problems. We do not focus just on the technological innovations we can bring to the solution, but we also look at the business model, new revenues to bring distinct advantage from a business perspective. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, " And why we make a good partner? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, " Our end-to-end innovation model through ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Innovation Assurance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, " that gets to predictable outcomes \u2013 problem discovery to product release ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "Empathy-First");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, " design methodology with techniques that we bring to solving understanding nuanced human dilemmas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, " Problem solving campaigns with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "Ideathons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, ", that help curate the ideas, expand and experiment. The unique ability to rate in cohorts help focus on the value of ideas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, " A focus on driving the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "Meritocracy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, " in the team with the diversity across multiple segments \u2013 social, gender, business, technological, regional backgrounds ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "Platform-led Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, " to improve the quality of our customer\u2019s solution and expand on the features across markets ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, " Running ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "Experiments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, " of selected ideas to determine the options to take forward, validate them and determine the viability on the technology stack ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, " Accelerate innovation leveraging ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "UST Innovation Labs and Garages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, " with the best of Academia, Partners & Startups around the world ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, " Not just run ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, "Hackathons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, ", but create new components in software and hardware, leveraging guidelines that are designed for humans ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, " Access to worldwide ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "Innovation Ecosystems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, " to complement our customer\u2019s initiatives and co-create solutions and build intellectual property ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, " Applying orthogonal thinking into creating ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "New Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, " for our customers from other areas \u2013 Healthcare, Retail, Life Sciences, Banking, Insurance, High-tech etc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, " A digital portal, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "UST Waggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, " to to guide customers through the problem solving journey, while bringing innovators, problem solvers, polymaths, anthropologists, designers, full stack developers and engineering ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, "We are Unique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, " Our offering is to provide a truly end-to-end innovation assurance for our customers. Almost all our competition has one component or more missing from the innovation process \u2013 be it the strategy, problem solving, ideation, prototyping, experimentation, engineering, scale up or sustenance. We are unique in that respect, we have it all that is well strung together at a cost point that not only makes business and technology sense but also economic sense. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, " With our innovation labs and garages, where no matter the type of solution being built \u2013 whether it is software or hardware, provide our customers with distinct and undeniable advantage of bringing a solution or product to market. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, " With the number of techniques and methods described the the above sections, UST has extended the real-world problem solving with empathy into digital solutions. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](386, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["@font-face {\n  font-family: \"Fort\";\n  src: url(/assets/fonts/Fort-Book.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortExtraBold\";\n  src: url(/assets/fonts/Fort-Extrabold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortTT\";\n  src: url(/assets/fonts/FortTT-Book.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTBold\";\n  src: url(/assets/fonts/FortTT-Bold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTExtraBold\";\n  src: url(/assets/fonts/FortTT-Extrabold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTLight\";\n  src: url(/assets/fonts/FortTT-Light.ttf) format(\"truetype\");\n}\n.innovation-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n@media screen and (min-width: 1921px) {\n  .innovation-container[_ngcontent-%COMP%] {\n    padding: 0px 150px;\n  }\n}\n@media screen and (max-width: 1360px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%] {\n    margin-top: 75px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 525px);\n  position: relative;\n  overflow: hidden;\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n    height: calc(100vh - 365px);\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n    height: calc(100vh - 315px);\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 720px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n    height: calc(100vh - 325px);\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 600px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n    height: calc(105vh - 325px);\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 140px;\n  width: 403px;\n  height: 190px;\n  background-color: #0097ac;\n  z-index: 1;\n  padding: 40px 65px 20px 65px;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 136px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 102px;\n    width: 460px;\n    height: 130px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    left: 100px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    left: 100px;\n    width: 450px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 60px;\n    left: 80px;\n    width: 340px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 160px;\n    padding: 40px 0px 40px 30px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 140px;\n    left: 80px;\n    width: 400px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 800px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 75px;\n    left: 80px;\n    width: 325px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 720px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 35px;\n    padding: 30px 30px 40px 40px !important;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 600px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 20px;\n    height: 50px;\n    padding: 25px 30px 20px 40px;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 105px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 75px;\n    padding: 25px 0px 20px 20px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n  font-family: \"Fort\", sans-serif;\n  font-size: 30px;\n  color: #fff;\n  margin-bottom: 15px;\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 25px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 27px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 720px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 22px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 600px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 14px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n  padding: 0px 150px;\n  font-family: \"Fort\", sans-serif;\n  font-size: 18px;\n  margin-top: 50px;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 800px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 10px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 9px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 18px;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 800px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 10px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 9px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 18px;\n  text-decoration: underline;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 800px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 10px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 9px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  background-color: #f2f7f8;\n  padding: 10px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .maxWidth[_ngcontent-%COMP%] {\n  width: 48%;\n  margin: 1%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0;\n  margin-right: 40px;\n  width: 48%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .single-image[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .single-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-intro[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-bottom: 30px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-intro[_ngcontent-%COMP%]   .innovation-intro-title[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 20px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-title[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 40px;\n  color: #27757c;\n  margin-top: 50px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-subtitle[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 30px;\n  margin-top: 50px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-multiple-images[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 60px 20px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-multiple-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-multiple-images.three[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 33%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  align-items: center;\n  justify-content: center;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1200px;\n}\n@media screen and (max-width: 1920px) and (max-height: 1080px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 200px;\n  }\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 200px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   #hexagon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 66.735px;\n  background: black;\n  position: relative;\n  transform: rotate(90deg);\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   #hexagon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -28.8675px;\n  left: 0;\n  width: 0;\n  height: 0;\n  border-left: 50px solid transparent;\n  border-right: 50px solid transparent;\n  border-bottom: 28.8675px solid black;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   #hexagon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -28.8675px;\n  left: 0;\n  width: 0;\n  height: 0;\n  border-left: 50px solid transparent;\n  border-right: 50px solid transparent;\n  border-top: 28.8675px solid black;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa1[_ngcontent-%COMP%] {\n  position: relative;\n  left: -1138px;\n  opacity: 0;\n  top: -7px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa2[_ngcontent-%COMP%] {\n  position: relative;\n  left: -1082px;\n  opacity: 0;\n  top: -96px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa3[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1182px;\n  top: 78px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa4[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1124px;\n  top: -182px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa5[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1224px;\n  top: -7px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa6[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1324px;\n  top: 300px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa7[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1268px;\n  top: -94px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa8[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1368px;\n  top: 80px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa9[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1312px;\n  top: -182px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa10[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1412px;\n  top: -6px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa11[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1512px;\n  top: 164px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa12[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1452px;\n  top: -94px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa13[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1556px;\n  top: 80px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa14[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1494px;\n  top: -8px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ub3ZhdGlvbi1hc3N1cmFuY2UvQzpcXFVzZXJzXFx5cmFvXFxPbmVEcml2ZSAtIE1lcmF0aXZlXFxEZXNrdG9wXFx1c3QgY29ob3J0IGJ1aWxkZXJcXGhlYWx0aGNhcmVcXEhlYWx0aENhcmVBbmFseXRpY3MtMjAtMDUtMjAyMi1tYWluXFxteS1hcHAvc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2lubm92YXRpb24tYXNzdXJhbmNlL2lubm92YXRpb24tYXNzdXJhbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbm5vdmF0aW9uLWFzc3VyYW5jZS9DOlxcVXNlcnNcXHlyYW9cXE9uZURyaXZlIC0gTWVyYXRpdmVcXERlc2t0b3BcXHVzdCBjb2hvcnQgYnVpbGRlclxcaGVhbHRoY2FyZVxcSGVhbHRoQ2FyZUFuYWx5dGljcy0yMC0wNS0yMDIyLW1haW5cXG15LWFwcC9zcmNcXGFwcFxcaW5ub3ZhdGlvbi1hc3N1cmFuY2VcXGlubm92YXRpb24tYXNzdXJhbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbm5vdmF0aW9uLWFzc3VyYW5jZS9DOlxcVXNlcnNcXHlyYW9cXE9uZURyaXZlIC0gTWVyYXRpdmVcXERlc2t0b3BcXHVzdCBjb2hvcnQgYnVpbGRlclxcaGVhbHRoY2FyZVxcSGVhbHRoQ2FyZUFuYWx5dGljcy0yMC0wNS0yMDIyLW1haW5cXG15LWFwcC9zcmNcXHNhc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esd0RBQUE7QUNDRjtBRENBO0VBQ0UsNEJBQUE7RUFDQSw2REFBQTtBQ0NGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLDBEQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0EsMERBQUE7QUNDRjtBRENBO0VBQ0UsOEJBQUE7RUFDQSwrREFBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDJEQUFBO0FDQ0Y7QUN0QkE7RUFDRSxnQkFBQTtFQ01JLHlCREwyQjtFQ0szQixzQkRMMkI7RUNLM0Isb0JETDJCO0VDRzNCLGlCREgyQjtBRDRCakM7QUMzQkU7RUFIRjtJQUlJLGtCQUFBO0VEOEJGO0FBQ0Y7QUMzQkk7RUFGRjtJQUdJLGdCQUFBO0VEOEJKO0FBQ0Y7QUM3Qkk7RUFMRjtJQU1JLGdCQUFBO0VEZ0NKO0FBQ0Y7QUMvQkk7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEaUNOO0FDaENNO0VBTEY7SUFNSSwyQkFBQTtFRG1DTjtBQUNGO0FDbENNO0VBUkY7SUFTSSwyQkFBQTtFRHFDTjtBQUNGO0FDcENNO0VBWEY7SUFZSSwyQkFBQTtFRHVDTjtBQUNGO0FDdENNO0VBZEY7SUFlSSwyQkFBQTtFRHlDTjtBQUNGO0FDeENNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FEMENSO0FDeENNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJGbEJVO0VFbUJWLFVBQUE7RUFDQSw0QkFBQTtBRDBDUjtBQ3pDUTtFQVRGO0lBVUksVUFBQTtFRDRDUjtBQUNGO0FDM0NRO0VBWkY7SUFhSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUQ4Q1I7QUFDRjtBQzdDUTtFQWpCRjtJQWtCSSxXQUFBO0VEZ0RSO0FBQ0Y7QUMvQ1E7RUFwQkY7SUFxQkksV0FBQTtJQUNBLFlBQUE7RURrRFI7QUFDRjtBQ2pEUTtFQXhCRjtJQXlCSSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RURvRFI7QUFDRjtBQ25EUTtFQTdCRjtJQThCSSxVQUFBO0lBQ0EsMkJBQUE7RURzRFI7QUFDRjtBQ3JEUTtFQWpDRjtJQWtDSSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUR3RFI7QUFDRjtBQ3ZEUTtFQXRDRjtJQXVDSSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUQwRFI7QUFDRjtBQ3pEUTtFQTNDRjtJQTRDSSxTQUFBO0VENERSO0FBQ0Y7QUMzRFE7RUE5Q0Y7SUErQ0ksU0FBQTtJQUNBLHVDQUFBO0VEOERSO0FBQ0Y7QUM3RFE7RUFsREY7SUFtREksU0FBQTtJQUNBLFlBQUE7SUFDQSw0QkFBQTtFRGdFUjtBQUNGO0FDL0RRO0VBdkRGO0lBd0RJLFVBQUE7RURrRVI7QUFDRjtBQ2pFUTtFQTFERjtJQTJESSxTQUFBO0lBQ0EsMkJBQUE7RURvRVI7QUFDRjtBQ25FUTtFQ2xGTiwrQkgyQmE7RUcxQmIsZUFBQTtFRG1GUSxXQUFBO0VBQ0EsbUJBQUE7QURzRVY7QUNyRVU7RUFKRjtJQ2xGTiwrQkgyQmE7SUcxQmIsZUFBQTtFRitKQTtBQUNGO0FDeEVVO0VBUEY7SUNsRk4sK0JIMkJhO0lHMUJiLGVBQUE7RUZxS0E7QUFDRjtBQzNFVTtFQVZGO0lDbEZOLCtCSDJCYTtJRzFCYixlQUFBO0VGMktBO0FBQ0Y7QUM5RVU7RUFiRjtJQ2xGTiwrQkgyQmE7SUcxQmIsZUFBQTtFRmlMQTtBQUNGO0FDakZVO0VBaEJGO0lDbEZOLCtCSDJCYTtJRzFCYixlQUFBO0VGdUxBO0FBQ0Y7QUNwRlU7RUFuQkY7SUNsRk4sK0JIMkJhO0lHMUJiLGVBQUE7RUY2TEE7QUFDRjtBQ3BGUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FEc0ZWO0FDakZFO0VBQ0Usa0JBQUE7RUNySEYsK0JIMkJhO0VHMUJiLGVBQUE7RURpSkUsZ0JBQUE7QUR5REo7QUNwRkk7RUFIRjtJQ3BIQSwrQkgyQmE7SUcxQmIsZUFBQTtFRitNQTtBQUNGO0FDdkZJO0VBTkY7SUNwSEEsK0JIMkJhO0lHMUJiLGVBQUE7RUZxTkE7QUFDRjtBQzFGSTtFQVRGO0lDcEhBLCtCSDJCYTtJRzFCYixlQUFBO0VGMk5BO0FBQ0Y7QUM3Rkk7RUFaRjtJQ3BIQSwrQkgyQmE7SUcxQmIsZUFBQTtFRmlPQTtBQUNGO0FDaEdJO0VBZkY7SUNwSEEsK0JIMkJhO0lHMUJiLGVBQUE7RUZ1T0E7QUFDRjtBQ25HSTtFQWxCRjtJQ3BIQSwrQkgyQmE7SUcxQmIsZUFBQTtFRjZPQTtBQUNGO0FDdEdJO0VBckJGO0lDcEhBLCtCSDJCYTtJRzFCYixlQUFBO0VGbVBBO0FBQ0Y7QUN6R0k7RUF4QkY7SUNwSEEsK0JIMkJhO0lHMUJiLGVBQUE7RUZ5UEE7QUFDRjtBQzVHSTtFQTNCRjtJQ3BIQSwrQkgyQmE7SUcxQmIsY0FBQTtFRitQQTtBQUNGO0FDOUdJO0VBQ0UsZUFBQTtBRGdITjtBQzlHSTtFQ2pKRix3Q0h1QnVCO0VHdEJ2QixlQUFBO0FGa1FGO0FDaEhNO0VBRkY7SUNqSkYsd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRnVRQTtBQUNGO0FDbkhNO0VBTEY7SUNqSkYsd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRjZRQTtBQUNGO0FDdEhNO0VBUkY7SUNqSkYsd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRm1SQTtBQUNGO0FDekhNO0VBWEY7SUNqSkYsd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRnlSQTtBQUNGO0FDNUhNO0VBZEY7SUNqSkYsd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRitSQTtBQUNGO0FDL0hNO0VBakJGO0lDakpGLHdDSHVCdUI7SUd0QnZCLGVBQUE7RUZxU0E7QUFDRjtBQ2xJTTtFQXBCRjtJQ2pKRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGMlNBO0FBQ0Y7QUNySU07RUF2QkY7SUNqSkYsd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRmlUQTtBQUNGO0FDeElNO0VBMUJGO0lDakpGLHdDSHVCdUI7SUd0QnZCLGNBQUE7RUZ1VEE7QUFDRjtBQzFJSTtFQy9LRix3Q0h1QnVCO0VHdEJ2QixlQUFBO0VEMk1JLDBCQUFBO0FEa0hOO0FDN0lNO0VBRkY7SUMvS0Ysd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRmtVQTtBQUNGO0FDaEpNO0VBTEY7SUMvS0Ysd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRndVQTtBQUNGO0FDbkpNO0VBUkY7SUMvS0Ysd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRjhVQTtBQUNGO0FDdEpNO0VBWEY7SUMvS0Ysd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRm9WQTtBQUNGO0FDekpNO0VBZEY7SUMvS0Ysd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRjBWQTtBQUNGO0FDNUpNO0VBakJGO0lDL0tGLHdDSHVCdUI7SUd0QnZCLGVBQUE7RUZnV0E7QUFDRjtBQy9KTTtFQXBCRjtJQy9LRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGc1dBO0FBQ0Y7QUNsS007RUF2QkY7SUMvS0Ysd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRjRXQTtBQUNGO0FDcktNO0VBMUJGO0lDL0tGLHdDSHVCdUI7SUd0QnZCLGNBQUE7RUZrWEE7QUFDRjtBQ3RLSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRHdLTjtBQ3RLSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRHdLTjtBQ3RLSTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FEd0tOO0FDdEtJO0VBQ0UsbUJBQUE7QUR3S047QUN0S0k7RUFDRSxnQkFBQTtBRHdLTjtBQ3RLSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEd0tOO0FDdEtJO0VBQ0Usa0JBQUE7QUR3S047QUN2S007RUFDRSxXQUFBO0FEeUtSO0FDdEtJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRHdLTjtBQ3ZLTTtFQy9PSix3Q0h1QnVCO0VHdEJ2QixlQUFBO0FGeVpGO0FDdktJO0VBQ0UsZ0JBQUE7QUR5S047QUN4S007RUNyUEosd0NIdUJ1QjtFR3RCdkIsZUFBQTtFRHNQTSxjRnRQUTtFRXVQUixnQkFBQTtBRDJLUjtBQ3pLTTtFQzFQSix3Q0h1QnVCO0VHdEJ2QixlQUFBO0VEMlBNLGdCQUFBO0FENEtSO0FDMUtNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBRDRLUjtBQzNLUTtFQUNFLFVBQUE7QUQ2S1Y7QUMxS1U7RUFDRSxVQUFBO0FENEtaO0FDdktJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEeUtOO0FDdktNO0VBQ0UsYUFBQTtBRHlLUjtBQ3hLUTtFQUZGO0lBR0ksa0JBQUE7RUQyS1I7QUFDRjtBQzFLUTtFQUxGO0lBTUksa0JBQUE7RUQ2S1I7QUFDRjtBQzVLUTtFQVJGO0lBU0ssaUJBQUE7RUQrS1Q7QUFDRjtBQzlLUztFQVhIO0lBWUssaUJBQUE7RURpTFQ7QUFDRjtBQzlLTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGdMUjtBQzlLTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7QURnTFI7QUM5S007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBRGdMUjtBQzdLTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRCtLUjtBQzVLTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRDhLUjtBQzNLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRDZLUjtBQzFLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRDRLUjtBQ3pLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRDJLUjtBQ3hLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRDBLUjtBQ3ZLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRHlLUjtBQ3RLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRHdLUjtBQ3JLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRHVLUjtBQ3BLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRHNLUjtBQ25LTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRHFLUjtBQ2xLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRG9LUjtBQ2pLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRG1LUjtBQ2hLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRGtLUiIsImZpbGUiOiJzcmMvYXBwL2lubm92YXRpb24tYXNzdXJhbmNlL2lubm92YXRpb24tYXNzdXJhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydC1Cb29rLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydEV4dHJhQm9sZCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydC1FeHRyYWJvbGQub3RmKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb3J0VFQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1Cb29rLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydFRUQm9sZCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb3J0VFRFeHRyYUJvbGQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1FeHRyYWJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb3J0VFRMaWdodCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUxpZ2h0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4kcHJpbWFyeS1jb2xvcjogIzI3NzU3YztcbiRwcmltYXJ5LXF1aXotYmc6ICNmMmY3Zjg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDA5N2FjO1xuJHJpZ2h0LWZsb2F0aW5nLWJnOiAjMDA2ZTc0O1xuXG4kc3BlY2lhbC1jb2xvci0xOiAjNjY1ZmQxO1xuJHNwZWNpYWwtY29sb3ItMjogIzU3NGI5MDtcbiRzcGVjaWFsLWNvbG9yLTM6ICMzOGFkYTk7XG4kc3BlY2lhbC1jb2xvci00OiAjYTU1ZWVhO1xuJHNwZWNpYWwtY29sb3ItNTogI2Q1NTU1ODtcbiRzcGVjaWFsLWNvbG9yLTY6ICNkNmEwNWI7XG4kc3BlY2lhbC1jb2xvci03OiAjYTQ2NzBiO1xuJHNwZWNpYWwtY29sb3ItODogIzQ3N2U4MDtcbiRzcGVjaWFsLWNvbG9yLTk6ICNmYzgyNGE7XG4kc3BlY2lhbC1jb2xvci0xMDogI2ZmMWUwMDtcbiRzcGVjaWFsLWNvbG9yLTExOiAjMDBhZWZmO1xuJHNwZWNpYWwtY29sb3ItMTI6ICMzMjRlN2I7XG4kc3BlY2lhbC1jb2xvci0xMzogI2M5NGU0ZTtcbiRzcGVjaWFsLWNvbG9yLTE0OiAjMDFiZWZmO1xuJHNwZWNpYWwtY29sb3ItMTU6ICM2MDYwNjA7XG5cbiRwcmltYXJ5LWZvbnQ6ICdGb3J0Jywgc2Fucy1zZXJpZjtcbiRwcmltYXJ5LWZvbnQtZXh0cmFib2xkOiAnRm9ydEV4dHJhQm9sZCcsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQ6ICdGb3J0VFQnLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250LWxpZ2h0OiAnRm9ydFRUTGlnaHQnLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250LWJvbGQ6ICdGb3J0VFRCb2xkJywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udC1leHRyYWJvbGQ6ICdGb3J0VFRFeHRyYUJvbGQnLCBzYW5zLXNlcmlmO1xuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0LUJvb2sub3RmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydC1FeHRyYWJvbGQub3RmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0VFRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtQm9vay50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRUVEJvbGRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRUVEV4dHJhQm9sZFwiO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1FeHRyYWJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0VFRMaWdodFwiO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1MaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIxcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjBweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xuICB9XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUyNXB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM2NXB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMxNXB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDcyMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMyNXB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIge1xuICAgIGhlaWdodDogY2FsYygxMDV2aCAtIDMyNXB4KTtcbiAgfVxufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIC5pbm5vdmF0aW9uLWJhbm5lciAuaW5ub3ZhdGlvbi1iYW5uZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiAxNDBweDtcbiAgd2lkdGg6IDQwM3B4O1xuICBoZWlnaHQ6IDE5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5N2FjO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiA0MHB4IDY1cHggMjBweCA2NXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiB7XG4gICAgdG9wOiAxMzZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDEwMnB4O1xuICAgIHdpZHRoOiA0NjBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIC5pbm5vdmF0aW9uLWJhbm5lciAuaW5ub3ZhdGlvbi1iYW5uZXItZ3JlZW4ge1xuICAgIGxlZnQ6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiB7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgd2lkdGg6IDM0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDE2MHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMHB4IDQwcHggMzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDk2MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDE0MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIC5pbm5vdmF0aW9uLWJhbm5lciAuaW5ub3ZhdGlvbi1iYW5uZXItZ3JlZW4ge1xuICAgIHRvcDogNzVweDtcbiAgICBsZWZ0OiA4MHB4O1xuICAgIHdpZHRoOiAzMjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiB7XG4gICAgdG9wOiAzNXB4O1xuICAgIHBhZGRpbmc6IDMwcHggMzBweCA0MHB4IDQwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDI1cHggMzBweCAyMHB4IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiB7XG4gICAgdG9wOiAxMDVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDc1cHg7XG4gICAgcGFkZGluZzogMjVweCAwcHggMjBweCAyMHB4O1xuICB9XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiAuaW5ub3ZhdGlvbi1iYW5uZXItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIC5pbm5vdmF0aW9uLWJhbm5lciAuaW5ub3ZhdGlvbi1iYW5uZXItZ3JlZW4gLmlubm92YXRpb24tYmFubmVyLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIC5pbm5vdmF0aW9uLWJhbm5lci10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIC5pbm5vdmF0aW9uLWJhbm5lci10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiAuaW5ub3ZhdGlvbi1iYW5uZXItdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiAuaW5ub3ZhdGlvbi1iYW5uZXItdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiAuaW5ub3ZhdGlvbi1iYW5uZXItdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiB7XG4gIHBhZGRpbmc6IDBweCAxNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIGltZyB7XG4gIG1hcmdpbjogMHB4IDBweDtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiBzdHJvbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiBzdHJvbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiBzdHJvbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gc3Ryb25nIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gc3Ryb25nIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDk2MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuYm9sZC11bmRlcmxpbmUge1xuICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ib2xkLXVuZGVybGluZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ib2xkLXVuZGVybGluZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ib2xkLXVuZGVybGluZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuYm9sZC11bmRlcmxpbmUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuYm9sZC11bmRlcmxpbmUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmJvbGQtdW5kZXJsaW5lIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmJvbGQtdW5kZXJsaW5lIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmJvbGQtdW5kZXJsaW5lIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmJvbGQtdW5kZXJsaW5lIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmN2Y4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAubWF4V2lkdGgge1xuICB3aWR0aDogNDglO1xuICBtYXJnaW46IDElO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gcCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiBsaSB7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgd2lkdGg6IDQ4JTtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5zaW5nbGUtaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuc2luZ2xlLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24taW50cm8ge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24taW50cm8gLmlubm92YXRpb24taW50cm8tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5pbm5vdmF0aW9uLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24tc2VjdGlvbiAuaW5ub3ZhdGlvbi1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMjc3NTdjO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24tc2VjdGlvbiAuaW5ub3ZhdGlvbi1zZWN0aW9uLXN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuaW5ub3ZhdGlvbi1zZWN0aW9uIC5pbm5vdmF0aW9uLXNlY3Rpb24tbXVsdGlwbGUtaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogNjBweCAyMHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24tc2VjdGlvbiAuaW5ub3ZhdGlvbi1zZWN0aW9uLW11bHRpcGxlLWltYWdlcyBpbWcge1xuICB3aWR0aDogNDglO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24tc2VjdGlvbiAuaW5ub3ZhdGlvbi1zZWN0aW9uLW11bHRpcGxlLWltYWdlcy50aHJlZSBpbWcge1xuICB3aWR0aDogMzMlO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCBpbWcge1xuICB3aWR0aDogMTIwMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwODBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCAjaGV4YWdvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA2Ni43MzVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgI2hleGFnb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjguODY3NXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAyOC44Njc1cHggc29saWQgYmxhY2s7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCAjaGV4YWdvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTI4Ljg2NzVweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMjguODY3NXB4IHNvbGlkIGJsYWNrO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGExIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTEzOHB4O1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IC03cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTEwODJweDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAtOTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGEzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAwO1xuICBsZWZ0OiAtMTE4MnB4O1xuICB0b3A6IDc4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTExMjRweDtcbiAgdG9wOiAtMTgycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhNSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTEyMjRweDtcbiAgdG9wOiAtN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCAuaGV4YTYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIGxlZnQ6IC0xMzI0cHg7XG4gIHRvcDogMzAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhNyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTEyNjhweDtcbiAgdG9wOiAtOTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGE4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAwO1xuICBsZWZ0OiAtMTM2OHB4O1xuICB0b3A6IDgwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhOSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTEzMTJweDtcbiAgdG9wOiAtMTgycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhMTAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIGxlZnQ6IC0xNDEycHg7XG4gIHRvcDogLTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGExMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTE1MTJweDtcbiAgdG9wOiAxNjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGExMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTE0NTJweDtcbiAgdG9wOiAtOTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGExMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTE1NTZweDtcbiAgdG9wOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCAuaGV4YTE0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAwO1xuICBsZWZ0OiAtMTQ5NHB4O1xuICB0b3A6IC04cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zYXNzL21peGlucyc7XG4uaW5ub3ZhdGlvbi1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAaW5jbHVkZSBwcmVmaXgoJ3VzZXItc2VsZWN0Jywgbm9uZSk7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjFweCkge1xuICAgIHBhZGRpbmc6IDBweCAxNTBweDtcbiAgfVxuICAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciB7XG4gICAgLy8gbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiA3NXB4O1xuICAgIH1cbiAgICAuaW5ub3ZhdGlvbi1iYW5uZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MjVweCk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM2NXB4KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMTVweCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNzIwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzI1cHgpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDV2aCAtIDMyNXB4KTtcbiAgICAgIH1cbiAgICAgIC5pbm5vdmF0aW9uLWJhbm5lci1vdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE1MHB4O1xuICAgICAgICBsZWZ0OiAxNDBweDtcbiAgICAgICAgd2lkdGg6IDQwM3B4O1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDY1cHggMjBweCA2NXB4O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICAgICAgdG9wOiAxMzZweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgICB0b3A6IDEwMnB4O1xuICAgICAgICAgIHdpZHRoOiA0NjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAgICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgICBsZWZ0OiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgICAgd2lkdGg6IDM0MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgICAgICAgICB0b3A6IDE2MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDQwcHggMHB4IDQwcHggMzBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcbiAgICAgICAgICB0b3A6IDE0MHB4O1xuICAgICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAgICAgICAgIHRvcDogNzVweDtcbiAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICAgIHdpZHRoOiAzMjVweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDcyMHB4KSB7XG4gICAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCA0MHB4IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIHtcbiAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMzBweCAyMHB4IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MnB4KSBhbmQgKG1heC1oZWlnaHQ6IDg2NHB4KSB7XG4gICAgICAgICAgdG9wOiAxMDVweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgICB0b3A6IDc1cHg7XG4gICAgICAgICAgcGFkZGluZzogMjVweCAwcHggMjBweCAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbm5vdmF0aW9uLWJhbm5lci10aXRsZSB7XG4gICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygzMCk7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDI4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDI3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygyNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xuICAgICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygyMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xuICAgICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxNCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaW5ub3ZhdGlvbi1iYW5uZXItaW1hZ2Uge1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmlubm92YXRpb24tbWFpbiB7XG4gICAgcGFkZGluZzogMHB4IDE1MHB4O1xuICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTgpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTcpO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTYpO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTUpO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDE0KTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDEzKTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxMik7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA5NjBweCkge1xuICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxMSk7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxMCk7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcyg5KTtcbiAgICB9XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBpbWcge1xuICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgIH1cbiAgICBzdHJvbmcge1xuICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTgpO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxNyk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTYpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDE1KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTQpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDEzKTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTIpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDk2MHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDExKTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxMCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoOSk7XG4gICAgICB9XG4gICAgfVxuICAgIC5ib2xkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxOCk7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDE3KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxNik7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTUpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxNCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTMpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxMik7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTEpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDEwKTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcyg5KTtcbiAgICAgIH1cbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY3Zjg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAuZC1mbGV4IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAubWF4V2lkdGgge1xuICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgIG1hcmdpbjogMSU7XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgbGkge1xuICAgICAgbWFyZ2luOiAzMHB4IDBweDtcbiAgICB9XG4gICAgLmZsb2F0LWxlZnQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDglO1xuICAgIH1cbiAgICAuc2luZ2xlLWltYWdlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAuaW5ub3ZhdGlvbi1pbnRybyB7XG4gICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIC5pbm5vdmF0aW9uLWludHJvLXRpdGxlIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMjApO1xuICAgICAgfVxuICAgIH1cbiAgICAuaW5ub3ZhdGlvbi1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAuaW5ub3ZhdGlvbi1zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoNDApO1xuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICB9XG4gICAgICAuaW5ub3ZhdGlvbi1zZWN0aW9uLXN1YnRpdGxlIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMzApO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuICAgICAgLmlubm92YXRpb24tc2VjdGlvbi1tdWx0aXBsZS1pbWFnZXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgbWFyZ2luOiA2MHB4IDIwcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgfVxuICAgICAgICAmLnRocmVlIHtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmdyaWR7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogMTIwMHB4O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LWhlaWdodDogMTA4MHB4KSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgI2hleGFnb24ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogNjYuNzM1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxuICAgICAgfVxuICAgICAgI2hleGFnb246OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMjguODY3NXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAyOC44Njc1cHggc29saWQgYmxhY2s7XG4gICAgICB9XG4gICAgICAjaGV4YWdvbjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTI4Ljg2NzVweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXRvcDogMjguODY3NXB4IHNvbGlkIGJsYWNrO1xuICAgICAgfVxuXG4gICAgICAuaGV4YTF7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogLTExMzhweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiAtN3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhMntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAtMTA4MnB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0b3A6IC05NnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhM3tcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBsZWZ0OiAtMTE4MnB4O1xuICAgICAgICB0b3A6IDc4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhleGE0e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IC0xMTI0cHg7XG4gICAgICAgIHRvcDogLTE4MnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhNXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBsZWZ0OiAtMTIyNHB4O1xuICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhleGE2e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IC0xMzI0cHg7XG4gICAgICAgIHRvcDogMzAwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhleGE3e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IC0xMjY4cHg7XG4gICAgICAgIHRvcDogLTk0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhleGE4e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IC0xMzY4cHg7XG4gICAgICAgIHRvcDogODBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaGV4YTl7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbGVmdDogLTEzMTJweDtcbiAgICAgICAgdG9wOiAtMTgycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhleGExMHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBsZWZ0OiAtMTQxMnB4O1xuICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhleGExMXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBsZWZ0OiAtMTUxMnB4O1xuICAgICAgICB0b3A6IDE2NHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhMTJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbGVmdDogLTE0NTJweDtcbiAgICAgICAgdG9wOiAtOTRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaGV4YTEze1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IC0xNTU2cHg7XG4gICAgICAgIHRvcDogODBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaGV4YTE0e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IC0xNDk0cHg7XG4gICAgICAgIHRvcDogLThweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xuXG4kcHJlZml4ZXM6ICd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nLCAnbm9uZSc7XG5AbWl4aW4gcHJlZml4KCRwcm9wZXJ0eSwgJGFyZ3VtZW50cykge1xuICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XG4gICAgQGlmICRwcmVmaXggPT0gJ25vbmUnIHtcbiAgICAgICN7JHByb3BlcnR5fTogJGFyZ3VtZW50cztcbiAgICB9IEBlbHNlIHtcbiAgICAgIC0jeyRwcmVmaXh9LSN7JHByb3BlcnR5fTogJGFyZ3VtZW50cztcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGZvcm0taW5wdXQtc3R5bGUoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtaXhpbiBwcmltYXJ5LWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gcHJpbWFyeS1leHRyYWJvbGQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udC1leHRyYWJvbGQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gc2Vjb25kYXJ5LWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBzZWNvbmRhcnktbGlnaHQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWxpZ2h0O1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1ib2xkLWZzKCRmb250LXNpemUpIHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udC1ib2xkO1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1leHRyYWJvbGQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWV4dHJhYm9sZDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBiZ2Mtc3BlY2lhbCgpIHtcbiAgLmJnLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgLmJnLTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgLmJnLTMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTM7XG4gIH1cbiAgLmJnLTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgLmJnLTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgLmJnLTYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTY7XG4gIH1cbiAgLmJnLTcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgLmJnLTgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgLmJnLTkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTk7XG4gIH1cbiAgLmJnLTEwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAuYmctMTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gIC5iZy0xMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTI7XG4gIH1cbiAgLmJnLTEzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAuYmctMTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gIC5iZy0xNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTU7XG4gIH1cbn1cblxuQG1peGluIGNvbG9yLXNwZWNpYWwoKSB7XG4gIC5jb2xvci0xIHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAuY29sb3ItMiB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgLmNvbG9yLTMge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gIC5jb2xvci00IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAuY29sb3ItNSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgLmNvbG9yLTYge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gIC5jb2xvci03IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAuY29sb3ItOCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgLmNvbG9yLTkge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gIC5jb2xvci0xMCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gIC5jb2xvci0xMSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gIC5jb2xvci0xMiB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gIC5jb2xvci0xMyB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gIC5jb2xvci0xNCB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gIC5jb2xvci0xNSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYmdjKCkge1xuICAmLmRvbWFpbjEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE7XG4gIH1cbiAgJi5kb21haW4yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0yO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMztcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTQ7XG4gIH1cbiAgJi5kb21haW41IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci01O1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNjtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTc7XG4gIH1cbiAgJi5kb21haW44IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci04O1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItOTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMDtcbiAgfVxuICAmLmRvbWFpbjExIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMjtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMztcbiAgfVxuICAmLmRvbWFpbjE0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNDtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNTtcbiAgfVxufVxuXG5AbWl4aW4gcmdiYS1iZygkb3BhY2l0eSkge1xuICAmLmRvbWFpbjEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0yLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTMsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci01LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTYsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItNywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci04LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTksICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTEwLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTIsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTEzLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gZG9tYWluLWZpbGwoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYm9yZGVyLXJpZ2h0KCRvcGFjaXR5KSB7XG4gICYuZG9tYWluMSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItNywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItOCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluOSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItOSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTEwLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTEsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjEyIHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xMiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTEzLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTQsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjE1IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xNSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYm9yZGVyLWxlZnQtMTUoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tYm9yZGVyLTEoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiBpZGVhdGhvbi1iYW5uZXItYmcoKSB7XG4gICYuYmctMSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTEpO1xuICB9XG4gICYuYmctMiB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTIpO1xuICB9XG4gICYuYmctMyB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTMpO1xuICB9XG4gICYuYmctNCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTQpO1xuICB9XG4gICYuYmctNSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTUpO1xuICB9XG4gICYuYmctNiB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTYpO1xuICB9XG4gICYuYmctNyB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTcpO1xuICB9XG4gICYuYmctOCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTgpO1xuICB9XG4gICYuYmctOSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTkpO1xuICB9XG4gICYuYmctMTAge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xMCk7XG4gIH1cbiAgJi5iZy0xMSB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTExKTtcbiAgfVxuICAmLmJnLTEyIHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTIpO1xuICB9XG4gICYuYmctMTMge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xMyk7XG4gIH1cbiAgJi5iZy0xNCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTE0KTtcbiAgfVxuICAmLmJnLTE1IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTUpO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InnovationAssuranceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-innovation-assurance',
          templateUrl: './innovation-assurance.component.html',
          styleUrls: ['./innovation-assurance.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ourdata-methodology/ourdata-methodology.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/ourdata-methodology/ourdata-methodology.component.ts ***!
    \**********************************************************************/

  /*! exports provided: OurdataMethodologyComponent */

  /***/
  function srcAppOurdataMethodologyOurdataMethodologyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurdataMethodologyComponent", function () {
      return OurdataMethodologyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OurdataMethodologyComponent =
    /*#__PURE__*/
    function () {
      function OurdataMethodologyComponent() {
        _classCallCheck(this, OurdataMethodologyComponent);
      }

      _createClass(OurdataMethodologyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurdataMethodologyComponent;
    }();

    OurdataMethodologyComponent.??fac = function OurdataMethodologyComponent_Factory(t) {
      return new (t || OurdataMethodologyComponent)();
    };

    OurdataMethodologyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: OurdataMethodologyComponent,
      selectors: [["app-ourdata-methodology"]],
      decls: 27,
      vars: 0,
      consts: [[1, "innovation-container"], [1, "innovation-banner-wrapper"], [1, "innovation-banner", "clearfix"], ["src", "assets/images/banner-overlay.png", "alt", "", 1, "innovation-banner-overlay"], [1, "innovation-banner-image"], ["src", "assets/images/innovation-banner.jpg", "alt", ""], [1, "innovation-main"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "margin", "40px 0px"], ["src", "assets/images/OM-7.png", "alt", "OM-7"], ["src", "assets/images/OM-8.jpg", "alt", "OM-7"], ["src", "assets/images/OM-9.png", "alt", "OM-7"], ["src", "assets/images/OM-10.png", "alt", "OM-7"], ["src", "assets/images/OM-1.jpg", "alt", "OM-1"], ["src", "assets/images/OM-2.jpg", "alt", "OM-2"], ["src", "assets/images/OM-3.jpg", "alt", "Cinque Terre"], ["src", "assets/images/OM-4.jpg", "alt", "Forest"], ["src", "assets/images/OM-5.png", "alt", "OM-5", "width", "750px"], ["src", "assets/images/OM-6.gif", "alt", "OM-6"]],
      template: function OurdataMethodologyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["@font-face {\n  font-family: \"Fort\";\n  src: url(/assets/fonts/Fort-Book.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortExtraBold\";\n  src: url(/assets/fonts/Fort-Extrabold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: \"FortTT\";\n  src: url(/assets/fonts/FortTT-Book.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTBold\";\n  src: url(/assets/fonts/FortTT-Bold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTExtraBold\";\n  src: url(/assets/fonts/FortTT-Extrabold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"FortTTLight\";\n  src: url(/assets/fonts/FortTT-Light.ttf) format(\"truetype\");\n}\n.innovation-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n@media screen and (min-width: 1921px) {\n  .innovation-container[_ngcontent-%COMP%] {\n    padding: 0px 150px;\n  }\n}\n@media screen and (max-width: 1360px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%] {\n    margin-top: 75px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 525px);\n  position: relative;\n  overflow: hidden;\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n    height: calc(100vh - 365px);\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n    height: calc(100vh - 315px);\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 720px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n    height: calc(100vh - 325px);\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 600px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%] {\n    height: calc(105vh - 325px);\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 140px;\n  width: 403px;\n  height: 190px;\n  background-color: #0097ac;\n  z-index: 1;\n  padding: 40px 65px 20px 65px;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 136px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 102px;\n    width: 460px;\n    height: 130px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    left: 100px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    left: 100px;\n    width: 450px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 60px;\n    left: 80px;\n    width: 340px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 160px;\n    padding: 40px 0px 40px 30px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 140px;\n    left: 80px;\n    width: 400px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 800px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 75px;\n    left: 80px;\n    width: 325px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 720px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 35px;\n    padding: 30px 30px 40px 40px !important;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 600px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 20px;\n    height: 50px;\n    padding: 25px 30px 20px 40px;\n  }\n}\n@media screen and (max-width: 1152px) and (max-height: 864px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 105px;\n  }\n}\n@media screen and (max-width: 1024px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%] {\n    top: 75px;\n    padding: 25px 0px 20px 20px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n  font-family: \"Fort\", sans-serif;\n  font-size: 30px;\n  color: #fff;\n  margin-bottom: 15px;\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 25px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 27px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 720px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 22px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 600px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-green[_ngcontent-%COMP%]   .innovation-banner-title[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 14px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-banner-wrapper[_ngcontent-%COMP%]   .innovation-banner[_ngcontent-%COMP%]   .innovation-banner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n  padding: 0px 150px;\n  font-family: \"Fort\", sans-serif;\n  font-size: 18px;\n  margin-top: 50px;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 800px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 10px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%] {\n    font-family: \"Fort\", sans-serif;\n    font-size: 9px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 18px;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 800px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 10px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 9px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 18px;\n  text-decoration: underline;\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1400px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 1366px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 1024px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 960px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 800px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 10px;\n  }\n}\n@media screen and (max-width: 1280px) and (max-height: 768px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .bold-underline[_ngcontent-%COMP%] {\n    font-family: \"FortExtraBold\", sans-serif;\n    font-size: 9px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  background-color: #f2f7f8;\n  padding: 10px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .maxWidth[_ngcontent-%COMP%] {\n  width: 48%;\n  margin: 1%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0;\n  margin-right: 40px;\n  width: 48%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .single-image[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .single-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-intro[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-bottom: 30px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-intro[_ngcontent-%COMP%]   .innovation-intro-title[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 20px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-title[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 40px;\n  color: #27757c;\n  margin-top: 50px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-subtitle[_ngcontent-%COMP%] {\n  font-family: \"FortExtraBold\", sans-serif;\n  font-size: 30px;\n  margin-top: 50px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-multiple-images[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 60px 20px;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-multiple-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .innovation-section[_ngcontent-%COMP%]   .innovation-section-multiple-images.three[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 33%;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  align-items: center;\n  justify-content: center;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1200px;\n}\n@media screen and (max-width: 1920px) and (max-height: 1080px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 100px;\n  }\n}\n@media screen and (max-width: 1680px) and (max-height: 1050px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 100px;\n  }\n}\n@media screen and (max-width: 1600px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n}\n@media screen and (max-width: 1440px) and (max-height: 900px) {\n  .innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   #hexagon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 66.735px;\n  background: black;\n  position: relative;\n  transform: rotate(90deg);\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   #hexagon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -28.8675px;\n  left: 0;\n  width: 0;\n  height: 0;\n  border-left: 50px solid transparent;\n  border-right: 50px solid transparent;\n  border-bottom: 28.8675px solid black;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   #hexagon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -28.8675px;\n  left: 0;\n  width: 0;\n  height: 0;\n  border-left: 50px solid transparent;\n  border-right: 50px solid transparent;\n  border-top: 28.8675px solid black;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa1[_ngcontent-%COMP%] {\n  position: relative;\n  left: -776px;\n  opacity: 0;\n  top: -7px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa2[_ngcontent-%COMP%] {\n  position: relative;\n  left: -770px;\n  opacity: 0;\n  top: -64px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa3[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -870px;\n  top: 52px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa4[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -866px;\n  top: -121px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa5[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -966px;\n  top: -7px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa6[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1066px;\n  top: 109px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa7[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1062px;\n  top: -64px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa8[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1161px;\n  top: 52px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa9[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1158px;\n  top: -120px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa10[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1259px;\n  top: -6px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa11[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1359px;\n  top: 110px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa12[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1353px;\n  top: -63px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa13[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1455px;\n  top: 53px;\n  cursor: pointer;\n}\n.innovation-container[_ngcontent-%COMP%]   .innovation-main[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .hexa14[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  left: -1448px;\n  top: -6px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyZGF0YS1tZXRob2RvbG9neS9DOlxcVXNlcnNcXHlyYW9cXE9uZURyaXZlIC0gTWVyYXRpdmVcXERlc2t0b3BcXHVzdCBjb2hvcnQgYnVpbGRlclxcaGVhbHRoY2FyZVxcSGVhbHRoQ2FyZUFuYWx5dGljcy0yMC0wNS0yMDIyLW1haW5cXG15LWFwcC9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvb3VyZGF0YS1tZXRob2RvbG9neS9vdXJkYXRhLW1ldGhvZG9sb2d5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXJkYXRhLW1ldGhvZG9sb2d5L0M6XFxVc2Vyc1xceXJhb1xcT25lRHJpdmUgLSBNZXJhdGl2ZVxcRGVza3RvcFxcdXN0IGNvaG9ydCBidWlsZGVyXFxoZWFsdGhjYXJlXFxIZWFsdGhDYXJlQW5hbHl0aWNzLTIwLTA1LTIwMjItbWFpblxcbXktYXBwL3NyY1xcYXBwXFxvdXJkYXRhLW1ldGhvZG9sb2d5XFxvdXJkYXRhLW1ldGhvZG9sb2d5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXJkYXRhLW1ldGhvZG9sb2d5L0M6XFxVc2Vyc1xceXJhb1xcT25lRHJpdmUgLSBNZXJhdGl2ZVxcRGVza3RvcFxcdXN0IGNvaG9ydCBidWlsZGVyXFxoZWFsdGhjYXJlXFxIZWFsdGhDYXJlQW5hbHl0aWNzLTIwLTA1LTIwMjItbWFpblxcbXktYXBwL3NyY1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx3REFBQTtBQ0NGO0FEQ0E7RUFDRSw0QkFBQTtFQUNBLDZEQUFBO0FDQ0Y7QURDQTtFQUNFLHFCQUFBO0VBQ0EsMERBQUE7QUNDRjtBRENBO0VBQ0UseUJBQUE7RUFDQSwwREFBQTtBQ0NGO0FEQ0E7RUFDRSw4QkFBQTtFQUNBLCtEQUFBO0FDQ0Y7QURDQTtFQUNFLDBCQUFBO0VBQ0EsMkRBQUE7QUNDRjtBQ3RCQTtFQUNFLGdCQUFBO0VDTUkseUJETDJCO0VDSzNCLHNCREwyQjtFQ0szQixvQkRMMkI7RUNHM0IsaUJESDJCO0FENEJqQztBQzNCRTtFQUhGO0lBSUksa0JBQUE7RUQ4QkY7QUFDRjtBQzNCSTtFQUZGO0lBR0ksZ0JBQUE7RUQ4Qko7QUFDRjtBQzdCSTtFQUxGO0lBTUksZ0JBQUE7RURnQ0o7QUFDRjtBQy9CSTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURpQ047QUNoQ007RUFMRjtJQU1JLDJCQUFBO0VEbUNOO0FBQ0Y7QUNsQ007RUFSRjtJQVNJLDJCQUFBO0VEcUNOO0FBQ0Y7QUNwQ007RUFYRjtJQVlJLDJCQUFBO0VEdUNOO0FBQ0Y7QUN0Q007RUFkRjtJQWVJLDJCQUFBO0VEeUNOO0FBQ0Y7QUN4Q007RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUQwQ1I7QUN4Q007RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkZsQlU7RUVtQlYsVUFBQTtFQUNBLDRCQUFBO0FEMENSO0FDekNRO0VBVEY7SUFVSSxVQUFBO0VENENSO0FBQ0Y7QUMzQ1E7RUFaRjtJQWFJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFRDhDUjtBQUNGO0FDN0NRO0VBakJGO0lBa0JJLFdBQUE7RURnRFI7QUFDRjtBQy9DUTtFQXBCRjtJQXFCSSxXQUFBO0lBQ0EsWUFBQTtFRGtEUjtBQUNGO0FDakRRO0VBeEJGO0lBeUJJLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFRG9EUjtBQUNGO0FDbkRRO0VBN0JGO0lBOEJJLFVBQUE7SUFDQSwyQkFBQTtFRHNEUjtBQUNGO0FDckRRO0VBakNGO0lBa0NJLFVBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFRHdEUjtBQUNGO0FDdkRRO0VBdENGO0lBdUNJLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFRDBEUjtBQUNGO0FDekRRO0VBM0NGO0lBNENJLFNBQUE7RUQ0RFI7QUFDRjtBQzNEUTtFQTlDRjtJQStDSSxTQUFBO0lBQ0EsdUNBQUE7RUQ4RFI7QUFDRjtBQzdEUTtFQWxERjtJQW1ESSxTQUFBO0lBQ0EsWUFBQTtJQUNBLDRCQUFBO0VEZ0VSO0FBQ0Y7QUMvRFE7RUF2REY7SUF3REksVUFBQTtFRGtFUjtBQUNGO0FDakVRO0VBMURGO0lBMkRJLFNBQUE7SUFDQSwyQkFBQTtFRG9FUjtBQUNGO0FDbkVRO0VDbEZOLCtCSDJCYTtFRzFCYixlQUFBO0VEbUZRLFdBQUE7RUFDQSxtQkFBQTtBRHNFVjtBQ3JFVTtFQUpGO0lDbEZOLCtCSDJCYTtJRzFCYixlQUFBO0VGK0pBO0FBQ0Y7QUN4RVU7RUFQRjtJQ2xGTiwrQkgyQmE7SUcxQmIsZUFBQTtFRnFLQTtBQUNGO0FDM0VVO0VBVkY7SUNsRk4sK0JIMkJhO0lHMUJiLGVBQUE7RUYyS0E7QUFDRjtBQzlFVTtFQWJGO0lDbEZOLCtCSDJCYTtJRzFCYixlQUFBO0VGaUxBO0FBQ0Y7QUNqRlU7RUFoQkY7SUNsRk4sK0JIMkJhO0lHMUJiLGVBQUE7RUZ1TEE7QUFDRjtBQ3BGVTtFQW5CRjtJQ2xGTiwrQkgyQmE7SUcxQmIsZUFBQTtFRjZMQTtBQUNGO0FDcEZRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QURzRlY7QUNqRkU7RUFDRSxrQkFBQTtFQ3JIRiwrQkgyQmE7RUcxQmIsZUFBQTtFRGlKRSxnQkFBQTtBRHlESjtBQ3BGSTtFQUhGO0lDcEhBLCtCSDJCYTtJRzFCYixlQUFBO0VGK01BO0FBQ0Y7QUN2Rkk7RUFORjtJQ3BIQSwrQkgyQmE7SUcxQmIsZUFBQTtFRnFOQTtBQUNGO0FDMUZJO0VBVEY7SUNwSEEsK0JIMkJhO0lHMUJiLGVBQUE7RUYyTkE7QUFDRjtBQzdGSTtFQVpGO0lDcEhBLCtCSDJCYTtJRzFCYixlQUFBO0VGaU9BO0FBQ0Y7QUNoR0k7RUFmRjtJQ3BIQSwrQkgyQmE7SUcxQmIsZUFBQTtFRnVPQTtBQUNGO0FDbkdJO0VBbEJGO0lDcEhBLCtCSDJCYTtJRzFCYixlQUFBO0VGNk9BO0FBQ0Y7QUN0R0k7RUFyQkY7SUNwSEEsK0JIMkJhO0lHMUJiLGVBQUE7RUZtUEE7QUFDRjtBQ3pHSTtFQXhCRjtJQ3BIQSwrQkgyQmE7SUcxQmIsZUFBQTtFRnlQQTtBQUNGO0FDNUdJO0VBM0JGO0lDcEhBLCtCSDJCYTtJRzFCYixjQUFBO0VGK1BBO0FBQ0Y7QUM5R0k7RUFDRSxlQUFBO0FEZ0hOO0FDOUdJO0VDakpGLHdDSHVCdUI7RUd0QnZCLGVBQUE7QUZrUUY7QUNoSE07RUFGRjtJQ2pKRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGdVFBO0FBQ0Y7QUNuSE07RUFMRjtJQ2pKRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGNlFBO0FBQ0Y7QUN0SE07RUFSRjtJQ2pKRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGbVJBO0FBQ0Y7QUN6SE07RUFYRjtJQ2pKRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGeVJBO0FBQ0Y7QUM1SE07RUFkRjtJQ2pKRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGK1JBO0FBQ0Y7QUMvSE07RUFqQkY7SUNqSkYsd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRnFTQTtBQUNGO0FDbElNO0VBcEJGO0lDakpGLHdDSHVCdUI7SUd0QnZCLGVBQUE7RUYyU0E7QUFDRjtBQ3JJTTtFQXZCRjtJQ2pKRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGaVRBO0FBQ0Y7QUN4SU07RUExQkY7SUNqSkYsd0NIdUJ1QjtJR3RCdkIsY0FBQTtFRnVUQTtBQUNGO0FDMUlJO0VDL0tGLHdDSHVCdUI7RUd0QnZCLGVBQUE7RUQyTUksMEJBQUE7QURrSE47QUM3SU07RUFGRjtJQy9LRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGa1VBO0FBQ0Y7QUNoSk07RUFMRjtJQy9LRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGd1VBO0FBQ0Y7QUNuSk07RUFSRjtJQy9LRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGOFVBO0FBQ0Y7QUN0Sk07RUFYRjtJQy9LRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGb1ZBO0FBQ0Y7QUN6Sk07RUFkRjtJQy9LRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGMFZBO0FBQ0Y7QUM1Sk07RUFqQkY7SUMvS0Ysd0NIdUJ1QjtJR3RCdkIsZUFBQTtFRmdXQTtBQUNGO0FDL0pNO0VBcEJGO0lDL0tGLHdDSHVCdUI7SUd0QnZCLGVBQUE7RUZzV0E7QUFDRjtBQ2xLTTtFQXZCRjtJQy9LRix3Q0h1QnVCO0lHdEJ2QixlQUFBO0VGNFdBO0FBQ0Y7QUNyS007RUExQkY7SUMvS0Ysd0NIdUJ1QjtJR3RCdkIsY0FBQTtFRmtYQTtBQUNGO0FDdEtJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FEd0tOO0FDdEtJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FEd0tOO0FDdEtJO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUR3S047QUN0S0k7RUFDRSxtQkFBQTtBRHdLTjtBQ3RLSTtFQUNFLGdCQUFBO0FEd0tOO0FDdEtJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUR3S047QUN0S0k7RUFDRSxrQkFBQTtBRHdLTjtBQ3ZLTTtFQUNFLFdBQUE7QUR5S1I7QUN0S0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FEd0tOO0FDdktNO0VDL09KLHdDSHVCdUI7RUd0QnZCLGVBQUE7QUZ5WkY7QUN2S0k7RUFDRSxnQkFBQTtBRHlLTjtBQ3hLTTtFQ3JQSix3Q0h1QnVCO0VHdEJ2QixlQUFBO0VEc1BNLGNGdFBRO0VFdVBSLGdCQUFBO0FEMktSO0FDektNO0VDMVBKLHdDSHVCdUI7RUd0QnZCLGVBQUE7RUQyUE0sZ0JBQUE7QUQ0S1I7QUMxS007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FENEtSO0FDM0tRO0VBQ0UsVUFBQTtBRDZLVjtBQzFLVTtFQUNFLFVBQUE7QUQ0S1o7QUN2S0k7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUR5S047QUN2S007RUFDRSxhQUFBO0FEeUtSO0FDeEtRO0VBRkY7SUFHSSxrQkFBQTtFRDJLUjtBQUNGO0FDMUtRO0VBTEY7SUFNSSxrQkFBQTtFRDZLUjtBQUNGO0FDNUtRO0VBUkY7SUFTSyxpQkFBQTtFRCtLVDtBQUNGO0FDOUtTO0VBWEg7SUFZSyxpQkFBQTtFRGlMVDtBQUNGO0FDOUtNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FEZ0xSO0FDOUtNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtBRGdMUjtBQzlLTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FEZ0xSO0FDN0tNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FEK0tSO0FDNUtNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEOEtSO0FDM0tNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FENktSO0FDMUtNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FENEtSO0FDektNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FEMktSO0FDeEtNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEMEtSO0FDdktNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEeUtSO0FDdEtNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FEd0tSO0FDcktNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEdUtSO0FDcEtNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FEc0tSO0FDbktNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEcUtSO0FDbEtNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEb0tSO0FDaktNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FEbUtSO0FDaEtNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FEa0tSIiwiZmlsZSI6InNyYy9hcHAvb3VyZGF0YS1tZXRob2RvbG9neS9vdXJkYXRhLW1ldGhvZG9sb2d5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydC1Cb29rLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydEV4dHJhQm9sZCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydC1FeHRyYWJvbGQub3RmKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb3J0VFQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1Cb29rLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9ydFRUQm9sZCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb3J0VFRFeHRyYUJvbGQnO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1FeHRyYWJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb3J0VFRMaWdodCc7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydFRULUxpZ2h0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4kcHJpbWFyeS1jb2xvcjogIzI3NzU3YztcbiRwcmltYXJ5LXF1aXotYmc6ICNmMmY3Zjg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMDA5N2FjO1xuJHJpZ2h0LWZsb2F0aW5nLWJnOiAjMDA2ZTc0O1xuXG4kc3BlY2lhbC1jb2xvci0xOiAjNjY1ZmQxO1xuJHNwZWNpYWwtY29sb3ItMjogIzU3NGI5MDtcbiRzcGVjaWFsLWNvbG9yLTM6ICMzOGFkYTk7XG4kc3BlY2lhbC1jb2xvci00OiAjYTU1ZWVhO1xuJHNwZWNpYWwtY29sb3ItNTogI2Q1NTU1ODtcbiRzcGVjaWFsLWNvbG9yLTY6ICNkNmEwNWI7XG4kc3BlY2lhbC1jb2xvci03OiAjYTQ2NzBiO1xuJHNwZWNpYWwtY29sb3ItODogIzQ3N2U4MDtcbiRzcGVjaWFsLWNvbG9yLTk6ICNmYzgyNGE7XG4kc3BlY2lhbC1jb2xvci0xMDogI2ZmMWUwMDtcbiRzcGVjaWFsLWNvbG9yLTExOiAjMDBhZWZmO1xuJHNwZWNpYWwtY29sb3ItMTI6ICMzMjRlN2I7XG4kc3BlY2lhbC1jb2xvci0xMzogI2M5NGU0ZTtcbiRzcGVjaWFsLWNvbG9yLTE0OiAjMDFiZWZmO1xuJHNwZWNpYWwtY29sb3ItMTU6ICM2MDYwNjA7XG5cbiRwcmltYXJ5LWZvbnQ6ICdGb3J0Jywgc2Fucy1zZXJpZjtcbiRwcmltYXJ5LWZvbnQtZXh0cmFib2xkOiAnRm9ydEV4dHJhQm9sZCcsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQ6ICdGb3J0VFQnLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250LWxpZ2h0OiAnRm9ydFRUTGlnaHQnLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250LWJvbGQ6ICdGb3J0VFRCb2xkJywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udC1leHRyYWJvbGQ6ICdGb3J0VFRFeHRyYUJvbGQnLCBzYW5zLXNlcmlmO1xuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0LUJvb2sub3RmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvRm9ydC1FeHRyYWJvbGQub3RmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0VFRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtQm9vay50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRUVEJvbGRcIjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9Gb3J0VFQtQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRUVEV4dHJhQm9sZFwiO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1FeHRyYWJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb3J0VFRMaWdodFwiO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL0ZvcnRUVC1MaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIxcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjBweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xuICB9XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUyNXB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM2NXB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMxNXB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDcyMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMyNXB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIge1xuICAgIGhlaWdodDogY2FsYygxMDV2aCAtIDMyNXB4KTtcbiAgfVxufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIC5pbm5vdmF0aW9uLWJhbm5lciAuaW5ub3ZhdGlvbi1iYW5uZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiAxNDBweDtcbiAgd2lkdGg6IDQwM3B4O1xuICBoZWlnaHQ6IDE5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5N2FjO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiA0MHB4IDY1cHggMjBweCA2NXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiB7XG4gICAgdG9wOiAxMzZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDEwMnB4O1xuICAgIHdpZHRoOiA0NjBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIC5pbm5vdmF0aW9uLWJhbm5lciAuaW5ub3ZhdGlvbi1iYW5uZXItZ3JlZW4ge1xuICAgIGxlZnQ6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiB7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgd2lkdGg6IDM0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDE2MHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMHB4IDQwcHggMzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDk2MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDE0MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIC5pbm5vdmF0aW9uLWJhbm5lciAuaW5ub3ZhdGlvbi1iYW5uZXItZ3JlZW4ge1xuICAgIHRvcDogNzVweDtcbiAgICBsZWZ0OiA4MHB4O1xuICAgIHdpZHRoOiAzMjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiB7XG4gICAgdG9wOiAzNXB4O1xuICAgIHBhZGRpbmc6IDMwcHggMzBweCA0MHB4IDQwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDI1cHggMzBweCAyMHB4IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiB7XG4gICAgdG9wOiAxMDVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIHtcbiAgICB0b3A6IDc1cHg7XG4gICAgcGFkZGluZzogMjVweCAwcHggMjBweCAyMHB4O1xuICB9XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiAuaW5ub3ZhdGlvbi1iYW5uZXItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLWJhbm5lci13cmFwcGVyIC5pbm5vdmF0aW9uLWJhbm5lciAuaW5ub3ZhdGlvbi1iYW5uZXItZ3JlZW4gLmlubm92YXRpb24tYmFubmVyLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIC5pbm5vdmF0aW9uLWJhbm5lci10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWdyZWVuIC5pbm5vdmF0aW9uLWJhbm5lci10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiAuaW5ub3ZhdGlvbi1iYW5uZXItdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiAuaW5ub3ZhdGlvbi1iYW5uZXItdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIgLmlubm92YXRpb24tYmFubmVyIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiAuaW5ub3ZhdGlvbi1iYW5uZXItdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1iYW5uZXItd3JhcHBlciAuaW5ub3ZhdGlvbi1iYW5uZXIgLmlubm92YXRpb24tYmFubmVyLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiB7XG4gIHBhZGRpbmc6IDBweCAxNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIGltZyB7XG4gIG1hcmdpbjogMHB4IDBweDtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiBzdHJvbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiBzdHJvbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiBzdHJvbmcge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gc3Ryb25nIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gc3Ryb25nIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDk2MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuYm9sZC11bmRlcmxpbmUge1xuICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ib2xkLXVuZGVybGluZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ib2xkLXVuZGVybGluZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ib2xkLXVuZGVybGluZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuYm9sZC11bmRlcmxpbmUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuYm9sZC11bmRlcmxpbmUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvcnRFeHRyYUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmJvbGQtdW5kZXJsaW5lIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmJvbGQtdW5kZXJsaW5lIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmJvbGQtdW5kZXJsaW5lIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmJvbGQtdW5kZXJsaW5lIHtcbiAgICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmN2Y4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAubWF4V2lkdGgge1xuICB3aWR0aDogNDglO1xuICBtYXJnaW46IDElO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gcCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiBsaSB7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgd2lkdGg6IDQ4JTtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5zaW5nbGUtaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuc2luZ2xlLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24taW50cm8ge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24taW50cm8gLmlubm92YXRpb24taW50cm8tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJGb3J0RXh0cmFCb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5pbm5vdmF0aW9uLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24tc2VjdGlvbiAuaW5ub3ZhdGlvbi1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMjc3NTdjO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24tc2VjdGlvbiAuaW5ub3ZhdGlvbi1zZWN0aW9uLXN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9ydEV4dHJhQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuaW5ub3ZhdGlvbi1zZWN0aW9uIC5pbm5vdmF0aW9uLXNlY3Rpb24tbXVsdGlwbGUtaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogNjBweCAyMHB4O1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24tc2VjdGlvbiAuaW5ub3ZhdGlvbi1zZWN0aW9uLW11bHRpcGxlLWltYWdlcyBpbWcge1xuICB3aWR0aDogNDglO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmlubm92YXRpb24tc2VjdGlvbiAuaW5ub3ZhdGlvbi1zZWN0aW9uLW11bHRpcGxlLWltYWdlcy50aHJlZSBpbWcge1xuICB3aWR0aDogMzMlO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCBpbWcge1xuICB3aWR0aDogMTIwMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwODBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAuaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCAjaGV4YWdvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA2Ni43MzVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgI2hleGFnb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjguODY3NXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAyOC44Njc1cHggc29saWQgYmxhY2s7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCAjaGV4YWdvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTI4Ljg2NzVweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMjguODY3NXB4IHNvbGlkIGJsYWNrO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGExIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtNzc2cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogLTdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtNzcwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogLTY0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTg3MHB4O1xuICB0b3A6IDUycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTg2NnB4O1xuICB0b3A6IC0xMjFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGE1IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAwO1xuICBsZWZ0OiAtOTY2cHg7XG4gIHRvcDogLTdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGE2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAwO1xuICBsZWZ0OiAtMTA2NnB4O1xuICB0b3A6IDEwOXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCAuaGV4YTcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIGxlZnQ6IC0xMDYycHg7XG4gIHRvcDogLTY0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhOCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTExNjFweDtcbiAgdG9wOiA1MnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCAuaGV4YTkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIGxlZnQ6IC0xMTU4cHg7XG4gIHRvcDogLTEyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5ub3ZhdGlvbi1jb250YWluZXIgLmlubm92YXRpb24tbWFpbiAuZ3JpZCAuaGV4YTEwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAwO1xuICBsZWZ0OiAtMTI1OXB4O1xuICB0b3A6IC02cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhMTEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIGxlZnQ6IC0xMzU5cHg7XG4gIHRvcDogMTEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIGxlZnQ6IC0xMzUzcHg7XG4gIHRvcDogLTYzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbm5vdmF0aW9uLWNvbnRhaW5lciAuaW5ub3ZhdGlvbi1tYWluIC5ncmlkIC5oZXhhMTMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIGxlZnQ6IC0xNDU1cHg7XG4gIHRvcDogNTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlubm92YXRpb24tY29udGFpbmVyIC5pbm5vdmF0aW9uLW1haW4gLmdyaWQgLmhleGExNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTE0NDhweDtcbiAgdG9wOiAtNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCAnLi4vLi4vc2Fzcy9taXhpbnMnO1xuLmlubm92YXRpb24tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQGluY2x1ZGUgcHJlZml4KCd1c2VyLXNlbGVjdCcsIG5vbmUpO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIxcHgpIHtcbiAgICBwYWRkaW5nOiAwcHggMTUwcHg7XG4gIH1cbiAgLmlubm92YXRpb24tYmFubmVyLXdyYXBwZXIge1xuICAgIC8vIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjBweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICB9XG4gICAgLmlubm92YXRpb24tYmFubmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTI1cHgpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNjVweCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzE1cHgpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDcyMHB4KSB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMyNXB4KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTA1dmggLSAzMjVweCk7XG4gICAgICB9XG4gICAgICAuaW5ub3ZhdGlvbi1iYW5uZXItb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5pbm5vdmF0aW9uLWJhbm5lci1ncmVlbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNTBweDtcbiAgICAgICAgbGVmdDogMTQwcHg7XG4gICAgICAgIHdpZHRoOiA0MDNweDtcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcGFkZGluZzogNDBweCA2NXB4IDIwcHggNjVweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAgICAgICAgIHRvcDogMTM2cHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgICAgdG9wOiAxMDJweDtcbiAgICAgICAgICB3aWR0aDogNDYwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgICBsZWZ0OiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICAgICAgbGVmdDogMTAwcHg7XG4gICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICAgIHdpZHRoOiAzNDBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gICAgICAgICAgdG9wOiAxNjBweDtcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4IDBweCA0MHB4IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDk2MHB4KSB7XG4gICAgICAgICAgdG9wOiAxNDBweDtcbiAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgICAgICAgICB0b3A6IDc1cHg7XG4gICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgICB3aWR0aDogMzI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xuICAgICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggNDBweCA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG4gICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4IDMwcHggMjBweCA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTJweCkgYW5kIChtYXgtaGVpZ2h0OiA4NjRweCkge1xuICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgICAgdG9wOiA3NXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMHB4IDIwcHggMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5ub3ZhdGlvbi1iYW5uZXItdGl0bGUge1xuICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMzApO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDI1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAgICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygyOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygyNyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNzIwcHgpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmlubm92YXRpb24tYmFubmVyLWltYWdlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbm5vdmF0aW9uLW1haW4ge1xuICAgIHBhZGRpbmc6IDBweCAxNTBweDtcbiAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDE4KTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDE3KTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDE2KTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICBAaW5jbHVkZSBwcmltYXJ5LWZzKDE1KTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxNCk7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mcygxMyk7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTIpO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcbiAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTEpO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoMTApO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgIEBpbmNsdWRlIHByaW1hcnktZnMoOSk7XG4gICAgfVxuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICB9XG4gICAgc3Ryb25nIHtcbiAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDE4KTtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTcpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDE2KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxNSk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDE0KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxMyk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDEyKTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA5NjBweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxMSk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTApO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDkpO1xuICAgICAgfVxuICAgIH1cbiAgICAuYm9sZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTgpO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwNTBweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxNyk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTYpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDE1KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDUwcHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTQpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDEzKTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoMTIpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDk2MHB4KSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDExKTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LWV4dHJhYm9sZC1mcygxMCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1leHRyYWJvbGQtZnMoOSk7XG4gICAgICB9XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgLmhpZ2hsaWdodCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmN2Y4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLmQtZmxleCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLm1heFdpZHRoIHtcbiAgICAgIHdpZHRoOiA0OCU7XG4gICAgICBtYXJnaW46IDElO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIGxpIHtcbiAgICAgIG1hcmdpbjogMzBweCAwcHg7XG4gICAgfVxuICAgIC5mbG9hdC1sZWZ0IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQ4JTtcbiAgICB9XG4gICAgLnNpbmdsZS1pbWFnZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmlubm92YXRpb24taW50cm8ge1xuICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAuaW5ub3ZhdGlvbi1pbnRyby10aXRsZSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDIwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmlubm92YXRpb24tc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgLmlubm92YXRpb24tc2VjdGlvbi10aXRsZSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDQwKTtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuICAgICAgLmlubm92YXRpb24tc2VjdGlvbi1zdWJ0aXRsZSB7XG4gICAgICAgIEBpbmNsdWRlIHByaW1hcnktZXh0cmFib2xkLWZzKDMwKTtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIH1cbiAgICAgIC5pbm5vdmF0aW9uLXNlY3Rpb24tbXVsdGlwbGUtaW1hZ2VzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIG1hcmdpbjogNjBweCAyMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgIH1cbiAgICAgICAgJi50aHJlZSB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5ncmlke1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBcbiAgICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEyMDBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwODBweCkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LWhlaWdodDogMTA1MHB4KSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICNoZXhhZ29uIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDY2LjczNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcbiAgICAgIH1cbiAgICAgICNoZXhhZ29uOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTI4Ljg2NzVweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMjguODY3NXB4IHNvbGlkIGJsYWNrO1xuICAgICAgfVxuICAgICAgI2hleGFnb246OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0yOC44Njc1cHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci10b3A6IDI4Ljg2NzVweCBzb2xpZCBibGFjaztcbiAgICAgIH1cblxuICAgICAgLmhleGExe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IC03NzZweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiAtN3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhMntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAtNzcwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRvcDogLTY0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhleGEze1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IC04NzBweDtcbiAgICAgICAgdG9wOiA1MnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhNHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBsZWZ0OiAtODY2cHg7XG4gICAgICAgIHRvcDogLTEyMXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhNXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBsZWZ0OiAtOTY2cHg7XG4gICAgICAgIHRvcDogLTdweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaGV4YTZ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbGVmdDogLTEwNjZweDtcbiAgICAgICAgdG9wOiAxMDlweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaGV4YTd7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbGVmdDogLTEwNjJweDtcbiAgICAgICAgdG9wOiAtNjRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaGV4YTh7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbGVmdDogLTExNjFweDtcbiAgICAgICAgdG9wOiA1MnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhOXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBsZWZ0OiAtMTE1OHB4O1xuICAgICAgICB0b3A6IC0xMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaGV4YTEwe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IC0xMjU5cHg7XG4gICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuaGV4YTExe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGxlZnQ6IC0xMzU5cHg7XG4gICAgICAgIHRvcDogMTEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhleGExMntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBsZWZ0OiAtMTM1M3B4O1xuICAgICAgICB0b3A6IC02M3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhMTN7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbGVmdDogLTE0NTVweDtcbiAgICAgICAgdG9wOiA1M3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXhhMTR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbGVmdDogLTE0NDhweDtcbiAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XG5cbiRwcmVmaXhlczogJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbycsICdub25lJztcbkBtaXhpbiBwcmVmaXgoJHByb3BlcnR5LCAkYXJndW1lbnRzKSB7XG4gIEBlYWNoICRwcmVmaXggaW4gJHByZWZpeGVzIHtcbiAgICBAaWYgJHByZWZpeCA9PSAnbm9uZScge1xuICAgICAgI3skcHJvcGVydHl9OiAkYXJndW1lbnRzO1xuICAgIH0gQGVsc2Uge1xuICAgICAgLSN7JHByZWZpeH0tI3skcHJvcGVydHl9OiAkYXJndW1lbnRzO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZm9ybS1pbnB1dC1zdHlsZSgpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1peGluIHByaW1hcnktZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBwcmltYXJ5LWV4dHJhYm9sZC1mcygkZm9udC1zaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250LWV4dHJhYm9sZDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplICsgcHg7XG59XG5cbkBtaXhpbiBzZWNvbmRhcnktZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1saWdodC1mcygkZm9udC1zaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQtbGlnaHQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gc2Vjb25kYXJ5LWJvbGQtZnMoJGZvbnQtc2l6ZSkge1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWJvbGQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSArIHB4O1xufVxuXG5AbWl4aW4gc2Vjb25kYXJ5LWV4dHJhYm9sZC1mcygkZm9udC1zaXplKSB7XG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQtZXh0cmFib2xkO1xuICBmb250LXNpemU6ICRmb250LXNpemUgKyBweDtcbn1cblxuQG1peGluIGJnYy1zcGVjaWFsKCkge1xuICAuYmctMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAuYmctMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMjtcbiAgfVxuICAuYmctMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMztcbiAgfVxuICAuYmctNCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAuYmctNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNTtcbiAgfVxuICAuYmctNiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNjtcbiAgfVxuICAuYmctNyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAuYmctOCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItODtcbiAgfVxuICAuYmctOSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItOTtcbiAgfVxuICAuYmctMTAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gIC5iZy0xMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTE7XG4gIH1cbiAgLmJnLTEyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xMjtcbiAgfVxuICAuYmctMTMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gIC5iZy0xNCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTQ7XG4gIH1cbiAgLmJnLTE1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0xNTtcbiAgfVxufVxuXG5AbWl4aW4gY29sb3Itc3BlY2lhbCgpIHtcbiAgLmNvbG9yLTEge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci0xO1xuICB9XG4gIC5jb2xvci0yIHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMjtcbiAgfVxuICAuY29sb3ItMyB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTM7XG4gIH1cbiAgLmNvbG9yLTQge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci00O1xuICB9XG4gIC5jb2xvci01IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItNTtcbiAgfVxuICAuY29sb3ItNiB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTY7XG4gIH1cbiAgLmNvbG9yLTcge1xuICAgIGNvbG9yOiAkc3BlY2lhbC1jb2xvci03O1xuICB9XG4gIC5jb2xvci04IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItODtcbiAgfVxuICAuY29sb3ItOSB7XG4gICAgY29sb3I6ICRzcGVjaWFsLWNvbG9yLTk7XG4gIH1cbiAgLmNvbG9yLTEwIHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMTA7XG4gIH1cbiAgLmNvbG9yLTExIHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMTE7XG4gIH1cbiAgLmNvbG9yLTEyIHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMTI7XG4gIH1cbiAgLmNvbG9yLTEzIHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMTM7XG4gIH1cbiAgLmNvbG9yLTE0IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMTQ7XG4gIH1cbiAgLmNvbG9yLTE1IHtcbiAgICBjb2xvcjogJHNwZWNpYWwtY29sb3ItMTU7XG4gIH1cbn1cblxuQG1peGluIGRvbWFpbi1iZ2MoKSB7XG4gICYuZG9tYWluMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItMTtcbiAgfVxuICAmLmRvbWFpbjIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTI7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci0zO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNDtcbiAgfVxuICAmLmRvbWFpbjUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTU7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci02O1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNwZWNpYWwtY29sb3ItNztcbiAgfVxuICAmLmRvbWFpbjgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTg7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3BlY2lhbC1jb2xvci05O1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEwO1xuICB9XG4gICYuZG9tYWluMTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTExO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEyO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTEzO1xuICB9XG4gICYuZG9tYWluMTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE0O1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGVjaWFsLWNvbG9yLTE1O1xuICB9XG59XG5cbkBtaXhpbiByZ2JhLWJnKCRvcGFjaXR5KSB7XG4gICYuZG9tYWluMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTIsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMywgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci00LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW41IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTUsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItNiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluNyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci03LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW44IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTgsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItOSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTAsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjExIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTExLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xMiwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHNwZWNpYWwtY29sb3ItMTMsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjE0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzcGVjaWFsLWNvbG9yLTE0LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xNSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3BlY2lhbC1jb2xvci0xNSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBkb21haW4tZmlsbCgpIHtcbiAgJi5kb21haW4xIHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci0xO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMjtcbiAgfVxuICAmLmRvbWFpbjMge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTM7XG4gIH1cbiAgJi5kb21haW40IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci00O1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItNTtcbiAgfVxuICAmLmRvbWFpbjYge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTY7XG4gIH1cbiAgJi5kb21haW43IHtcbiAgICBmaWxsOiAkc3BlY2lhbC1jb2xvci03O1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItODtcbiAgfVxuICAmLmRvbWFpbjkge1xuICAgIGZpbGw6ICRzcGVjaWFsLWNvbG9yLTk7XG4gIH1cbiAgJi5kb21haW4xMCB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMTA7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMTE7XG4gIH1cbiAgJi5kb21haW4xMiB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMTI7XG4gIH1cbiAgJi5kb21haW4xMyB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMTM7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMTQ7XG4gIH1cbiAgJi5kb21haW4xNSB7XG4gICAgZmlsbDogJHNwZWNpYWwtY29sb3ItMTU7XG4gIH1cbn1cblxuQG1peGluIGRvbWFpbi1ib3JkZXItcmlnaHQoJG9wYWNpdHkpIHtcbiAgJi5kb21haW4xIHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4yIHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0yLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4zIHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0zLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW40IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci00LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW41IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci01LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW42IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci02LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW43IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci03LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW44IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci04LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW45IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci05LCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTAsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjExIHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xMSwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTIge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTEyLCAkb3BhY2l0eSk7XG4gIH1cbiAgJi5kb21haW4xMyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHJnYmEoJHNwZWNpYWwtY29sb3ItMTMsICRvcGFjaXR5KTtcbiAgfVxuICAmLmRvbWFpbjE0IHtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgcmdiYSgkc3BlY2lhbC1jb2xvci0xNCwgJG9wYWNpdHkpO1xuICB9XG4gICYuZG9tYWluMTUge1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2JhKCRzcGVjaWFsLWNvbG9yLTE1LCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuQG1peGluIGRvbWFpbi1ib3JkZXItbGVmdC0xNSgpIHtcbiAgJi5kb21haW4xIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMjtcbiAgfVxuICAmLmRvbWFpbjMge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTM7XG4gIH1cbiAgJi5kb21haW40IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci00O1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItNTtcbiAgfVxuICAmLmRvbWFpbjYge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTY7XG4gIH1cbiAgJi5kb21haW43IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAkc3BlY2lhbC1jb2xvci03O1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItODtcbiAgfVxuICAmLmRvbWFpbjkge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTk7XG4gIH1cbiAgJi5kb21haW4xMCB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMTA7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMTE7XG4gIH1cbiAgJi5kb21haW4xMiB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMTI7XG4gIH1cbiAgJi5kb21haW4xMyB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMTM7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMTQ7XG4gIH1cbiAgJi5kb21haW4xNSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHNwZWNpYWwtY29sb3ItMTU7XG4gIH1cbn1cblxuQG1peGluIGRvbWFpbi1ib3JkZXItMSgpIHtcbiAgJi5kb21haW4xIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci0xO1xuICB9XG4gICYuZG9tYWluMiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMjtcbiAgfVxuICAmLmRvbWFpbjMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTM7XG4gIH1cbiAgJi5kb21haW40IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci00O1xuICB9XG4gICYuZG9tYWluNSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItNTtcbiAgfVxuICAmLmRvbWFpbjYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTY7XG4gIH1cbiAgJi5kb21haW43IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc3BlY2lhbC1jb2xvci03O1xuICB9XG4gICYuZG9tYWluOCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItODtcbiAgfVxuICAmLmRvbWFpbjkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzcGVjaWFsLWNvbG9yLTk7XG4gIH1cbiAgJi5kb21haW4xMCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMTA7XG4gIH1cbiAgJi5kb21haW4xMSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMTE7XG4gIH1cbiAgJi5kb21haW4xMiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMTI7XG4gIH1cbiAgJi5kb21haW4xMyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMTM7XG4gIH1cbiAgJi5kb21haW4xNCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMTQ7XG4gIH1cbiAgJi5kb21haW4xNSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNwZWNpYWwtY29sb3ItMTU7XG4gIH1cbn1cblxuQG1peGluIGlkZWF0aG9uLWJhbm5lci1iZygpIHtcbiAgJi5iZy0xIHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMSk7XG4gIH1cbiAgJi5iZy0yIHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMik7XG4gIH1cbiAgJi5iZy0zIHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMyk7XG4gIH1cbiAgJi5iZy00IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItNCk7XG4gIH1cbiAgJi5iZy01IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItNSk7XG4gIH1cbiAgJi5iZy02IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItNik7XG4gIH1cbiAgJi5iZy03IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItNyk7XG4gIH1cbiAgJi5iZy04IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItOCk7XG4gIH1cbiAgJi5iZy05IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItOSk7XG4gIH1cbiAgJi5iZy0xMCB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTEwKTtcbiAgfVxuICAmLmJnLTExIHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTEpO1xuICB9XG4gICYuYmctMTIge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xMik7XG4gIH1cbiAgJi5iZy0xMyB7XG4gICAgQGluY2x1ZGUgcHJlZml4KGJveC1zaGFkb3csIDBweCA3cHggMjBweCAtNXB4ICRzcGVjaWFsLWNvbG9yLTEzKTtcbiAgfVxuICAmLmJnLTE0IHtcbiAgICBAaW5jbHVkZSBwcmVmaXgoYm94LXNoYWRvdywgMHB4IDdweCAyMHB4IC01cHggJHNwZWNpYWwtY29sb3ItMTQpO1xuICB9XG4gICYuYmctMTUge1xuICAgIEBpbmNsdWRlIHByZWZpeChib3gtc2hhZG93LCAwcHggN3B4IDIwcHggLTVweCAkc3BlY2lhbC1jb2xvci0xNSk7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OurdataMethodologyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ourdata-methodology',
          templateUrl: './ourdata-methodology.component.html',
          styleUrls: ['./ourdata-methodology.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\yrao\OneDrive - Merative\Desktop\ust cohort builder\healthcare\HealthCareAnalytics-20-05-2022-main\my-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
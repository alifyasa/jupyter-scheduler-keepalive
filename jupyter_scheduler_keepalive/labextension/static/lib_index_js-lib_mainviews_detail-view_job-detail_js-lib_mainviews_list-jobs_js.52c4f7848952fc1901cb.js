'use strict';
(self['webpackChunk_jupyterlab_scheduler'] =
  self['webpackChunk_jupyterlab_scheduler'] || []).push([
  [
    'lib_index_js-lib_mainviews_detail-view_job-detail_js-lib_mainviews_list-jobs_js'
  ],
  {
    /***/ './lib/advanced-options.js':
      /*!*********************************!*\
  !*** ./lib/advanced-options.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _components_cluster__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./components/cluster */ './lib/components/cluster.js'
          );
        /* harmony import */ var _components_icon_buttons__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./components/icon-buttons */ './lib/components/icon-buttons.js'
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./hooks */ './lib/hooks.js');
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./model */ './lib/model.js');
        /* harmony import */ var _components_labeled_value__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./components/labeled-value */ './lib/components/labeled-value.js'
          );

        const AdvancedOptions = props => {
          var _a;
          const formPrefix = 'jp-create-job-advanced-';
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const handleInputChange = e => {
            if (
              props.jobsView !==
              _model__WEBPACK_IMPORTED_MODULE_3__.JobsView.CreateForm
            ) {
              return;
            }
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), {
                [e.target.name]: e.target.value
              })
            );
          };
          const handleTagChange = event => {
            var _a;
            if (
              props.jobsView !==
              _model__WEBPACK_IMPORTED_MODULE_3__.JobsView.CreateForm
            ) {
              return;
            }
            const { name, value } = event.target;
            const tagIdxMatch = name.match(/^tag-(\d+)$/);
            if (tagIdxMatch === null) {
              return null;
            }
            const newTags =
              (_a = props.model.tags) !== null && _a !== void 0 ? _a : [];
            newTags[parseInt(tagIdxMatch[1])] = value;
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), { tags: newTags })
            );
          };
          const addTag = () => {
            var _a;
            if (
              props.jobsView !==
              _model__WEBPACK_IMPORTED_MODULE_3__.JobsView.CreateForm
            ) {
              return;
            }
            const newTags = [
              ...((_a = props.model.tags) !== null && _a !== void 0 ? _a : []),
              ''
            ];
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), { tags: newTags })
            );
          };
          const deleteTag = idx => {
            var _a;
            if (
              props.jobsView !==
              _model__WEBPACK_IMPORTED_MODULE_3__.JobsView.CreateForm
            ) {
              return;
            }
            const newTags =
              (_a = props.model.tags) !== null && _a !== void 0 ? _a : [];
            newTags.splice(idx, 1);
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), { tags: newTags })
            );
          };
          const tags =
            (_a = props.model.tags) !== null && _a !== void 0 ? _a : [];
          const createTags = () => {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
              { spacing: 2 },
              tags.map((tag, idx) =>
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_cluster__WEBPACK_IMPORTED_MODULE_4__.Cluster,
                  { key: idx, justifyContent: 'flex-start' },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField,
                    {
                      label: trans.__('Tag %1', idx + 1),
                      id: `${formPrefix}tag-${idx}`,
                      name: `tag-${idx}`,
                      value: tag,
                      onChange: handleTagChange
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _components_icon_buttons__WEBPACK_IMPORTED_MODULE_5__.DeleteButton,
                    {
                      onClick: () => {
                        // Remove tag
                        deleteTag(idx);
                        return false;
                      },
                      title: trans.__('Delete tag %1', idx + 1),
                      addedStyle: { marginTop: '4px' }
                    }
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _components_cluster__WEBPACK_IMPORTED_MODULE_4__.Cluster,
                { justifyContent: 'flex-start' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_icon_buttons__WEBPACK_IMPORTED_MODULE_5__.AddButton,
                  {
                    onClick: e => {
                      addTag();
                      return false;
                    },
                    title: trans.__('Add new tag')
                  }
                )
              )
            );
          };
          const showTags = () => {
            if (!props.model.tags) {
              return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                { spacing: 2 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  'p',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    'em',
                    null,
                    trans.__('No tags')
                  )
                )
              );
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
              { spacing: 2 },
              tags.map((tag, idx) =>
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_labeled_value__WEBPACK_IMPORTED_MODULE_6__.LabeledValue,
                  {
                    label: trans.__('Tag %1', idx + 1),
                    id: `${formPrefix}tag-${idx}`,
                    name: `tag-${idx}`,
                    value: tag
                  }
                )
              )
            );
          };
          // Tags look different when they're for display or for editing.
          const tagsDisplay =
            props.jobsView ===
            _model__WEBPACK_IMPORTED_MODULE_3__.JobsView.CreateForm
              ? createTags()
              : showTags();
          // The idempotency token is only used for jobs, not for job definitions
          const idemTokenLabel = trans.__('Idempotency token');
          const idemTokenName = 'idempotencyToken';
          const idemTokenId = `${formPrefix}${idemTokenName}`;
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
            { spacing: 4 },
            props.jobsView ===
              _model__WEBPACK_IMPORTED_MODULE_3__.JobsView.JobDetail &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _components_labeled_value__WEBPACK_IMPORTED_MODULE_6__.LabeledValue,
                {
                  label: idemTokenLabel,
                  value: props.model.idempotencyToken,
                  id: `${formPrefix}idempotencyToken`,
                  name: idemTokenName
                }
              ),
            props.jobsView ===
              _model__WEBPACK_IMPORTED_MODULE_3__.JobsView.CreateForm &&
              props.model.createType === 'Job' &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField,
                {
                  label: idemTokenLabel,
                  variant: 'outlined',
                  onChange: handleInputChange,
                  value: props.model.idempotencyToken,
                  id: idemTokenId,
                  name: idemTokenName
                }
              ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormLabel,
              { component: 'legend' },
              trans.__('Tags')
            ),
            tagsDisplay
          );
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          AdvancedOptions;

        /***/
      },

    /***/ './lib/components/advanced-table/advanced-table-header.js':
      /*!****************************************************************!*\
  !*** ./lib/components/advanced-table/advanced-table-header.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AdvancedTableHeader: () =>
            /* binding */ AdvancedTableHeader
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyterlab/ui-components */ 'webpack/sharing/consume/default/@jupyterlab/ui-components'
          );
        /* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @mui/material/TableHead */ './node_modules/@mui/material/esm/TableHead/TableHead.js'
          );
        /* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @mui/material/TableCell */ './node_modules/@mui/material/esm/TableCell/TableCell.js'
          );
        /* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../../handler */ './lib/handler.js');

        function AdvancedTableHeader(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_2__['default'],
            null,
            props.columns.map((column, idx) =>
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                AdvancedTableHeaderCell,
                {
                  key: idx,
                  column: column,
                  query: props.query,
                  setQuery: props.setQuery
                }
              )
            )
          );
        }
        const sortAscendingIcon =
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__.LabIcon
              .resolveReact,
            {
              icon: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__.caretUpIcon,
              tag: 'span'
            }
          );
        const sortDescendingIcon =
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__.LabIcon
              .resolveReact,
            {
              icon: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__.caretDownIcon,
              tag: 'span'
            }
          );
        function AdvancedTableHeaderCell(props) {
          const sort = props.query.sort_by;
          const defaultSort =
            sort === null || sort === void 0 ? void 0 : sort[0];
          const headerIsDefaultSort =
            defaultSort && defaultSort.name === props.column.sortField;
          const isSortedAscending =
            headerIsDefaultSort &&
            defaultSort &&
            defaultSort.direction ===
              _handler__WEBPACK_IMPORTED_MODULE_3__.Scheduler.SortDirection.ASC;
          const isSortedDescending =
            headerIsDefaultSort &&
            defaultSort &&
            defaultSort.direction ===
              _handler__WEBPACK_IMPORTED_MODULE_3__.Scheduler.SortDirection
                .DESC;
          const sortByThisColumn = () => {
            // If this field is not sortable, do nothing.
            if (!props.column.sortField) {
              return;
            }
            // Change the sort of this column.
            // If not sorted at all or if sorted descending, sort ascending. If sorted ascending, sort descending.
            const newSortDirection = isSortedAscending
              ? _handler__WEBPACK_IMPORTED_MODULE_3__.Scheduler.SortDirection
                  .DESC
              : _handler__WEBPACK_IMPORTED_MODULE_3__.Scheduler.SortDirection
                  .ASC;
            // Set the new sort direction.
            const newSort = {
              name: props.column.sortField,
              direction: newSortDirection
            };
            // If this field is already present in the sort list, remove it.
            const oldSortList = sort || [];
            const newSortList = [
              newSort,
              ...oldSortList.filter(
                item => item.name !== props.column.sortField
              )
            ];
            // Sub the new sort list in to the query.
            props.setQuery(query =>
              Object.assign(Object.assign({}, query), { sort_by: newSortList })
            );
          };
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__['default'],
            {
              onClick: sortByThisColumn,
              sx: props.column.sortField ? { cursor: 'pointer' } : {}
            },
            props.column.name,
            isSortedAscending && sortAscendingIcon,
            isSortedDescending && sortDescendingIcon
          );
        }

        /***/
      },

    /***/ './lib/components/advanced-table/advanced-table.js':
      /*!*********************************************************!*\
  !*** ./lib/components/advanced-table/advanced-table.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AdvancedTable: () => /* binding */ AdvancedTable
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @mui/material/styles */ './node_modules/@mui/material/esm/styles/useTheme.js'
          );
        /* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @mui/material/Table */ './node_modules/@mui/material/esm/Table/Table.js'
          );
        /* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @mui/material/TableContainer */ './node_modules/@mui/material/esm/TableContainer/TableContainer.js'
          );
        /* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! @mui/material/TableBody */ './node_modules/@mui/material/esm/TableBody/TableBody.js'
          );
        /* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! @mui/material/TablePagination */ './node_modules/@mui/material/esm/TablePagination/TablePagination.js'
          );
        /* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @mui/material/Paper */ './node_modules/@mui/material/esm/Paper/Paper.js'
          );
        /* harmony import */ var _advanced_table_header__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./advanced-table-header */ './lib/components/advanced-table/advanced-table-header.js'
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../hooks */ './lib/hooks.js');
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../../util/errors */ './lib/util/errors.js');

        const PAGE_SIZE = 25;
        /**
         * Advanced table that automatically fills remaining screen width, asynchronous
         * pagination, and loading states.
         */
        function AdvancedTable(props) {
          var _a, _b;
          const [rows, setRows] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)();
          const [nextToken, setNextToken] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)();
          const [totalCount, setTotalCount] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)();
          const [page, setPage] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
          const [maxPage, setMaxPage] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
          const [loading, setLoading] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
          const [displayError, setDisplayError] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const theme = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__['default'])();
          const pageSize =
            (_a = props.pageSize) !== null && _a !== void 0 ? _a : PAGE_SIZE;
          const fetchInitialRows = async () => {
            // reset pagination state
            setPage(0);
            setMaxPage(0);
            setLoading(true);
            setDisplayError(null); // Cancel previous errors
            props
              .request(
                Object.assign(Object.assign({}, props.query), {
                  max_items: pageSize
                })
              )
              .then(payload => {
                setLoading(false);
                setRows(props.extractRows(payload));
                setNextToken(
                  payload === null || payload === void 0
                    ? void 0
                    : payload.next_token
                );
                setTotalCount(
                  payload === null || payload === void 0
                    ? void 0
                    : payload.total_count
                );
              })
              .catch(e => {
                const message = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_4__.getErrorMessage)(e);
                setDisplayError(message);
              });
          };
          // Fetch the initial rows asynchronously on component creation
          // After setJobsQuery is called, force a reload.
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            fetchInitialRows();
          }, [props.query]);
          const fetchMoreRows = async newPage => {
            // Do nothing if the next token is undefined (shouldn't happen, but required for type safety)
            if (nextToken === undefined) {
              return false;
            }
            // Apply the custom token to the existing query parameters
            setLoading(true);
            setDisplayError(null); // Cancel previous errors
            props
              .request(
                Object.assign(Object.assign({}, props.query), {
                  max_items: pageSize,
                  next_token: nextToken
                })
              )
              .then(payload => {
                setLoading(false);
                const newRows = props.extractRows(payload) || [];
                if (newRows.length === 0) {
                  // no rows in next page -- leave page unchanged, disable next page
                  // button, and show an error banner
                  setNextToken(undefined);
                  setDisplayError(trans.__('Last page reached.'));
                  return;
                }
                // otherwise, merge the two lists of jobs and keep the next token from
                // the new response.
                setRows(rows => [
                  ...(rows || []),
                  ...(props.extractRows(payload) || [])
                ]);
                setNextToken(
                  payload === null || payload === void 0
                    ? void 0
                    : payload.next_token
                );
                setTotalCount(
                  payload === null || payload === void 0
                    ? void 0
                    : payload.total_count
                );
                setPage(newPage);
                setMaxPage(newPage);
              })
              .catch(e => {
                const message = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_4__.getErrorMessage)(e);
                setDisplayError(message);
              });
          };
          const renderedRows = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () =>
              (rows || [])
                .slice(page * pageSize, (page + 1) * pageSize)
                .filter(row => (props.rowFilter ? props.rowFilter(row) : true))
                .map(row => props.renderRow(row)),
            [rows, props.rowFilter, props.renderRow, page, pageSize]
          );
          const handlePageChange = async (e, newPage) => {
            // first clear any display errors
            setDisplayError(null);
            // if newPage <= maxPage, no need to fetch more rows
            if (newPage <= maxPage) {
              setPage(newPage);
              return;
            }
            await fetchMoreRows(newPage);
          };
          const onLastPage = page === maxPage && nextToken === undefined;
          const height =
            (_b = props.height) !== null && _b !== void 0 ? _b : 'auto';
          /**
           * Renders the label to the left of the pagination buttons.
           */
          const labelDisplayedRows = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            ({ from, to, count }) => {
              var _a;
              if (count === -1) {
                const loadedRows =
                  (_a =
                    rows === null || rows === void 0 ? void 0 : rows.length) !==
                    null && _a !== void 0
                    ? _a
                    : 0;
                if (onLastPage) {
                  // for some reason `to` is set incorrectly on the last page in
                  // server-side pagination, so we need to build the string differently
                  // in this case.
                  return trans.__('%1–%2 of %3', from, loadedRows, loadedRows);
                } else {
                  return trans.__(
                    '%1–%2 of %3',
                    from,
                    to,
                    loadedRows + (nextToken === undefined ? '' : '+')
                  );
                }
              } else {
                return trans.__('%1–%2 of %3', from, to, count);
              }
            },
            [rows, onLastPage, trans]
          );
          if (rows && !rows.length) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'p',
              { className: 'jp-notebook-job-list-empty' },
              props.emptyRowMessage
            );
          }
          const tableDiv =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'div',
              {
                style: height === 'auto' ? { flex: 1 } : { maxHeight: height }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ],
                {
                  component:
                    _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__['default'],
                  sx: Object.assign(
                    { height: '100%' },
                    loading ? { pointerEvents: 'none', opacity: 0.5 } : {}
                  )
                },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material_Table__WEBPACK_IMPORTED_MODULE_7__['default'],
                  { stickyHeader: true },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _advanced_table_header__WEBPACK_IMPORTED_MODULE_8__.AdvancedTableHeader,
                    {
                      columns: props.columns,
                      query: props.query,
                      setQuery: props.setQuery
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_9__[
                      'default'
                    ],
                    null,
                    renderedRows
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_10__[
                    'default'
                  ],
                  {
                    component: 'div',
                    sx: {
                      position: 'sticky',
                      bottom: 0,
                      backgroundColor: theme.palette.background.paper,
                      borderTop: `1px solid ${theme.palette.divider}`
                    },
                    count:
                      totalCount !== null && totalCount !== void 0
                        ? totalCount
                        : -1,
                    labelDisplayedRows: labelDisplayedRows,
                    page: page,
                    onPageChange: handlePageChange,
                    nextIconButtonProps: {
                      disabled: onLastPage
                    },
                    rowsPerPage: pageSize,
                    rowsPerPageOptions: [pageSize]
                  }
                )
              )
            );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            displayError &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                { severity: 'error' },
                displayError
              ),
            tableDiv
          );
        }

        /***/
      },

    /***/ './lib/components/button-bar.js':
      /*!**************************************!*\
  !*** ./lib/components/button-bar.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ButtonBar: () => /* binding */ ButtonBar
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );

        function ButtonBar(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
            {
              direction: 'row',
              gap: 2,
              justifyContent: 'flex-end',
              flexWrap: 'wrap'
            },
            props.children
          );
        }

        /***/
      },

    /***/ './lib/components/cluster.js':
      /*!***********************************!*\
  !*** ./lib/components/cluster.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Cluster: () => /* binding */ Cluster
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );

        function Cluster(props) {
          let cls = 'jp-jobs-Cluster';
          cls += ` justify-content-${props.justifyContent || 'flex-start'}`;
          cls += ` align-items-${props.alignItems || 'center'}`;
          cls += ` gap-${props.gap || 1}`;
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { className: cls },
            props.children
          );
        }

        /***/
      },

    /***/ './lib/components/compute-type-picker.js':
      /*!***********************************************!*\
  !*** ./lib/components/compute-type-picker.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ComputeTypePicker: () =>
            /* binding */ ComputeTypePicker
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );

        function ComputeTypePicker(props) {
          const environmentObj = props.environmentList.find(
            env => env.name === props.environment
          );
          if (!environmentObj || !environmentObj.compute_types) {
            return null;
          }
          const computeTypes = environmentObj.compute_types;
          const labelId = `${props.id}-label`;
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel,
              { id: labelId },
              props.label
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Select,
              {
                labelId: labelId,
                name: props.name,
                id: props.id,
                onChange: props.onChange,
                value: props.value,
                MenuProps: {
                  PaperProps: {
                    sx: {
                      maxHeight: '20em'
                    }
                  }
                }
              },
              computeTypes.map((ct, idx) =>
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem,
                  { value: ct, key: idx },
                  ct
                )
              )
            )
          );
        }

        /***/
      },

    /***/ './lib/components/confirm-buttons.js':
      /*!*******************************************!*\
  !*** ./lib/components/confirm-buttons.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ConfirmButton: () => /* binding */ ConfirmButton,
          /* harmony export */ ConfirmDeleteButton: () =>
            /* binding */ ConfirmDeleteButton
          /* harmony export */
        });
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @mui/icons-material/Close */ './node_modules/@mui/icons-material/Close.js'
          );

        function ConfirmButton(props) {
          const [clicked, setClicked] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
          const [confirmed, setConfirmed] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
          // For Safari compatibility, also apply this to the "mouseDown" event, since the
          // "click" event doesn't fire when the user clicks or taps on a button made visible
          // in this way
          const clickHandler = e => {
            props.onConfirm();
            if (props.remainAfterConfirmation) {
              setConfirmed(true);
            }
          };
          return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_0__.Box,
            { sx: { width: '6em' } },
            clicked
              ? props.remainAfterConfirmation && confirmed
                ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_0__.Chip,
                    { label: props.remainText }
                  )
                : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_0__.Button,
                    {
                      variant: 'contained',
                      color: 'error',
                      title: props.name,
                      onClick: clickHandler,
                      onBlur: _ => setClicked(false),
                      style: { visibility: clicked ? 'visible' : 'hidden' },
                      autoFocus: true
                    },
                    props.confirmationText
                  )
              : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_0__.IconButton,
                  { title: props.name, onClick: _ => setClicked(true) },
                  props.icon
                )
          );
        }
        function ConfirmDeleteButton(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const buttonTitle = props.name
            ? trans.__('Delete "%1"', props.name)
            : trans.__('Delete job');
          return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            ConfirmButton,
            {
              name: buttonTitle,
              onConfirm: props.clickHandler,
              confirmationText: trans.__('Delete'),
              icon: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__[
                  'default'
                ],
                { fontSize: 'small' }
              )
            }
          );
        }

        /***/
      },

    /***/ './lib/components/confirm-dialog-buttons.js':
      /*!**************************************************!*\
  !*** ./lib/components/confirm-dialog-buttons.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ConfirmDialogButton: () =>
            /* binding */ ConfirmDialogButton,
          /* harmony export */ ConfirmDialogDeleteButton: () =>
            /* binding */ ConfirmDialogDeleteButton,
          /* harmony export */ ConfirmDialogStopButton: () =>
            /* binding */ ConfirmDialogStopButton
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');

        const ConfirmDialogButton = props => {
          var _a;
          const [open, setOpen] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const theme = (0,
          _mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
          const handleClose = () => {
            setOpen(false);
          };
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
              {
                variant:
                  (_a = props.variant) !== null && _a !== void 0
                    ? _a
                    : 'contained',
                color: props.errorColor ? 'error' : 'primary',
                onClick: _ => setOpen(true)
              },
              props.title
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Dialog,
              { open: open, onClose: handleClose },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogTitle,
                null,
                props.title
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogContent,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogContentText,
                  null,
                  props.dialogText
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogActions,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                  {
                    variant: 'contained',
                    sx: { backgroundColor: theme.palette.grey[600] },
                    onClick: handleClose,
                    autoFocus: true
                  },
                  trans.__('Cancel')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                  {
                    variant: 'contained',
                    color: 'error',
                    onClick: async _ => {
                      handleClose();
                      await props.onConfirm();
                    }
                  },
                  props.dialogConfirmText
                )
              )
            )
          );
        };
        const ConfirmDialogDeleteButton = props => {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            ConfirmDialogButton,
            {
              onConfirm: props.handleDelete,
              title: props.title,
              dialogText: props.dialogText,
              dialogConfirmText: trans.__('Delete'),
              pendingConfirmText: trans.__('Deleting'),
              errorColor: true
            }
          );
        };
        const ConfirmDialogStopButton = props => {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            ConfirmDialogButton,
            {
              onConfirm: props.handleStop,
              title: props.title,
              dialogText: props.dialogText,
              dialogConfirmText: trans.__('Stop'),
              pendingConfirmText: trans.__('Stopping'),
              variant: 'outlined'
            }
          );
        };

        /***/
      },

    /***/ './lib/components/create-schedule-options.js':
      /*!***************************************************!*\
  !*** ./lib/components/create-schedule-options.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CreateScheduleOptions: () =>
            /* binding */ CreateScheduleOptions
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _mui_system_Stack__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @mui/system/Stack */ './node_modules/@mui/system/esm/Stack/Stack.js'
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _schedule_inputs__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./schedule-inputs */ './lib/components/schedule-inputs.js'
          );

        function CreateScheduleOptions(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const labelId = `${props.id}-label`;
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          const handleScheduleOptionsChange = (event, value) => {
            log(
              `create-job.job-type.${
                value === 'Job' ? 'run-now' : 'run-on-schedule'
              }`
            );
            const name = event.target.name;
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), { [name]: value })
            );
          };
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_system_Stack__WEBPACK_IMPORTED_MODULE_3__['default'],
            { spacing: 4 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel,
              { id: labelId },
              props.label
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.RadioGroup,
              {
                'aria-labelledby': labelId,
                name: props.name,
                value: props.model.createType,
                onChange: handleScheduleOptionsChange
              },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel,
                {
                  value: 'Job',
                  control:
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_1__.Radio,
                      null
                    ),
                  label: trans.__('Run now')
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel,
                {
                  value: 'JobDefinition',
                  control:
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_1__.Radio,
                      null
                    ),
                  label: trans.__('Run on a schedule')
                }
              )
            ),
            props.model.createType === 'JobDefinition' &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _schedule_inputs__WEBPACK_IMPORTED_MODULE_4__.ScheduleInputs,
                {
                  idPrefix: `${props.id}-definition-`,
                  model: props.model,
                  handleModelChange: props.handleModelChange,
                  errors: props.errors,
                  handleErrorsChange: props.handleErrorsChange,
                  utcOnly: props.utcOnly
                }
              )
          );
        }

        /***/
      },

    /***/ './lib/components/environment-picker.js':
      /*!**********************************************!*\
  !*** ./lib/components/environment-picker.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ EnvironmentPicker: () =>
            /* binding */ EnvironmentPicker
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');

        function EnvironmentPicker(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          if (props.environmentList.length === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'em',
              null,
              trans.__('Loading …')
            );
          }
          const labelId = `${props.id}-label`;
          // If exactly one environment is present, do not display an environment UI element.
          if (props.environmentList.length === 1) {
            return null;
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel,
              { id: labelId },
              props.label
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Select,
              {
                labelId: labelId,
                label: props.label,
                name: props.name,
                id: props.id,
                onChange: props.onChange,
                value: props.value
              },
              props.environmentList.map((env, idx) =>
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem,
                  { value: env.label, title: env.description, key: idx },
                  env.name
                )
              )
            )
          );
        }

        /***/
      },

    /***/ './lib/components/error-boundary.js':
      /*!******************************************!*\
  !*** ./lib/components/error-boundary.js ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ErrorBoundary: () => /* binding */ ErrorBoundary
          /* harmony export */
        });
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );

        class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1___default()
          .Component {
          constructor(props) {
            super(props);
            this.state = { hasError: false };
          }
          componentDidCatch(error, errorInfo) {
            // errorInfo has full stack trace, which we are not using
            this.setState({ hasError: true, error });
          }
          render() {
            let errorDetail;
            if (typeof this.state.error === 'string') {
              errorDetail = this.state.error;
            } else if (this.state.error instanceof Error) {
              errorDetail = this.state.error.message;
            }
            if (this.state.hasError) {
              return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                'div',
                { className: 'jp-error-boundary' },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack,
                  { spacing: 4 },
                  react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_0__.Alert,
                    { severity: 'error' },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_0__.AlertTitle,
                      null,
                      this.props.alertTitle
                    ),
                    this.props.alertMessage
                  ),
                  errorDetail &&
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      react__WEBPACK_IMPORTED_MODULE_1___default().Fragment,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography,
                        { variant: 'h1' },
                        this.props.detailTitle
                      ),
                      react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'pre',
                        null,
                        errorDetail
                      )
                    )
                )
              );
            }
            return this.props.children;
          }
        }

        /***/
      },

    /***/ './lib/components/files-directory-link.js':
      /*!************************************************!*\
  !*** ./lib/components/files-directory-link.js ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FilesDirectoryLink: () =>
            /* binding */ FilesDirectoryLink
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );

        function FilesDirectoryLink(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
            {
              href: `/lab/tree/${props.jobFile.file_path}`,
              title: trans.__('Open output folder in file browser'),
              onClick: e => {
                e.preventDefault();
                props.app.commands.execute('filebrowser:open-path', {
                  path: props.jobFile.file_path
                });
              }
            },
            trans.__('Files')
          );
        }

        /***/
      },

    /***/ './lib/components/heading.js':
      /*!***********************************!*\
  !*** ./lib/components/heading.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Heading: () => /* binding */ Heading
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );

        function Heading(props) {
          switch (props.level) {
            case 1:
              return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'h1',
                { className: 'jp-jobs-Heading' },
                props.children
              );
            case 2:
              return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'h2',
                { className: 'jp-jobs-Heading' },
                props.children
              );
            case 3:
              return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'h3',
                { className: 'jp-jobs-Heading' },
                props.children
              );
            default:
              return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'h1',
                { className: 'jp-jobs-Heading' },
                props.children
              );
          }
        }

        /***/
      },

    /***/ './lib/components/icon-buttons.js':
      /*!****************************************!*\
  !*** ./lib/components/icon-buttons.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AddButton: () => /* binding */ AddButton,
          /* harmony export */ DeleteButton: () => /* binding */ DeleteButton
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyterlab/ui-components */ 'webpack/sharing/consume/default/@jupyterlab/ui-components'
          );
        /* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_2__
          );

        // Avoid extra vertical padding to force icon to be a square inside a circle
        const zeroLineHeight = { lineHeight: 0 };
        function DeleteButton(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton,
            {
              'aria-label': 'delete',
              onClick: props.onClick,
              title: props.title,
              sx: Object.assign(
                Object.assign({}, zeroLineHeight),
                props.addedStyle
              )
            },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__.closeIcon
                .react,
              null
            )
          );
        }
        function AddButton(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton,
            {
              onClick: props.onClick,
              title: props.title,
              sx: Object.assign(
                Object.assign({}, zeroLineHeight),
                props.addedStyle
              )
            },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__.addIcon
                .react,
              null
            )
          );
        }

        /***/
      },

    /***/ './lib/components/icons.js':
      /*!*********************************!*\
  !*** ./lib/components/icons.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ calendarAddOnIcon: () =>
            /* binding */ calendarAddOnIcon,
          /* harmony export */ calendarMonthIcon: () =>
            /* binding */ calendarMonthIcon,
          /* harmony export */ eventNoteIcon: () => /* binding */ eventNoteIcon
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/ui-components */ 'webpack/sharing/consume/default/@jupyterlab/ui-components'
          );
        /* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _style_icons_calendar_add_on_svg__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../style/icons/calendar-add-on.svg */ './style/icons/calendar-add-on.svg'
          );
        /* harmony import */ var _style_icons_calendar_month_svg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../style/icons/calendar-month.svg */ './style/icons/calendar-month.svg'
          );
        /* harmony import */ var _style_icons_event_note_svg__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../style/icons/event-note.svg */ './style/icons/event-note.svg'
          );
        // This file is based on iconimports.ts in @jupyterlab/ui-components, but is manually generated.

        const calendarAddOnIcon =
          new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
            name: 'jupyterlab-scheduler:calendar-add-on',
            svgstr:
              _style_icons_calendar_add_on_svg__WEBPACK_IMPORTED_MODULE_1__
          });
        const calendarMonthIcon =
          new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
            name: 'jupyterlab-scheduler:calendar-month',
            svgstr: _style_icons_calendar_month_svg__WEBPACK_IMPORTED_MODULE_2__
          });
        const eventNoteIcon =
          new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
            name: 'jupyterlab-scheduler:event-note',
            svgstr: _style_icons_event_note_svg__WEBPACK_IMPORTED_MODULE_3__
          });

        /***/
      },

    /***/ './lib/components/input-file-snapshot.js':
      /*!***********************************************!*\
  !*** ./lib/components/input-file-snapshot.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ InputFileSnapshot: () =>
            /* binding */ InputFileSnapshot
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );

        const InputFileSnapshot = props => {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl,
            { sx: { border: 'unset' } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel,
              { htmlFor: 'jp-input-file-snapshot-id' },
              trans.__('Input file snapshot')
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.OutlinedInput,
              {
                id: 'jp-input-file-snapshot-id',
                inputProps: { className: 'jp-input-file-snapshot' },
                label: trans.__('Input file snapshot'),
                value: props.inputFileSnapshot,
                'aria-describedby': 'jp-input-file-snapshot-helper-text'
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText,
              { id: 'jp-input-file-snapshot-helper-text' },
              trans.__(
                'Drag a file from the file browser and drop it here to update the input file snapshot'
              )
            )
          );
        };

        /***/
      },

    /***/ './lib/components/input-folder-checkbox.js':
      /*!*************************************************!*\
  !*** ./lib/components/input-folder-checkbox.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PackageInputFolderControl: () =>
            /* binding */ PackageInputFolderControl
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );

        function PackageInputFolderControl(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          const inputFilePath = props.inputFile.split('/');
          inputFilePath.pop();
          let helperText;
          if (inputFilePath.length) {
            const inputFolder = `/${inputFilePath.join('/')}`;
            helperText = trans.__(
              'The scheduled job will have access to all files under %1',
              inputFolder
            );
          } else {
            helperText = trans.__(
              "The scheduled job will have access to all files under the input file's folder"
            );
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormGroup,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel,
              {
                control:
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_1__.Checkbox,
                    {
                      onChange: event => {
                        const checkboxEvent = event.target.checked
                          ? 'check'
                          : 'uncheck';
                        log(
                          `create-job.options.package_input_folder.${checkboxEvent}`
                        );
                        props.onChange(event);
                      },
                      name: 'packageInputFolder'
                    }
                  ),
                label: trans.__('Run job with input folder'),
                'aria-describedby': 'jp-package-input-folder-helper-text'
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText,
              { id: 'jp-package-input-folder-helper-text' },
              helperText
            )
          );
        }

        /***/
      },

    /***/ './lib/components/job-definition-row.js':
      /*!**********************************************!*\
  !*** ./lib/components/job-definition-row.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ buildJobDefinitionRow: () =>
            /* binding */ buildJobDefinitionRow
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! cronstrue */ 'webpack/sharing/consume/default/cronstrue/cronstrue'
          );
        /* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            cronstrue__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @jupyterlab/coreutils */ 'webpack/sharing/consume/default/@jupyterlab/coreutils'
          );
        /* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @mui/icons-material/Pause */ './node_modules/@mui/icons-material/Pause.js'
          );
        /* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @mui/icons-material/PlayArrow */ './node_modules/@mui/icons-material/PlayArrow.js'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @mui/material/Stack */ './node_modules/@mui/material/esm/Stack/Stack.js'
          );
        /* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! @mui/material/TableRow */ './node_modules/@mui/material/esm/TableRow/TableRow.js'
          );
        /* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! @mui/material/TableCell */ './node_modules/@mui/material/esm/TableCell/TableCell.js'
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _confirm_buttons__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./confirm-buttons */ './lib/components/confirm-buttons.js'
          );
        /* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ../util/errors */ './lib/util/errors.js');

        function CreatedAt(props) {
          const create_date = props.job.create_time
            ? new Date(props.job.create_time)
            : null;
          const create_display_date = create_date
            ? create_date.toLocaleString()
            : null;
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            create_display_date
          );
        }
        function ScheduleSummary(props) {
          if (props.schedule === undefined) {
            return null;
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            cronstrue__WEBPACK_IMPORTED_MODULE_1___default().toString(
              props.schedule
            )
          );
        }
        function PauseButton(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_4__.useTranslator)(
            'jupyterlab'
          );
          if (!props.jobDef.active) {
            return null;
          }
          const buttonTitle = props.jobDef.name
            ? trans.__('Pause "%1"', props.jobDef.name)
            : trans.__('Pause job definition');
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton,
            { onClick: props.clickHandler, title: buttonTitle },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_icons_material_Pause__WEBPACK_IMPORTED_MODULE_5__['default'],
              { fontSize: 'small' }
            )
          );
        }
        function ResumeButton(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_4__.useTranslator)(
            'jupyterlab'
          );
          if (props.jobDef.active) {
            return null;
          }
          const buttonTitle = props.jobDef.name
            ? trans.__('Resume "%1"', props.jobDef.name)
            : trans.__('Resume job definition');
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton,
            { onClick: props.clickHandler, title: buttonTitle },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ],
              { fontSize: 'small' }
            )
          );
        }
        function buildJobDefinitionRow(
          jobDef,
          app,
          openJobDefinitionDetail,
          deleteRow,
          forceReload,
          trans,
          ss,
          handleApiError
        ) {
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_4__.useEventLogger)();
          const cellContents = [
            // name
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_3__.Link,
              {
                onClick: () => {
                  log('job-definition-list.open-detail');
                  openJobDefinitionDetail(jobDef.job_definition_id);
                },
                title: `Open detail view for "${jobDef.name}"`
              },
              jobDef.name
            ),
            _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PathExt.basename(
              jobDef.input_filename
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              CreatedAt,
              { job: jobDef }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              ScheduleSummary,
              { schedule: jobDef.schedule }
            ),
            jobDef.active ? trans.__('Active') : trans.__('Paused'),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__['default'],
              { spacing: 1, direction: 'row' },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                PauseButton,
                {
                  jobDef: jobDef,
                  clickHandler: async () => {
                    log('job-definition-list.pause');
                    handleApiError(null);
                    ss.pauseJobDefinition(jobDef.job_definition_id)
                      .then(_ => {
                        forceReload();
                      })
                      .catch(e => {
                        const message = (0,
                        _util_errors__WEBPACK_IMPORTED_MODULE_8__.getErrorMessage)(
                          e
                        );
                        handleApiError(message);
                      });
                  }
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                ResumeButton,
                {
                  jobDef: jobDef,
                  clickHandler: async () => {
                    log('job-definition-list.resume');
                    handleApiError(null);
                    ss.resumeJobDefinition(jobDef.job_definition_id)
                      .then(_ => {
                        forceReload();
                      })
                      .catch(e => {
                        const message = (0,
                        _util_errors__WEBPACK_IMPORTED_MODULE_8__.getErrorMessage)(
                          e
                        );
                        handleApiError(message);
                      });
                  }
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _confirm_buttons__WEBPACK_IMPORTED_MODULE_9__.ConfirmDeleteButton,
                {
                  name: jobDef.name,
                  clickHandler: async () => {
                    log('job-definition-list.delete');
                    handleApiError(null);
                    ss.deleteJobDefinition(jobDef.job_definition_id)
                      .then(_ => {
                        deleteRow(jobDef.job_definition_id);
                      })
                      .catch(e => {
                        const message = (0,
                        _util_errors__WEBPACK_IMPORTED_MODULE_8__.getErrorMessage)(
                          e
                        );
                        handleApiError(message);
                      });
                  }
                }
              )
            )
          ];
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__['default'],
            { key: jobDef.job_definition_id },
            cellContents.map((cellContent, idx) =>
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[
                  'default'
                ],
                { key: `${jobDef.job_definition_id}-${idx}` },
                cellContent
              )
            )
          );
        }

        /***/
      },

    /***/ './lib/components/job-file-link.js':
      /*!*****************************************!*\
  !*** ./lib/components/job-file-link.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ JobFileLink: () => /* binding */ JobFileLink
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _files_directory_link__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./files-directory-link */ './lib/components/files-directory-link.js'
          );

        function JobFileLink(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          if (!props.jobFile.file_path) {
            return null;
          }
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          const fileBaseName = props.jobFile.file_path.split('/').pop();
          const title =
            props.jobFile.file_format === 'input'
              ? trans.__('Open input file "%1"', fileBaseName)
              : trans.__('Open output file "%1"', fileBaseName);
          if (props.jobFile.file_format === 'files') {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _files_directory_link__WEBPACK_IMPORTED_MODULE_3__.FilesDirectoryLink,
              { jobFile: props.jobFile, app: props.app }
            );
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
            {
              key: props.jobFile.file_format,
              href: `/lab/tree/${props.jobFile.file_path}`,
              title: title,
              onClick: e => {
                e.preventDefault();
                if (props.parentComponentName) {
                  log(
                    `${props.parentComponentName}.${
                      props.jobFile.file_format === 'input'
                        ? 'open-input-file'
                        : 'open-output-file'
                    }`
                  );
                }
                props.app.commands.execute('docmanager:open', {
                  path: props.jobFile.file_path
                });
              },
              style: { paddingRight: '1em' }
            },
            props.children || props.jobFile.display_name
          );
        }

        /***/
      },

    /***/ './lib/components/job-row.js':
      /*!***********************************!*\
  !*** ./lib/components/job-row.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ buildJobRow: () => /* binding */ buildJobRow
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _confirm_buttons__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./confirm-buttons */ './lib/components/confirm-buttons.js'
          );
        /* harmony import */ var _job_file_link__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./job-file-link */ './lib/components/job-file-link.js'
          );
        /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! .. */ './lib/index.js');
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! @mui/icons-material/Download */ './node_modules/@mui/icons-material/Download.js'
          );
        /* harmony import */ var _mui_icons_material_Stop__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @mui/icons-material/Stop */ './node_modules/@mui/icons-material/Stop.js'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ../util/errors */ './lib/util/errors.js');

        function StopButton(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          const buttonTitle = props.job.name
            ? trans.__('Stop "%1"', props.job.name)
            : trans.__('Stop job');
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            {
              style:
                props.job.status !== 'IN_PROGRESS'
                  ? { visibility: 'hidden' }
                  : {}
            },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _confirm_buttons__WEBPACK_IMPORTED_MODULE_3__.ConfirmButton,
              {
                name: buttonTitle,
                onConfirm: () => {
                  log('job-list.stop-confirm');
                  props.clickHandler();
                },
                confirmationText: trans.__('Stop'),
                icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_icons_material_Stop__WEBPACK_IMPORTED_MODULE_4__[
                    'default'
                  ],
                  { fontSize: 'small' }
                ),
                remainAfterConfirmation: true,
                remainText: trans.__('Stopping')
              }
            )
          );
        }
        function Timestamp(props) {
          const create_date = props.job.create_time
            ? new Date(props.job.create_time)
            : null;
          const create_display_date = create_date
            ? create_date.toLocaleString()
            : null;
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            create_display_date
          );
        }
        function JobFiles(props) {
          if (
            !(props.job.status === 'COMPLETED' || props.job.status === 'FAILED')
          ) {
            return null;
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            props.job.job_files
              .filter(
                jobFile => jobFile.file_format !== 'input' && jobFile.file_path
              )
              .map(jobFile =>
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _job_file_link__WEBPACK_IMPORTED_MODULE_5__.JobFileLink,
                  {
                    jobFile: jobFile,
                    app: props.app,
                    parentComponentName: 'jobs-list'
                  }
                )
              )
          );
        }
        function DownloadFilesButton(props) {
          const [downloading, setDownloading] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton,
            {
              'aria-label': 'download',
              title: trans.__('Download output files for "%1"', props.job.name),
              disabled: downloading,
              onClick: async () => {
                setDownloading(true);
                log('jobs-list.download');
                props.app.commands
                  .execute(
                    ___WEBPACK_IMPORTED_MODULE_6__.CommandIDs.downloadFiles,
                    {
                      id: props.job.job_id,
                      redownload: false
                    }
                  )
                  .then(_ =>
                    new Promise(res => setTimeout(res, 5000)).then(_ => {
                      log('jobs-list.download');
                      setDownloading(false);
                      props.reload();
                    })
                  )
                  .catch(e => {
                    const message = (0,
                    _util_errors__WEBPACK_IMPORTED_MODULE_7__.getErrorMessage)(
                      e
                    );
                    props.setDisplayError(message);
                  });
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_8__[
                'default'
              ],
              null
            )
          );
        }
        function buildJobRow(
          job,
          environmentList,
          app,
          showCreateJob,
          deleteRow,
          translateStatus,
          showDetailView,
          reload,
          setDisplayError
        ) {
          const inputFile = job.job_files.find(
            jobFile => jobFile.file_format === 'input' && jobFile.file_path
          );
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          const cellContents = [
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
              {
                onClick: () => {
                  log('jobs-list.open-detail');
                  showDetailView(job.job_id);
                },
                title: trans.__('Open detail view for "%1"', job.name)
              },
              job.name
            ),
            inputFile
              ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _job_file_link__WEBPACK_IMPORTED_MODULE_5__.JobFileLink,
                  {
                    app: app,
                    jobFile: inputFile,
                    parentComponentName: 'jobs-list'
                  },
                  job.input_filename
                )
              : job.input_filename,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
              null,
              !job.downloaded &&
                (job.status === 'COMPLETED' || job.status === 'FAILED') &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  DownloadFilesButton,
                  {
                    app: app,
                    job: job,
                    reload: reload,
                    setDisplayError: setDisplayError
                  }
                ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                JobFiles,
                { job: job, app: app }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              Timestamp,
              { job: job }
            ),
            translateStatus(job.status),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
              { spacing: 1, direction: 'row' },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _confirm_buttons__WEBPACK_IMPORTED_MODULE_3__.ConfirmDeleteButton,
                {
                  name: job.name,
                  clickHandler: () => {
                    log('jobs-list.delete');
                    app.commands
                      .execute(
                        ___WEBPACK_IMPORTED_MODULE_6__.CommandIDs.deleteJob,
                        {
                          id: job.job_id
                        }
                      )
                      .then(_ => deleteRow(job.job_id))
                      .catch(e => {
                        const message = (0,
                        _util_errors__WEBPACK_IMPORTED_MODULE_7__.getErrorMessage)(
                          e
                        );
                        setDisplayError(message);
                      });
                  }
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                StopButton,
                {
                  job: job,
                  clickHandler: () => {
                    log('jobs-list.stop');
                    app.commands
                      .execute(
                        ___WEBPACK_IMPORTED_MODULE_6__.CommandIDs.stopJob,
                        {
                          id: job.job_id
                        }
                      )
                      .catch(e => {
                        const message = (0,
                        _util_errors__WEBPACK_IMPORTED_MODULE_7__.getErrorMessage)(
                          e
                        );
                        setDisplayError(message);
                      });
                  }
                }
              )
            )
          ];
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.TableRow,
            { key: job.job_id },
            cellContents.map((cellContent, idx) =>
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell,
                { key: `${job.job_id}-${idx}` },
                cellContent
              )
            )
          );
        }

        /***/
      },

    /***/ './lib/components/labeled-value.js':
      /*!*****************************************!*\
  !*** ./lib/components/labeled-value.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LabeledValue: () => /* binding */ LabeledValue
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );

        const LabeledValue = props => {
          const { label, value, style, helperText, InputProps } = props;
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            {
              id: props.id,
              style: Object.assign(
                { display: 'flex', flexDirection: 'column' },
                style
              )
            },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'span',
              { className: 'jp-jobs-LabeledValue-label' },
              label
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'div',
              { style: { display: 'flex', flexDirection: 'column' } },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }
                },
                InputProps === null || InputProps === void 0
                  ? void 0
                  : InputProps.startAdornment,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  'span',
                  { className: 'jp-jobs-LabeledValue-value' },
                  value
                    ? value
                    : !(InputProps === null || InputProps === void 0
                        ? void 0
                        : InputProps.startAdornment) && '\u2014'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'span',
                {
                  className: 'jp-jobs-LabeledValue-label',
                  style: { maxWidth: 'fit-content' }
                },
                helperText
              )
            )
          );
        };

        /***/
      },

    /***/ './lib/components/output-format-picker.js':
      /*!************************************************!*\
  !*** ./lib/components/output-format-picker.js ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ OutputFormatPicker: () =>
            /* binding */ OutputFormatPicker,
          /* harmony export */ outputFormatsForEnvironment: () =>
            /* binding */ outputFormatsForEnvironment
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./stack */ './lib/components/stack.js');
        /* harmony import */ var _cluster__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./cluster */ './lib/components/cluster.js');

        function outputFormatsForEnvironment(environmentList, environment) {
          const environmentObj = environmentList.find(
            env => env.name === environment
          );
          if (!environmentObj || !environmentObj['output_formats']) {
            return null;
          }
          return environmentObj['output_formats'];
        }
        function OutputFormatPicker(props) {
          const outputFormats = outputFormatsForEnvironment(
            props.environmentList,
            props.environment
          );
          // Don't display anything, not even the label, if there are no output formats
          if (outputFormats === null || outputFormats.length === 0) {
            return null;
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _stack__WEBPACK_IMPORTED_MODULE_2__.Stack,
            { size: 2 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel,
              null,
              props.label
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _cluster__WEBPACK_IMPORTED_MODULE_3__.Cluster,
              { gap: 3, justifyContent: 'flex-start' },
              outputFormats.map((of, idx) =>
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel,
                  {
                    key: idx,
                    control:
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_1__.Checkbox,
                        {
                          checked: props.value.some(sof => of.name === sof),
                          id: `${props.id}-${of.name}`,
                          value: of.name,
                          onChange: props.onChange
                        }
                      ),
                    label: of.label
                  }
                )
              )
            )
          );
        }

        /***/
      },

    /***/ './lib/components/parameters-picker.js':
      /*!*********************************************!*\
  !*** ./lib/components/parameters-picker.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ParametersPicker: () =>
            /* binding */ ParametersPicker
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _mui_system_Stack__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @mui/system/Stack */ './node_modules/@mui/system/esm/Stack/Stack.js'
          );
        /* harmony import */ var _components_cluster__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../components/cluster */ './lib/components/cluster.js'
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _icon_buttons__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./icon-buttons */ './lib/components/icon-buttons.js'
          );

        function ParametersPicker(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const checkParameterIndex = idx => {
            const param = props.value[idx];
            // If the parameter is not defined (such as if it was just created) then treat it
            // as invalid.
            const nameInvalid = param === undefined ? true : param.name === '';
            const valueInvalid =
              param === undefined ? true : param.value === '';
            props.handleErrorsChange(
              Object.assign(Object.assign({}, props.errors), {
                [`parameter-${idx}-name`]: nameInvalid
                  ? trans.__('No name specified for this parameter.')
                  : '',
                [`parameter-${idx}-value`]: valueInvalid
                  ? trans.__('No value specified for this parameter.')
                  : ''
              })
            );
          };
          const checkParameterElement = e => {
            const paramInputName = e.name;
            const paramMatch = paramInputName.match(/^parameter-(\d+)/);
            if (!paramMatch || paramMatch.length < 2) {
              return; // Invalid parameter name; should not happen
            }
            checkParameterIndex(parseInt(paramMatch[1]));
          };
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_system_Stack__WEBPACK_IMPORTED_MODULE_3__['default'],
            { spacing: 2 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel,
              null,
              props.label
            ),
            props.value.map((param, paramIdx) => {
              var _a, _b;
              const nameHasError = !!props.errors[`parameter-${paramIdx}-name`];
              const valueHasError =
                !!props.errors[`parameter-${paramIdx}-value`];
              return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _components_cluster__WEBPACK_IMPORTED_MODULE_4__.Cluster,
                {
                  key: paramIdx,
                  justifyContent: 'flex-start',
                  alignItems: 'start'
                },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField,
                  {
                    name: `parameter-${paramIdx}-name`,
                    value: param.name,
                    type: 'text',
                    placeholder: trans.__('Name'),
                    onBlur: e => checkParameterElement(e.target),
                    error: nameHasError,
                    helperText:
                      (_a = props.errors[`parameter-${paramIdx}-name`]) !==
                        null && _a !== void 0
                        ? _a
                        : '',
                    onChange: props.onChange,
                    FormHelperTextProps: { sx: { maxWidth: 'fit-content' } },
                    style: {
                      flexGrow: 1
                    }
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField,
                  {
                    name: `parameter-${paramIdx}-value`,
                    value: param.value,
                    type: 'text',
                    placeholder: trans.__('Value'),
                    onBlur: e => checkParameterElement(e.target),
                    error: valueHasError,
                    helperText:
                      (_b = props.errors[`parameter-${paramIdx}-value`]) !==
                        null && _b !== void 0
                        ? _b
                        : '',
                    onChange: props.onChange,
                    FormHelperTextProps: { sx: { maxWidth: 'fit-content' } },
                    style: {
                      flexGrow: 1
                    }
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _icon_buttons__WEBPACK_IMPORTED_MODULE_5__.DeleteButton,
                  {
                    onClick: () => props.removeParameter(paramIdx),
                    title: trans.__('Delete this parameter'),
                    addedStyle: { marginTop: '14px' }
                  }
                )
              );
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_cluster__WEBPACK_IMPORTED_MODULE_4__.Cluster,
              { justifyContent: 'flex-start' },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _icon_buttons__WEBPACK_IMPORTED_MODULE_5__.AddButton,
                {
                  onClick: e => {
                    // Assume the parameter will be added at the end.
                    const newParamIdx = props.value.length;
                    props.addParameter();
                    checkParameterIndex(newParamIdx);
                    return false;
                  },
                  title: trans.__('Add new parameter')
                }
              )
            )
          );
        }

        /***/
      },

    /***/ './lib/components/schedule-inputs.js':
      /*!*******************************************!*\
  !*** ./lib/components/schedule-inputs.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ScheduleInputs: () =>
            /* binding */ ScheduleInputs,
          /* harmony export */ ScheduleValidator: () =>
            /* binding */ ScheduleValidator
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! cronstrue */ 'webpack/sharing/consume/default/cronstrue/cronstrue'
          );
        /* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            cronstrue__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var tzdata__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! tzdata */ 'webpack/sharing/consume/default/tzdata/tzdata'
          );
        /* harmony import */ var tzdata__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            tzdata__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ../model */ './lib/model.js');

        const emptyScheduleErrors = {
          schedule: '',
          scheduleClock: '',
          scheduleMinute: '',
          scheduleMonthDay: '',
          scheduleWeekDay: ''
        };
        const fieldKeys = [
          'schedule',
          'scheduleClock',
          'scheduleMinute',
          'scheduleMonthDay',
          'scheduleWeekDay'
        ];
        /**
         * Maps schedule field keys to the intervals in which they may appear.
         */
        const intervalsByFieldKey = {
          schedule: ['custom'],
          scheduleClock: ['day', 'week', 'weekday', 'month'],
          scheduleMinute: ['hour'],
          scheduleMonthDay: ['month'],
          scheduleWeekDay: ['week']
        };
        function ScheduleInputs(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_4__.useTranslator)(
            'jupyterlab'
          );
          const validator = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () => new ScheduleValidator(trans),
            [trans]
          );
          const timezones = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () =>
              Object.keys(
                tzdata__WEBPACK_IMPORTED_MODULE_2___default().zones
              ).sort(),
            []
          );
          const timezoneLabel = trans.__('Time zone');
          // maps validator method to each field keys
          const validatorsByFieldKey = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () => ({
              schedule: validator.validateCron.bind(validator),
              scheduleClock: validator.validateClock.bind(validator),
              scheduleMinute: validator.validateMinute.bind(validator),
              scheduleWeekDay: validator.validateWeekDay.bind(validator),
              scheduleMonthDay: validator.validateMonthDay.bind(validator)
            }),
            [validator]
          );
          // validates all schedule fields
          const validateScheduleFields = model => {
            const newErrors = Object.assign({}, props.errors);
            for (const fieldKey of fieldKeys) {
              const validator = validatorsByFieldKey[fieldKey];
              // if this field doesn't have a validator, or if the current schedule
              // interval doesn't render this field, then clear validation errors.
              if (
                !validator ||
                !intervalsByFieldKey[fieldKey].includes(model.scheduleInterval)
              ) {
                newErrors[fieldKey] = '';
                continue;
              }
              // otherwise validate the current field.
              newErrors[fieldKey] = validator(model[fieldKey]);
            }
            props.handleErrorsChange(newErrors);
          };
          /**
           * Effect:
           * - whenever component is mounted, validate all schedule fields
           * - whenever component is unmounted, remove all schedule fields from errors object
           */
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            validateScheduleFields(props.model);
            return () => {
              props.handleErrorsChange(
                Object.assign(
                  Object.assign({}, props.errors),
                  emptyScheduleErrors
                )
              );
            };
          }, []);
          /**
           * Effect: compute derived state on change in fields state
           * - when using easy scheduling, props.model.schedule is derived from the other fields
           * - otherwise, the other fields are derived from props.model.schedule
           */
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (props.model.scheduleInterval === 'custom') {
              const [minute, hour, monthDay, , weekDay] = parseCron(
                props.model.schedule
              );
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  scheduleClock: toClock(hour, minute),
                  scheduleMinute: `${minute}`,
                  scheduleMonthDay: `${monthDay}`,
                  scheduleWeekDay: `${weekDay}`
                })
              );
            } else {
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  schedule: toCron(props.model)
                })
              );
            }
          }, [
            props.model.scheduleInterval,
            props.model.schedule,
            props.model.scheduleMinute,
            props.model.scheduleClock,
            props.model.scheduleMonthDay,
            props.model.scheduleWeekDay
          ]);
          const handleChange = e => {
            const newModel = Object.assign(Object.assign({}, props.model), {
              [e.target.name]: e.target.value
            });
            props.handleModelChange(newModel);
            validateScheduleFields(newModel);
          };
          const handleTimezoneChange = (e, value) => {
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), {
                timezone:
                  value !== null && value !== void 0
                    ? value
                    : _model__WEBPACK_IMPORTED_MODULE_5__.defaultScheduleFields
                        .timezone
              })
            );
          };
          const intervalLabelId = `${props.idPrefix}interval-label`;
          const intervalLabelText = trans.__('Interval');
          const dayOfWeekLabelId = `${props.idPrefix}dayofweek-label`;
          const dayOfWeekText = trans.__('Day of the week');
          const monthDayHelperText = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
            const monthDay = parseInt(props.model.scheduleMonthDay);
            return !isNaN(monthDay) && monthDay > 28
              ? trans.__(
                  'The job will not run in months with fewer than %1 days',
                  props.model.scheduleMonthDay
                )
              : '1–31';
          }, [trans, props.model.scheduleMonthDay]);
          const clockHelperText = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
            const [hours, minutes] = parseClock(props.model.scheduleClock);
            if (hours === undefined || minutes === undefined) {
              return trans.__('00:00-23:59');
            }
            const displayHours = hours % 12 === 0 ? '12' : hours % 12;
            const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
            if (hours < 12) {
              return trans.__('%1:%2 AM', displayHours, displayMinutes);
            } else {
              return trans.__('%1:%2 PM', displayHours, displayMinutes);
            }
          }, [trans, props.model.scheduleClock]);
          const scheduleHelperText = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
            try {
              return cronstrue__WEBPACK_IMPORTED_MODULE_1___default().toString(
                props.model.schedule
              );
            } catch (_a) {
              return '';
            }
          }, [props.model.schedule]);
          const tzOffsetHours = new Date().getTimezoneOffset() / 60;
          let tzMessage;
          if (tzOffsetHours === 0) {
            tzMessage = trans.__('Specify time in UTC (local time)');
          } else if (tzOffsetHours === -1) {
            tzMessage = trans.__(
              'Specify time in UTC (subtract 1 hour from local time)'
            );
          } else if (tzOffsetHours < 0) {
            tzMessage = trans.__(
              'Specify time in UTC (subtract %1 hours from local time)',
              -tzOffsetHours
            );
          } else if (tzOffsetHours === 1) {
            tzMessage = trans.__(
              'Specify time in UTC (add 1 hour to local time)'
            );
          } else if (tzOffsetHours > 0) {
            tzMessage = trans.__(
              'Specify time in UTC (add %1 hours to local time)',
              tzOffsetHours
            );
          }
          const timezonePicker = props.utcOnly
            ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'p',
                null,
                tzMessage,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  'br',
                  null
                ),
                trans.__(
                  'Schedules in UTC are affected by daylight saving time or summer time changes'
                )
              )
            : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_3__.Autocomplete,
                {
                  id: `${props.idPrefix}timezone`,
                  options: timezones,
                  value: props.model.timezone,
                  onChange: handleTimezoneChange,
                  renderInput: params =>
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField,
                      Object.assign({}, params, {
                        name: 'timezone',
                        label: timezoneLabel,
                        variant: 'outlined'
                      })
                    )
                }
              );
          const clockInput =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField,
              {
                label: trans.__('Time'),
                name: 'scheduleClock',
                value: props.model.scheduleClock,
                onChange: handleChange,
                error: !!props.errors.scheduleClock,
                helperText: props.errors.scheduleClock || clockHelperText
              }
            );
          const cronTips =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'p',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'a',
                {
                  href: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
                  target: '_blank'
                },
                trans.__('Get help with cron syntax')
              )
            );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_3__.InputLabel,
                { id: intervalLabelId },
                intervalLabelText
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_3__.Select,
                {
                  labelId: intervalLabelId,
                  label: intervalLabelText,
                  variant: 'outlined',
                  id: `${props.idPrefix}interval`,
                  name: 'scheduleInterval',
                  value: props.model.scheduleInterval,
                  onChange: handleChange
                },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                  { value: 'minute' },
                  trans.__('Minute')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                  { value: 'hour' },
                  trans.__('Hour')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                  { value: 'day' },
                  trans.__('Day')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                  { value: 'week' },
                  trans.__('Week')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                  { value: 'weekday' },
                  trans.__('Weekday')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                  { value: 'month' },
                  trans.__('Month')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                  { value: 'custom' },
                  trans.__('Custom schedule')
                )
              )
            ),
            props.model.scheduleInterval === 'hour' &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField,
                  {
                    label: trans.__('Minutes past the hour'),
                    name: 'scheduleMinute',
                    value: props.model.scheduleMinute,
                    onChange: handleChange,
                    error: !!props.errors.scheduleMinute,
                    helperText: props.errors.scheduleMinute || trans.__('0–59')
                  }
                )
              ),
            props.model.scheduleInterval === 'week' &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl,
                  { error: !!props.errors.scheduleWeekDay },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_3__.InputLabel,
                    { id: dayOfWeekLabelId },
                    dayOfWeekText
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_3__.Select,
                    {
                      labelId: dayOfWeekLabelId,
                      label: dayOfWeekText,
                      variant: 'outlined',
                      id: `${props.idPrefix}dayOfWeek`,
                      name: 'scheduleWeekDay',
                      value: props.model.scheduleWeekDay,
                      onChange: handleChange
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                      { value: '1' },
                      trans.__('Monday')
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                      { value: '2' },
                      trans.__('Tuesday')
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                      { value: '3' },
                      trans.__('Wednesday')
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                      { value: '4' },
                      trans.__('Thursday')
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                      { value: '5' },
                      trans.__('Friday')
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                      { value: '6' },
                      trans.__('Saturday')
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem,
                      { value: '0' },
                      trans.__('Sunday')
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_3__.FormHelperText,
                    null,
                    props.errors.scheduleWeekDay || ''
                  )
                ),
                clockInput,
                timezonePicker
              ),
            (props.model.scheduleInterval === 'weekday' ||
              props.model.scheduleInterval === 'day') &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                null,
                clockInput,
                timezonePicker
              ),
            props.model.scheduleInterval === 'month' &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField,
                  {
                    label: trans.__('Day of the month'),
                    name: 'scheduleMonthDay',
                    value: props.model.scheduleMonthDay,
                    onChange: handleChange,
                    error: !!props.errors.scheduleMonthDay,
                    helperText:
                      props.errors.scheduleMonthDay || monthDayHelperText
                  }
                ),
                clockInput,
                timezonePicker
              ),
            props.model.scheduleInterval === 'custom' &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField,
                  {
                    label: trans.__('cron expression'),
                    variant: 'outlined',
                    onChange: handleChange,
                    value: props.model.schedule,
                    id: `${props.idPrefix}schedule`,
                    name: 'schedule',
                    error: !!props.errors.schedule,
                    helperText: props.errors.schedule || scheduleHelperText
                  }
                ),
                cronTips,
                timezonePicker
              )
          );
        }
        function parseClock(input) {
          // Allow h:mm or hh:mm
          const timeRegex = /^(\d\d?):(\d\d)$/;
          const timeResult = timeRegex.exec(input);
          let hours = undefined;
          let minutes = undefined;
          if (timeResult) {
            hours = parseInt(timeResult[1]);
            minutes = parseInt(timeResult[2]);
          }
          return [hours, minutes];
        }
        // Converts hours and minutes to hh:mm format
        function toClock(hours, minutes) {
          return (
            (hours < 10 ? '0' + hours : hours) +
            ':' +
            (minutes < 10 ? '0' + minutes : minutes)
          );
        }
        /**
         * Extracts cron terms and coerces them into an array of numbers. Ranges are
         * coerced by their first term, e.g. "12-34" is coerced to 12.
         */
        function parseCron(schedule) {
          // default values are all valid and should match model.ts
          const parsedTerms = [0, 0, 1, 1, 1];
          const terms = /(\S*) (\S*) (\S*) (\S*) (\S*)/.exec(schedule.trim());
          if (!terms || terms.length < 6) {
            return parsedTerms;
          }
          for (let i = 0; i < 5; i++) {
            const parsed = parseInt(terms[i + 1]);
            if (!isNaN(parsed)) {
              parsedTerms[i] = parsed;
            }
          }
          return parsedTerms;
        }
        /**
         * Accepts the model and returns its equivalent cron expression.
         */
        function toCron(model) {
          if (model.scheduleInterval === 'custom') {
            return model.schedule;
          }
          if (model.scheduleInterval === 'minute') {
            return '* * * * *';
          }
          if (model.scheduleInterval === 'hour') {
            const minute = model.scheduleMinute;
            return `${minute} * * * *`;
          }
          // other intervals always use clock, so parse it
          const [hour, minute] = parseClock(model.scheduleClock);
          // leave schedule untouched if invalid clock; validation errors should prevent
          // submission anyways.
          if (hour === undefined || minute === undefined) {
            return model.schedule;
          }
          switch (model.scheduleInterval) {
            case 'day': {
              return `${minute} ${hour} * * *`;
            }
            case 'week': {
              const weekDay = model.scheduleWeekDay;
              return `${minute} ${hour} * * ${weekDay}`;
            }
            case 'weekday':
              return `${minute} ${hour} * * MON-FRI`;
            case 'month': {
              const monthDay = model.scheduleMonthDay;
              return `${minute} ${hour} ${monthDay} * *`;
            }
          }
        }
        /**
         * Accepts a translation bundle in its constructor and returns the appropriate
         * error message. If no errors are present, the methods return an empty string.
         */
        class ScheduleValidator {
          constructor(trans) {
            this.trans = trans;
          }
          validateClock(input) {
            const errorMessage = this.trans.__('Time must be in hh:mm format');
            const [hours, minutes] = parseClock(input);
            if (
              hours === undefined ||
              minutes === undefined ||
              hours < 0 ||
              hours > 23 ||
              minutes < 0 ||
              minutes > 59
            ) {
              return errorMessage;
            }
            return '';
          }
          validateMinute(input) {
            const errorMessage = this.trans.__(
              'Minute must be between 0 and 59'
            );
            const minuteRegex = /^(\d\d?)$/;
            const minuteResult = minuteRegex.exec(input);
            let minutes;
            if (minuteResult) {
              minutes = parseInt(minuteResult[1]);
            }
            if (minutes === undefined || minutes < 0 || minutes > 59) {
              return errorMessage;
            }
            return ''; // No error
          }
          validateMonthDay(input) {
            const errorMessage = this.trans.__(
              'Day of the month must be between 1 and 31'
            );
            const monthDayRegex = /^(\d\d?)$/;
            const monthDayResult = monthDayRegex.exec(input);
            let monthDay;
            if (monthDayResult) {
              monthDay = parseInt(monthDayResult[1]);
            }
            if (monthDay === undefined || monthDay < 1 || monthDay > 31) {
              return errorMessage;
            }
            return ''; // No error
          }
          validateWeekDay(input) {
            const errorMessage = this.trans.__(
              'Day of the week must be between Monday and Sunday'
            );
            // OK to compare single chars by lexicographical order
            if (input.length !== 1 || input < '0' || input > '6') {
              return errorMessage;
            }
            return '';
          }
          validateCron(schedule) {
            try {
              cronstrue__WEBPACK_IMPORTED_MODULE_1___default().toString(
                schedule
              );
              // No error
              return '';
            } catch (_a) {
              return this.trans.__('You must provide a valid cron expression.');
            }
          }
        }

        /***/
      },

    /***/ './lib/components/stack.js':
      /*!*********************************!*\
  !*** ./lib/components/stack.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Stack: () => /* binding */ Stack
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );

        function Stack(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            { className: `jp-jobs-Stack size-${props.size || 1}` },
            props.children
          );
        }

        /***/
      },

    /***/ './lib/context.js':
      /*!************************!*\
  !*** ./lib/context.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LogContext: () => /* binding */ LogContext,
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/translation */ 'webpack/sharing/consume/default/@jupyterlab/translation'
          );
        /* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );

        const LogContext =
          react__WEBPACK_IMPORTED_MODULE_1___default().createContext(
            (eventName, eventDetail) => {
              /*noop*/
            }
          );
        // Context to be overridden with JupyterLab context
        const TranslatorContext =
          react__WEBPACK_IMPORTED_MODULE_1___default().createContext(
            _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_0__.nullTranslator
          );
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          TranslatorContext;

        /***/
      },

    /***/ './lib/handler.js':
      /*!************************!*\
  !*** ./lib/handler.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Scheduler: () => /* binding */ Scheduler,
          /* harmony export */ SchedulerService: () =>
            /* binding */ SchedulerService
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/coreutils */ 'webpack/sharing/consume/default/@jupyterlab/coreutils'
          );
        /* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyterlab/services */ 'webpack/sharing/consume/default/@jupyterlab/services'
          );
        /* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__
          );

        const API_NAMESPACE = 'scheduler';
        class SchedulerService {
          constructor(options) {
            this.serverSettings =
              options.serverSettings ||
              _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__.ServerConnection.makeSettings();
          }
          /**
           * Serializes a query object into a URI query string. Assumes the keys and
           * values of the query object as URI-encodable via `encoderURIComponent()`.
           */
          serializeToQueryString(jobQuery) {
            return (
              '?' +
              Object.keys(jobQuery)
                .map(prop => {
                  if (prop === 'sort_by') {
                    const sortList = jobQuery.sort_by;
                    if (sortList === undefined) {
                      return null;
                    }
                    // Serialize sort_by as a series of parameters in the firm dir(name)
                    // where 'dir' is the direction and 'name' the sort field
                    return sortList
                      .map(
                        sort =>
                          `sort_by=${encodeURIComponent(
                            sort.direction
                          )}(${encodeURIComponent(sort.name)})`
                      )
                      .join('&');
                  }
                  const value = jobQuery[prop];
                  return `${encodeURIComponent(prop)}=${encodeURIComponent(
                    value
                  )}`;
                })
                .join('&')
            );
          }
          async getJobDefinition(definition_id) {
            let data;
            try {
              data = await requestAPI(
                this.serverSettings,
                `job_definitions/${definition_id}`,
                {
                  method: 'GET'
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
            return data;
          }
          async getJobDefinitions(jobDefintionsQuery, definition_id) {
            let data;
            const query = definition_id
              ? `/${definition_id}`
              : this.serializeToQueryString(jobDefintionsQuery);
            try {
              data = await requestAPI(
                this.serverSettings,
                `job_definitions${query}`,
                {
                  method: 'GET'
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
            return data;
          }
          async createJobDefinition(definition) {
            let data;
            try {
              data = await requestAPI(this.serverSettings, 'job_definitions', {
                method: 'POST',
                body: JSON.stringify(definition)
              });
            } catch (e) {
              return Promise.reject(e);
            }
            return data;
          }
          async deleteJobDefinition(definition_id) {
            let data;
            try {
              data = await requestAPI(
                this.serverSettings,
                `job_definitions/${definition_id}`,
                {
                  method: 'DELETE'
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
            return data;
          }
          async getJob(job_id) {
            let data;
            let query = '';
            query = `/${job_id}`;
            try {
              data = await requestAPI(this.serverSettings, `jobs${query}`, {
                method: 'GET'
              });
            } catch (e) {
              return Promise.reject(e);
            }
            return data;
          }
          async getJobs(jobQuery, job_id) {
            let data;
            const query = job_id
              ? `/${job_id}`
              : this.serializeToQueryString(jobQuery);
            try {
              data = await requestAPI(this.serverSettings, `jobs${query}`, {
                method: 'GET'
              });
            } catch (e) {
              return Promise.reject(e);
            }
            return data;
          }
          async getjobCount(status) {
            let data = { count: 0 }; // Fail safe
            let query = '';
            if (status) {
              query = `?status=${encodeURIComponent(status)}`;
            }
            try {
              data = await requestAPI(
                this.serverSettings,
                `jobs/count${query}`,
                {
                  method: 'GET'
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
            return data.count;
          }
          async createJob(model) {
            let data;
            try {
              data = await requestAPI(this.serverSettings, 'jobs', {
                method: 'POST',
                body: JSON.stringify(model)
              });
            } catch (e) {
              return Promise.reject(e);
            }
            return data;
          }
          async createJobFromDefinition(definition_id, model) {
            let data;
            try {
              data = await requestAPI(
                this.serverSettings,
                `job_definitions/${definition_id}/jobs`,
                {
                  method: 'POST',
                  body: JSON.stringify(model)
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
            return data;
          }
          async setJobStatus(job_id, status) {
            try {
              await requestAPI(this.serverSettings, `jobs/${job_id}`, {
                method: 'PATCH',
                body: JSON.stringify({ status })
              });
            } catch (e) {
              return Promise.reject(e);
            }
          }
          async getRuntimeEnvironments() {
            let data;
            try {
              data = await requestAPI(
                this.serverSettings,
                'runtime_environments',
                {
                  method: 'GET'
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
            return data;
          }
          async deleteJob(job_id) {
            try {
              await requestAPI(this.serverSettings, `jobs/${job_id}`, {
                method: 'DELETE'
              });
            } catch (e) {
              return Promise.reject(e);
            }
          }
          async pauseJobDefinition(jobDefId) {
            try {
              await requestAPI(
                this.serverSettings,
                `job_definitions/${jobDefId}`,
                {
                  method: 'PATCH',
                  body: JSON.stringify({ active: false })
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }
          async resumeJobDefinition(jobDefId) {
            try {
              await requestAPI(
                this.serverSettings,
                `job_definitions/${jobDefId}`,
                {
                  method: 'PATCH',
                  body: JSON.stringify({ active: true })
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }
          async downloadFiles(jobId, redownload = false) {
            try {
              await requestAPI(
                this.serverSettings,
                `jobs/${jobId}/download_files?redownload=${redownload}`,
                {
                  method: 'GET'
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }
          async updateJobDefinition(jobDefId, model) {
            try {
              await requestAPI(
                this.serverSettings,
                `job_definitions/${jobDefId}`,
                {
                  method: 'PATCH',
                  body: JSON.stringify(model)
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }
        }
        /**
         * Call the API extension
         *
         * @param endPoint API REST end point for the extension
         * @param init Initial values for the request
         * @param expectData Is response data expected
         * @returns The response body interpreted as JSON
         */
        async function requestAPI(
          settings,
          endPoint = '',
          init = {},
          expectData = true
        ) {
          // Make request to Jupyter API
          const requestUrl =
            _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.URLExt.join(
              settings.baseUrl,
              API_NAMESPACE,
              endPoint
            );
          let response;
          try {
            response =
              await _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__.ServerConnection.makeRequest(
                requestUrl,
                init,
                settings
              );
          } catch (error) {
            throw new _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__.ServerConnection.NetworkError(
              error
            );
          }
          let data = await response.text();
          if (expectData && data.length > 0) {
            try {
              data = JSON.parse(data);
            } catch (_a) {
              console.error('Not a JSON response body.', response);
            }
          }
          if (!response.ok) {
            throw new _jupyterlab_services__WEBPACK_IMPORTED_MODULE_1__.ServerConnection.ResponseError(
              response,
              data.message || data
            );
          }
          return data;
        }
        var Scheduler;
        (function (Scheduler) {
          let SortDirection;
          (function (SortDirection) {
            SortDirection['ASC'] = 'asc';
            SortDirection['DESC'] = 'desc';
          })(
            (SortDirection =
              Scheduler.SortDirection || (Scheduler.SortDirection = {}))
          );
        })(Scheduler || (Scheduler = {}));

        /***/
      },

    /***/ './lib/hooks.js':
      /*!**********************!*\
  !*** ./lib/hooks.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ useEventLogger: () =>
            /* binding */ useEventLogger,
          /* harmony export */ useTranslator: () => /* binding */ useTranslator
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./context */ './lib/context.js');

        function useTranslator(bundleId) {
          const translator = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
            _context__WEBPACK_IMPORTED_MODULE_1__['default']
          );
          return translator.load(bundleId);
        }
        function useEventLogger() {
          const logger = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
            _context__WEBPACK_IMPORTED_MODULE_1__.LogContext
          );
          return logger;
        }

        /***/
      },

    /***/ './lib/index.js':
      /*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CommandIDs: () => /* binding */ CommandIDs,
          /* harmony export */ JobsView: () =>
            /* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_13__.JobsView,
          /* harmony export */ NotebookJobsPanelId: () =>
            /* binding */ NotebookJobsPanelId,
          /* harmony export */ Scheduler: () =>
            /* reexport safe */ _tokens__WEBPACK_IMPORTED_MODULE_7__.Scheduler,
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ getLocalPath: () => /* binding */ getLocalPath
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/application */ 'webpack/sharing/consume/default/@jupyterlab/application'
          );
        /* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyterlab/apputils */ 'webpack/sharing/consume/default/@jupyterlab/apputils'
          );
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @jupyterlab/filebrowser */ 'webpack/sharing/consume/default/@jupyterlab/filebrowser'
          );
        /* harmony import */ var _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @jupyterlab/launcher */ 'webpack/sharing/consume/default/@jupyterlab/launcher'
          );
        /* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @jupyterlab/notebook */ 'webpack/sharing/consume/default/@jupyterlab/notebook'
          );
        /* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @jupyterlab/services */ 'webpack/sharing/consume/default/@jupyterlab/services'
          );
        /* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_services__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @jupyterlab/translation */ 'webpack/sharing/consume/default/@jupyterlab/translation'
          );
        /* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_6__
          );
        /* harmony import */ var _advanced_options__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./advanced-options */ './lib/advanced-options.js'
          );
        /* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./components/icons */ './lib/components/icons.js'
          );
        /* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! ./handler */ './lib/handler.js');
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! ./model */ './lib/model.js');
        /* harmony import */ var _notebook_jobs_panel__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./notebook-jobs-panel */ './lib/notebook-jobs-panel.js'
          );
        /* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./tokens */ './lib/tokens.js');
        /* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ./util/errors */ './lib/util/errors.js');
        /* harmony import */ var _util_job_name_validation__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ./util/job-name-validation */ './lib/util/job-name-validation.js'
          );

        var CommandIDs;
        (function (CommandIDs) {
          CommandIDs.deleteJob = 'scheduling:delete-job';
          CommandIDs.createJobFileBrowser =
            'scheduling:create-from-filebrowser';
          CommandIDs.createJobCurrentNotebook =
            'scheduling:create-from-notebook';
          CommandIDs.restoreLayout = 'scheduling:restore-layout';
          CommandIDs.stopJob = 'scheduling:stop-job';
          CommandIDs.downloadFiles = 'scheduling:download-files';
          CommandIDs.listJobsFromLauncher =
            'scheduling:list-jobs-from-launcher';
        })(CommandIDs || (CommandIDs = {}));
        const NotebookJobsPanelId = 'notebook-jobs-panel';

        /**
         * Call API to verify that the server extension is actually installed.
         */
        async function verifyServerExtension(props) {
          const trans = props.translator.load('jupyterlab');
          try {
            await props.api.getJobs({ max_items: 0 });
          } catch (e) {
            // in case of 404, show missing server extension dialog and return
            if (
              e instanceof
                _jupyterlab_services__WEBPACK_IMPORTED_MODULE_5__
                  .ServerConnection.ResponseError &&
              e.response.status === 404
            ) {
              (0, _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showDialog)(
                {
                  title: trans.__(
                    'Jupyter Scheduler server extension not found'
                  ),
                  body: _util_errors__WEBPACK_IMPORTED_MODULE_8__.SERVER_EXTENSION_404_JSX,
                  buttons: [
                    _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.okButton()
                  ]
                }
              ).catch(console.warn);
              return;
            }
          }
        }
        /**
         * Initialization data for the jupyterlab-scheduler extension.
         */
        const schedulerPlugin = {
          id: '@jupyterlab/scheduler:plugin',
          requires: [
            _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_2__.IFileBrowserFactory,
            _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_4__.INotebookTracker,
            _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_6__.ITranslator,
            _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILayoutRestorer,
            _tokens__WEBPACK_IMPORTED_MODULE_7__.Scheduler.IAdvancedOptions,
            _tokens__WEBPACK_IMPORTED_MODULE_7__.Scheduler.TelemetryHandler
          ],
          optional: [
            _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_3__.ILauncher
          ],
          autoStart: true,
          activate: activatePlugin
        };
        // Disable this plugin and replace with custom plugin to change the advanced options UI
        const advancedOptions = {
          id: '@jupyterlab/scheduler:IAdvancedOptions',
          autoStart: true,
          provides:
            _tokens__WEBPACK_IMPORTED_MODULE_7__.Scheduler.IAdvancedOptions,
          activate: app => {
            return _advanced_options__WEBPACK_IMPORTED_MODULE_9__['default'];
          }
        };
        const telemetry = {
          id: '@jupyterlab/scheduler:TelemetryHandler',
          autoStart: true,
          provides:
            _tokens__WEBPACK_IMPORTED_MODULE_7__.Scheduler.TelemetryHandler,
          activate: app => {
            return async e => {
              /*noop*/
            };
          }
        };
        function getSelectedItem(widget) {
          var _a;
          if (widget === null) {
            return null;
          }
          // Get the first selected item.
          const firstItem =
            (_a = widget.selectedItems().next()) === null || _a === void 0
              ? void 0
              : _a.value;
          if (firstItem === null || firstItem === undefined) {
            return null;
          }
          return firstItem;
        }
        // Get only the file base name, with no parent directories and no extension,
        // of the currently selected file.
        function getSelectedFileBaseName(widget) {
          const selectedItem = getSelectedItem(widget);
          if (selectedItem === null) {
            return null;
          }
          const parts = selectedItem.name.split('.');
          if (parts.length === 1) {
            // no extension
            return parts[0];
          }
          parts.splice(-1); // Remove the extension
          return parts.join('.');
        }
        /**
         * Get the file name of the currently selected file with all parent directories, check
         * for and remove "RTC" drive prefix potentially added by jupyter-collaboration.
         */
        function getSelectedFilePath(widget, contents) {
          const selectedItem = getSelectedItem(widget);
          if (selectedItem === null) {
            return null;
          }
          return getLocalPath(selectedItem.path, contents);
        }
        /**
         * Checks if path contains "RTC" drive prefix potentially added by jupyter-collaboration
         * and returns a local path removing "RTC" prefix if needed
         */
        function getLocalPath(path, contents) {
          if (contents.driveName(path) === 'RTC') {
            return contents.localPath(path);
          }
          return path;
        }
        // Get the containing directory of the file at a particular path.
        function getDirectoryFromPath(path) {
          if (path === null) {
            return null;
          }
          // Remove the final portion of the path, the filename.
          const directories = path.split('/');
          directories.pop();
          // Include a trailing slash only if there is at least one subdirectory.
          return directories.join('/') + (directories.length > 0 ? '/' : '');
        }
        function activatePlugin(
          app,
          browserFactory,
          notebookTracker,
          translator,
          restorer,
          advancedOptions,
          telemetryHandler,
          launcher
        ) {
          const trans = translator.load('jupyterlab');
          const api =
            new _handler__WEBPACK_IMPORTED_MODULE_10__.SchedulerService({});
          verifyServerExtension({ api, translator });
          const { commands } = app;
          const fileBrowserTracker = browserFactory.tracker;
          const widgetTracker =
            new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.WidgetTracker(
              {
                namespace: 'jupyterlab-scheduler'
              }
            );
          restorer.restore(widgetTracker, {
            command: CommandIDs.restoreLayout,
            args: widget => widget.content.model.toJson(),
            name: () => 'jupyterlab-scheduler'
          });
          let mainAreaWidget;
          let jobsPanel;
          const eventLogger = (eventName, eventDetail) => {
            if (!eventName) {
              return;
            }
            const eventLog = {
              body: {
                name: `org.jupyter.jupyter-scheduler.${eventName}`
              },
              timestamp: new Date()
            };
            if (eventDetail) {
              eventLog.body.detail = eventDetail;
            }
            telemetryHandler(eventLog).then();
          };
          const showJobsPanel = async data => {
            if (!mainAreaWidget || mainAreaWidget.isDisposed) {
              // Create new jobs panel widget
              jobsPanel =
                new _notebook_jobs_panel__WEBPACK_IMPORTED_MODULE_11__.NotebookJobsPanel(
                  {
                    app,
                    translator,
                    eventLogger,
                    advancedOptions: advancedOptions
                  }
                );
              // Create new main area widget
              mainAreaWidget =
                new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.MainAreaWidget(
                  {
                    content: jobsPanel
                  }
                );
              mainAreaWidget.id = NotebookJobsPanelId;
              mainAreaWidget.title.icon =
                _components_icons__WEBPACK_IMPORTED_MODULE_12__.calendarMonthIcon;
              mainAreaWidget.title.label = trans.__('Notebook Jobs');
              mainAreaWidget.title.closable = true;
            }
            if (!widgetTracker.has(mainAreaWidget)) {
              // Track the state of the widget for later restoration
              widgetTracker.add(mainAreaWidget);
              mainAreaWidget.content.model.stateChanged.connect(() => {
                void widgetTracker.save(mainAreaWidget);
              });
            }
            if (!mainAreaWidget.isAttached) {
              app.shell.add(mainAreaWidget, 'main');
            }
            mainAreaWidget.content.model.fromJson(data);
            mainAreaWidget.content.update();
            app.shell.activateById(mainAreaWidget.id);
          };
          // Commands
          commands.addCommand(CommandIDs.restoreLayout, {
            execute: async args => {
              showJobsPanel(args);
            }
          });
          commands.addCommand(CommandIDs.createJobFileBrowser, {
            execute: async () => {
              var _a, _b, _c;
              eventLogger('file-browser.create-job');
              const widget = fileBrowserTracker.currentWidget;
              const filePath =
                (_a = getSelectedFilePath(
                  widget,
                  app.serviceManager.contents
                )) !== null && _a !== void 0
                  ? _a
                  : '';
              // Update the job form inside the notebook jobs widget
              const newCreateModel = (0,
              _model__WEBPACK_IMPORTED_MODULE_13__.emptyCreateJobModel)();
              newCreateModel.inputFile = filePath;
              newCreateModel.jobName = (0,
              _util_job_name_validation__WEBPACK_IMPORTED_MODULE_14__.MakeNameValid)(
                (_b = getSelectedFileBaseName(widget)) !== null && _b !== void 0
                  ? _b
                  : ''
              );
              newCreateModel.outputPath =
                (_c = getDirectoryFromPath(filePath)) !== null && _c !== void 0
                  ? _c
                  : '';
              await showJobsPanel({
                jobsView:
                  _model__WEBPACK_IMPORTED_MODULE_13__.JobsView.CreateForm,
                createJobModel: newCreateModel
              });
            },
            label: trans.__('Create Notebook Job'),
            icon: _components_icons__WEBPACK_IMPORTED_MODULE_12__.calendarAddOnIcon
          });
          commands.addCommand(CommandIDs.createJobCurrentNotebook, {
            execute: async () => {
              var _a, _b, _c;
              eventLogger('notebook-header.create-job');
              // Get the current notebook's path and name
              const widget = fileBrowserTracker.currentWidget;
              const filePath =
                (_a = getSelectedFilePath(
                  widget,
                  app.serviceManager.contents
                )) !== null && _a !== void 0
                  ? _a
                  : '';
              const fileName =
                (_b = getSelectedFileBaseName(widget)) !== null && _b !== void 0
                  ? _b
                  : '';
              // Update the job form inside the notebook jobs widget
              const newCreateModel = (0,
              _model__WEBPACK_IMPORTED_MODULE_13__.emptyCreateJobModel)();
              newCreateModel.inputFile = filePath;
              newCreateModel.jobName = (0,
              _util_job_name_validation__WEBPACK_IMPORTED_MODULE_14__.MakeNameValid)(
                fileName
              );
              newCreateModel.outputPath =
                (_c = getDirectoryFromPath(filePath)) !== null && _c !== void 0
                  ? _c
                  : '';
              await showJobsPanel({
                jobsView:
                  _model__WEBPACK_IMPORTED_MODULE_13__.JobsView.CreateForm,
                createJobModel: newCreateModel
              });
            },
            label: trans.__('Create a notebook job'),
            icon: _components_icons__WEBPACK_IMPORTED_MODULE_12__.calendarAddOnIcon
          });
          commands.addCommand(CommandIDs.deleteJob, {
            execute: async args => {
              const id = args['id'];
              await api.deleteJob(id);
            },
            // TODO: Use args to name command dynamically
            label: trans.__('Delete Job')
          });
          commands.addCommand(CommandIDs.stopJob, {
            execute: async args => {
              const id = args['id'];
              await api.setJobStatus(id, 'STOPPED');
            },
            // TODO: Use args to name command dynamically
            label: trans.__('Stop Job')
          });
          commands.addCommand(CommandIDs.downloadFiles, {
            execute: async args => {
              const id = args['id'];
              const redownload = args['redownload'];
              await api.downloadFiles(id, redownload);
            }
          });
          // Add to launcher
          if (launcher) {
            commands.addCommand(CommandIDs.listJobsFromLauncher, {
              execute: async () => {
                eventLogger('launcher.show-jobs');
                showJobsPanel({
                  jobsView:
                    _model__WEBPACK_IMPORTED_MODULE_13__.JobsView.ListJobs
                });
              },
              label: trans.__('Notebook Jobs'),
              icon: _components_icons__WEBPACK_IMPORTED_MODULE_12__.eventNoteIcon
            });
            launcher.add({
              command: CommandIDs.listJobsFromLauncher,
              args: {
                launcher: true
              }
            });
          }
        }
        const plugins = [schedulerPlugin, advancedOptions, telemetry];

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = plugins;

        /***/
      },

    /***/ './lib/mainviews/create-job-from-definition.js':
      /*!*****************************************************!*\
  !*** ./lib/mainviews/create-job-from-definition.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CreateJobFromDefinition: () =>
            /* binding */ CreateJobFromDefinition
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../components/heading */ './lib/components/heading.js'
          );
        /* harmony import */ var _components_cluster__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../components/cluster */ './lib/components/cluster.js'
          );
        /* harmony import */ var _components_parameters_picker__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../components/parameters-picker */ './lib/components/parameters-picker.js'
          );
        /* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../handler */ './lib/handler.js');
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ../model */ './lib/model.js');
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @mui/system */ 'webpack/sharing/consume/default/@mui/system/@mui/system'
          );
        /* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_system__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _components_labeled_value__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../components/labeled-value */ './lib/components/labeled-value.js'
          );
        /* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ../util/errors */ './lib/util/errors.js');

        function parameterNameMatch(elementName) {
          const parameterNameMatch = elementName.match(
            /^parameter-(\d+)-name$/
          );
          if (parameterNameMatch === null) {
            return null;
          }
          return parseInt(parameterNameMatch[1]);
        }
        function parameterValueMatch(elementName) {
          const parameterValueMatch = elementName.match(
            /^parameter-(\d+)-value$/
          );
          if (parameterValueMatch === null) {
            return null;
          }
          return parseInt(parameterValueMatch[1]);
        }
        function CreateJobFromDefinition(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_3__.useTranslator)(
            'jupyterlab'
          );
          // A mapping from input names to error messages.
          // If an error message is "truthy" (i.e., not null or ''), we should display the
          // input in an error state and block form submission.
          const [errors, setErrors] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          const api = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () =>
              new _handler__WEBPACK_IMPORTED_MODULE_4__.SchedulerService({}),
            []
          );
          // Advanced options are not editable; do not block submission on them
          const anyErrors = Object.keys(errors).some(key => !!errors[key]);
          const handleInputChange = event => {
            const target = event.target;
            const parameterNameIdx = parameterNameMatch(target.name);
            const parameterValueIdx = parameterValueMatch(target.name);
            const newParams = props.model.parameters || [];
            if (parameterNameIdx !== null) {
              newParams[parameterNameIdx].name = target.value;
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  parameters: newParams
                })
              );
            } else if (parameterValueIdx !== null) {
              newParams[parameterValueIdx].value = target.value;
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  parameters: newParams
                })
              );
            } else {
              const value =
                target.type === 'checkbox' ? target.checked : target.value;
              const name = target.name;
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), { [name]: value })
              );
            }
          };
          // Convert an array of parameters (as used for display) to an object
          // (for submission to the API)
          const serializeParameters = parameters => {
            const jobParameters = {};
            parameters.forEach(param => {
              const { name, value } = param;
              if (jobParameters[name] !== undefined) {
                console.error(
                  'Parameter ' +
                    name +
                    ' already set to ' +
                    jobParameters[name] +
                    ' and is about to be set again to ' +
                    value
                );
              } else {
                jobParameters[name] = value;
              }
            });
            return jobParameters;
          };
          const submitCreateJobRequest = async event => {
            if (anyErrors) {
              console.error(
                'User attempted to submit a submitCreateJobRequest request; button should have been disabled'
              );
              return;
            }
            if (!props.model.jobDefinitionId) {
              console.error(
                'User did not provide a job definition ID to submitCreateJobRequest request'
              );
              return;
            }
            const createJobFromDefinitionModel = {};
            if (props.model.parameters !== undefined) {
              createJobFromDefinitionModel.parameters = serializeParameters(
                props.model.parameters
              );
            }
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), {
                createError: undefined,
                createInProgress: true
              })
            );
            api
              .createJobFromDefinition(
                props.model.jobDefinitionId,
                createJobFromDefinitionModel
              )
              .then(response => {
                log('create-job-from-definition.create-job.success');
                // Switch to the list view with "Job List" active
                props.showListView(
                  _model__WEBPACK_IMPORTED_MODULE_5__.JobsView.ListJobs,
                  response.job_id,
                  props.model.jobName
                );
              })
              .catch(e => {
                const detail = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_6__.getErrorMessage)(e);
                log('create-job-from-definition.create-job.failure', detail);
                props.handleModelChange(
                  Object.assign(Object.assign({}, props.model), {
                    createError: detail,
                    createInProgress: false
                  })
                );
              });
          };
          const removeParameter = idx => {
            const newParams = props.model.parameters || [];
            newParams.splice(idx, 1);
            const newErrors = {};
            for (const formKey in errors) {
              const paramMatch = formKey.match(/^parameter-(\d+)/);
              const paramIdx =
                paramMatch && paramMatch.length >= 2
                  ? parseInt(paramMatch[1])
                  : -1;
              if (paramIdx === -1 || paramIdx < idx) {
                // restore errors associated with params before deleted param and all
                // other form fields
                newErrors[formKey] = errors[formKey];
                continue;
              }
              if (paramIdx === idx) {
                // ignore errors associated with deleted param
                continue;
              }
              // otherwise, restore errors with params after deleted param by offsetting
              // their index by -1
              newErrors[`parameter-${paramIdx - 1}-name`] =
                errors[`parameter-${paramIdx}-name`];
            }
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), {
                parameters: newParams
              })
            );
            setErrors(newErrors);
          };
          const addParameter = () => {
            const newParams = props.model.parameters || [];
            newParams.push({ name: '', value: '' });
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), {
                parameters: newParams
              })
            );
          };
          const formPrefix = 'jp-create-job-';
          const cantSubmit = trans.__(
            'One or more of the fields has an error.'
          );
          const createError = props.model.createError;
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_3__.useEventLogger)();
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_system__WEBPACK_IMPORTED_MODULE_2__.Box,
            { sx: { p: 4 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'form',
              {
                className: `${formPrefix}form`,
                onSubmit: e => e.preventDefault()
              },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_system__WEBPACK_IMPORTED_MODULE_2__.Stack,
                { spacing: 4 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_heading__WEBPACK_IMPORTED_MODULE_7__.Heading,
                  { level: 1 },
                  trans.__('Create Job from Job Definition')
                ),
                createError &&
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                    { severity: 'error' },
                    createError
                  ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_labeled_value__WEBPACK_IMPORTED_MODULE_8__.LabeledValue,
                  {
                    label: trans.__('Job definition ID'),
                    value: props.model.jobDefinitionId
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_parameters_picker__WEBPACK_IMPORTED_MODULE_9__.ParametersPicker,
                  {
                    label: trans.__('Parameters'),
                    name: 'parameters',
                    id: `${formPrefix}parameters`,
                    value: props.model.parameters || [],
                    onChange: handleInputChange,
                    addParameter: addParameter,
                    removeParameter: removeParameter,
                    formPrefix: formPrefix,
                    errors: errors,
                    handleErrorsChange: setErrors
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_cluster__WEBPACK_IMPORTED_MODULE_10__.Cluster,
                  { gap: 3, justifyContent: 'flex-end' },
                  props.model.createInProgress ||
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                        {
                          variant: 'outlined',
                          onClick: e => {
                            log('create-job-from-definition.cancel');
                            props.showListView(
                              _model__WEBPACK_IMPORTED_MODULE_5__.JobsView
                                .ListJobs
                            );
                          }
                        },
                        trans.__('Cancel')
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                        {
                          variant: 'contained',
                          onClick: e => {
                            log('create-job-from-definition.create-job');
                            submitCreateJobRequest(e);
                            return false;
                          },
                          disabled: anyErrors,
                          title: anyErrors ? cantSubmit : ''
                        },
                        trans.__('Create')
                      )
                    ),
                  props.model.createInProgress &&
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                      null,
                      trans.__('Creating job …'),
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress,
                        { size: '30px' }
                      )
                    )
                )
              )
            )
          );
        }

        /***/
      },

    /***/ './lib/mainviews/create-job.js':
      /*!*************************************!*\
  !*** ./lib/mainviews/create-job.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CreateJob: () => /* binding */ CreateJob
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../components/heading */ './lib/components/heading.js'
          );
        /* harmony import */ var _components_cluster__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ../components/cluster */ './lib/components/cluster.js'
          );
        /* harmony import */ var _components_compute_type_picker__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ../components/compute-type-picker */ './lib/components/compute-type-picker.js'
          );
        /* harmony import */ var _components_create_schedule_options__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! ../components/create-schedule-options */ './lib/components/create-schedule-options.js'
          );
        /* harmony import */ var _components_environment_picker__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../components/environment-picker */ './lib/components/environment-picker.js'
          );
        /* harmony import */ var _components_output_format_picker__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../components/output-format-picker */ './lib/components/output-format-picker.js'
          );
        /* harmony import */ var _components_parameters_picker__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! ../components/parameters-picker */ './lib/components/parameters-picker.js'
          );
        /* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ../handler */ './lib/handler.js');
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ../model */ './lib/model.js');
        /* harmony import */ var _util_job_name_validation__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../util/job-name-validation */ './lib/util/job-name-validation.js'
          );
        /* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyterlab/ui-components */ 'webpack/sharing/consume/default/@jupyterlab/ui-components'
          );
        /* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! @mui/icons-material/Error */ './node_modules/@mui/icons-material/Error.js'
          );
        /* harmony import */ var _mui_icons_material_Folder__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! @mui/icons-material/Folder */ './node_modules/@mui/icons-material/Folder.js'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @mui/system */ 'webpack/sharing/consume/default/@mui/system/@mui/system'
          );
        /* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_system__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ../util/errors */ './lib/util/errors.js');
        /* harmony import */ var _components_input_folder_checkbox__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../components/input-folder-checkbox */ './lib/components/input-folder-checkbox.js'
          );

        function parameterNameMatch(elementName) {
          const parameterNameMatch = elementName.match(
            /^parameter-(\d+)-name$/
          );
          if (parameterNameMatch === null) {
            return null;
          }
          return parseInt(parameterNameMatch[1]);
        }
        function parameterValueMatch(elementName) {
          const parameterValueMatch = elementName.match(
            /^parameter-(\d+)-value$/
          );
          if (parameterValueMatch === null) {
            return null;
          }
          return parseInt(parameterValueMatch[1]);
        }
        function CreateJob(props) {
          var _a, _b, _c;
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_4__.useTranslator)(
            'jupyterlab'
          );
          // Cache environment list.
          const [environmentList, setEnvironmentList] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const [advancedOptionsExpanded, setAdvancedOptionsExpanded] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          // A mapping from input names to error messages.
          // If an error message is "truthy" (i.e., not null or ''), we should display the
          // input in an error state and block form submission.
          const [errors, setErrors] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          // Errors for the advanced options
          const [advancedOptionsErrors, setAdvancedOptionsErrors] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          const api = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () =>
              new _handler__WEBPACK_IMPORTED_MODULE_5__.SchedulerService({}),
            []
          );
          // Retrieve the environment list once.
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            const setList = async () => {
              var _a, _b;
              const envList = await api.getRuntimeEnvironments();
              setEnvironmentList(envList);
              // Choose the first environment if none was selected before
              // (this would happen if the create form is used for editing)
              if (props.model.environment === '') {
                // If no default compute type is specified, show the first one by default
                let newComputeType =
                  (_a = envList[0].compute_types) === null || _a === void 0
                    ? void 0
                    : _a[0];
                // Validate that the default compute type is in fact in the list
                if (
                  envList[0].default_compute_type &&
                  envList[0].compute_types &&
                  envList[0].compute_types.includes(
                    envList[0].default_compute_type
                  )
                ) {
                  newComputeType = envList[0].default_compute_type;
                }
                const outputFormats =
                  (_b = (0,
                  _components_output_format_picker__WEBPACK_IMPORTED_MODULE_6__.outputFormatsForEnvironment)(
                    envList,
                    envList[0].name
                  )) === null || _b === void 0
                    ? void 0
                    : _b.map(format => format.name);
                props.handleModelChange(
                  Object.assign(Object.assign({}, props.model), {
                    environment: envList[0].name,
                    computeType: newComputeType,
                    outputFormats: outputFormats
                  })
                );
              }
            };
            setList();
          }, []);
          const envsByName = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
            const obj = {};
            for (const env of environmentList) {
              obj[env.name] = env;
            }
            return obj;
          }, [environmentList]);
          const prevEnvName = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
          /**
           * Effect: when selected environment changes between supporting/not supporting
           * timezones, set the timezone accordingly.
           */
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            var _a;
            const prevEnv =
              envsByName[
                (_a = prevEnvName.current) !== null && _a !== void 0 ? _a : ''
              ];
            const currEnv = envsByName[props.model.environment];
            if (
              currEnv &&
              (!prevEnv || prevEnv.utc_only !== currEnv.utc_only)
            ) {
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  timezone: currEnv.utc_only
                    ? 'UTC'
                    : Intl.DateTimeFormat().resolvedOptions().timeZone
                })
              );
            }
            prevEnvName.current = props.model.environment;
          }, [props.model.environment, envsByName]);
          // If any error message is "truthy" (not null or empty), the form should not be submitted.
          const anyAdvancedErrors = Object.keys(advancedOptionsErrors).some(
            key => !!advancedOptionsErrors[key]
          );
          const anyErrors =
            Object.keys(errors).some(key => !!errors[key]) || anyAdvancedErrors;
          const handleInputChange = event => {
            const target = event.target;
            const parameterNameIdx = parameterNameMatch(target.name);
            const parameterValueIdx = parameterValueMatch(target.name);
            const newParams = props.model.parameters || [];
            if (parameterNameIdx !== null) {
              newParams[parameterNameIdx].name = target.value;
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  parameters: newParams
                })
              );
            } else if (parameterValueIdx !== null) {
              newParams[parameterValueIdx].value = target.value;
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  parameters: newParams
                })
              );
            } else {
              const value =
                target.type === 'checkbox' ? target.checked : target.value;
              const name = target.name;
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), { [name]: value })
              );
            }
          };
          const handleSelectChange = event => {
            var _a, _b;
            const target = event.target;
            // if setting the environment, default the compute type to its default value or its first value
            if (target.name === 'environment') {
              const envObj = environmentList.find(
                env => env.name === target.value
              );
              // Validate that the default compute type is in fact in the list
              let newComputeType =
                (_a =
                  envObj === null || envObj === void 0
                    ? void 0
                    : envObj.compute_types) === null || _a === void 0
                  ? void 0
                  : _a[0];
              if (
                (envObj === null || envObj === void 0
                  ? void 0
                  : envObj.default_compute_type) &&
                (envObj === null || envObj === void 0
                  ? void 0
                  : envObj.compute_types) &&
                (envObj === null || envObj === void 0
                  ? void 0
                  : envObj.compute_types.includes(
                      envObj === null || envObj === void 0
                        ? void 0
                        : envObj.default_compute_type
                    ))
              ) {
                newComputeType = envObj.default_compute_type;
              }
              const newEnvOutputFormats =
                (_b = (0,
                _components_output_format_picker__WEBPACK_IMPORTED_MODULE_6__.outputFormatsForEnvironment)(
                  environmentList,
                  target.value
                )) === null || _b === void 0
                  ? void 0
                  : _b.map(format => format.name);
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  environment: target.value,
                  computeType: newComputeType,
                  outputFormats: newEnvOutputFormats
                })
              );
            } else {
              // otherwise, just set the model
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  [target.name]: target.value
                })
              );
            }
          };
          const handleOutputFormatsChange = event => {
            const outputFormatsList = (0,
            _components_output_format_picker__WEBPACK_IMPORTED_MODULE_6__.outputFormatsForEnvironment)(
              environmentList,
              props.model.environment
            );
            if (outputFormatsList === null) {
              return; // No data about output formats; give up
            }
            const formatName = event.target.value;
            const isChecked = event.target.checked;
            const wasChecked = props.model.outputFormats
              ? props.model.outputFormats.some(of => of === formatName)
              : false;
            const oldOutputFormats = props.model.outputFormats || [];
            // Go from unchecked to checked
            if (isChecked && !wasChecked) {
              // Get the output format matching the given name
              const newFormat = outputFormatsList.find(
                of => of.name === formatName
              );
              if (newFormat) {
                props.handleModelChange(
                  Object.assign(Object.assign({}, props.model), {
                    outputFormats: [...oldOutputFormats, newFormat.name]
                  })
                );
              }
            }
            // Go from checked to unchecked
            else if (!isChecked && wasChecked) {
              props.handleModelChange(
                Object.assign(Object.assign({}, props.model), {
                  outputFormats: oldOutputFormats.filter(
                    of => of !== formatName
                  )
                })
              );
            }
            // If no change in checkedness, don't do anything
          };
          const submitForm = async event => {
            // Collapse the "Advanced Options" section so that users can see
            // errors at the top, if there are any.
            setAdvancedOptionsExpanded(false);
            switch (props.model.createType) {
              case 'Job':
                return submitCreateJobRequest(event);
              case 'JobDefinition':
                return submitCreateJobDefinitionRequest(event);
            }
          };
          // Convert an array of parameters (as used for display) to an object
          // (for submission to the API)
          const serializeParameters = parameters => {
            const jobParameters = {};
            parameters.forEach(param => {
              const { name, value } = param;
              if (jobParameters[name] !== undefined) {
                console.error(
                  'Parameter ' +
                    name +
                    ' already set to ' +
                    jobParameters[name] +
                    ' and is about to be set again to ' +
                    value
                );
              } else {
                jobParameters[name] = value;
              }
            });
            return jobParameters;
          };
          const submitCreateJobRequest = async event => {
            if (anyErrors) {
              console.error(
                'User attempted to submit a createJob request; button should have been disabled'
              );
              return;
            }
            // Serialize parameters as an object.
            const jobOptions = {
              name: props.model.jobName,
              input_uri: props.model.inputFile,
              runtime_environment_name: props.model.environment,
              output_formats: props.model.outputFormats,
              compute_type: props.model.computeType,
              idempotency_token: props.model.idempotencyToken,
              tags: props.model.tags,
              runtime_environment_parameters:
                props.model.runtimeEnvironmentParameters,
              package_input_folder: props.model.packageInputFolder
            };
            if (props.model.parameters !== undefined) {
              jobOptions.parameters = serializeParameters(
                props.model.parameters
              );
            }
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), {
                createError: undefined,
                createInProgress: true
              })
            );
            api
              .createJob(jobOptions)
              .then(response => {
                log('create-job.create-job.success');
                // Switch to the list view with "Job List" active
                props.showListView(
                  _model__WEBPACK_IMPORTED_MODULE_7__.JobsView.ListJobs,
                  response.job_id,
                  jobOptions.name
                );
              })
              .catch(e => {
                const detail = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_8__.getErrorMessage)(e);
                log('create-job.create-job.failure', detail);
                props.handleModelChange(
                  Object.assign(Object.assign({}, props.model), {
                    createError: detail,
                    createInProgress: false
                  })
                );
              });
          };
          const submitCreateJobDefinitionRequest = async event => {
            if (anyErrors) {
              console.error(
                'User attempted to submit a createJobDefinition request; button should have been disabled'
              );
              return;
            }
            const jobDefinitionOptions = {
              name: props.model.jobName,
              input_uri: props.model.inputFile,
              runtime_environment_name: props.model.environment,
              compute_type: props.model.computeType,
              output_formats: props.model.outputFormats,
              tags: props.model.tags,
              runtime_environment_parameters:
                props.model.runtimeEnvironmentParameters,
              schedule: props.model.schedule,
              timezone: props.model.timezone,
              package_input_folder: props.model.packageInputFolder
            };
            if (props.model.parameters !== undefined) {
              jobDefinitionOptions.parameters = serializeParameters(
                props.model.parameters
              );
            }
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), {
                createError: undefined,
                createInProgress: true
              })
            );
            api
              .createJobDefinition(jobDefinitionOptions)
              .then(response => {
                log('create-job.create-job-definition.success');
                // Switch to the list view with "Job Definition List" active
                props.showListView(
                  _model__WEBPACK_IMPORTED_MODULE_7__.JobsView
                    .ListJobDefinitions,
                  response.job_definition_id,
                  jobDefinitionOptions.name
                );
              })
              .catch(e => {
                const detail = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_8__.getErrorMessage)(e);
                log('create-job.create-job-definition.failure', detail);
                props.handleModelChange(
                  Object.assign(Object.assign({}, props.model), {
                    createError: detail,
                    createInProgress: false
                  })
                );
              });
          };
          const removeParameter = idx => {
            const newParams = props.model.parameters || [];
            newParams.splice(idx, 1);
            const newErrors = {};
            for (const formKey in errors) {
              const paramMatch = formKey.match(/^parameter-(\d+)/);
              const paramIdx =
                paramMatch && paramMatch.length >= 2
                  ? parseInt(paramMatch[1])
                  : -1;
              if (paramIdx === -1 || paramIdx < idx) {
                // restore errors associated with params before deleted param and all
                // other form fields
                newErrors[formKey] = errors[formKey];
                continue;
              }
              if (paramIdx === idx) {
                // ignore errors associated with deleted param
                continue;
              }
              // otherwise, restore errors with params after deleted param by offsetting
              // their index by -1
              newErrors[`parameter-${paramIdx - 1}-name`] =
                errors[`parameter-${paramIdx}-name`];
            }
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), {
                parameters: newParams
              })
            );
            setErrors(newErrors);
          };
          const addParameter = () => {
            const newParams = props.model.parameters || [];
            newParams.push({ name: '', value: '' });
            props.handleModelChange(
              Object.assign(Object.assign({}, props.model), {
                parameters: newParams
              })
            );
          };
          const formPrefix = 'jp-create-job-';
          const cantSubmit = trans.__(
            'One or more of the fields has an error.'
          );
          const createError = props.model.createError;
          const homeAdornment =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment,
              { position: 'start' },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_icons_material_Folder__WEBPACK_IMPORTED_MODULE_9__[
                  'default'
                ],
                { fontSize: 'small' }
              ),
              '\u00A0\u00A0/'
            );
          // Does the currently-selected environment accept times in UTC only?
          const utcOnly =
            (_a = envsByName[props.model.environment]) === null || _a === void 0
              ? void 0
              : _a.utc_only;
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_4__.useEventLogger)();
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_system__WEBPACK_IMPORTED_MODULE_3__.Box,
            { sx: { p: 4 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'form',
              {
                className: `${formPrefix}form`,
                onSubmit: e => e.preventDefault()
              },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_system__WEBPACK_IMPORTED_MODULE_3__.Stack,
                { spacing: 4 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_heading__WEBPACK_IMPORTED_MODULE_10__.Heading,
                  { level: 1 },
                  trans.__('Create Job')
                ),
                createError &&
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert,
                    { severity: 'error' },
                    createError
                  ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField,
                  {
                    label: trans.__('Job name'),
                    variant: 'outlined',
                    onChange: e => {
                      // Validate name
                      setErrors(
                        Object.assign(Object.assign({}, errors), {
                          jobName: (0,
                          _util_job_name_validation__WEBPACK_IMPORTED_MODULE_11__.NameError)(
                            e.target.value,
                            trans
                          )
                        })
                      );
                      handleInputChange(e);
                    },
                    error: !!errors['jobName'],
                    helperText:
                      (_b = errors['jobName']) !== null && _b !== void 0
                        ? _b
                        : '',
                    value: props.model.jobName,
                    id: `${formPrefix}jobName`,
                    name: 'jobName'
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField,
                  {
                    label: trans.__('Input file'),
                    variant: 'outlined',
                    onChange: handleInputChange,
                    value: props.model.inputFile,
                    id: `${formPrefix}inputFile`,
                    helperText:
                      (_c = errors['inputFile']) !== null && _c !== void 0
                        ? _c
                        : '',
                    name: 'inputFile',
                    InputProps: {
                      readOnly: true,
                      startAdornment: homeAdornment
                    }
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_environment_picker__WEBPACK_IMPORTED_MODULE_12__.EnvironmentPicker,
                  {
                    label: trans.__('Environment'),
                    name: 'environment',
                    id: `${formPrefix}environment`,
                    onChange: handleSelectChange,
                    environmentList: environmentList,
                    value: props.model.environment
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_input_folder_checkbox__WEBPACK_IMPORTED_MODULE_13__.PackageInputFolderControl,
                  {
                    onChange: handleInputChange,
                    inputFile: props.model.inputFile
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_output_format_picker__WEBPACK_IMPORTED_MODULE_6__.OutputFormatPicker,
                  {
                    label: trans.__('Output formats'),
                    name: 'outputFormat',
                    id: `${formPrefix}outputFormat`,
                    onChange: handleOutputFormatsChange,
                    environmentList: environmentList,
                    environment: props.model.environment,
                    value: props.model.outputFormats || []
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_compute_type_picker__WEBPACK_IMPORTED_MODULE_14__.ComputeTypePicker,
                  {
                    label: trans.__('Compute type'),
                    name: 'computeType',
                    id: `${formPrefix}computeType`,
                    onChange: handleSelectChange,
                    environmentList: environmentList,
                    environment: props.model.environment,
                    value: props.model.computeType
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_parameters_picker__WEBPACK_IMPORTED_MODULE_15__.ParametersPicker,
                  {
                    label: trans.__('Parameters'),
                    name: 'parameters',
                    id: `${formPrefix}parameters`,
                    value: props.model.parameters || [],
                    onChange: handleInputChange,
                    addParameter: addParameter,
                    removeParameter: removeParameter,
                    formPrefix: formPrefix,
                    errors: errors,
                    handleErrorsChange: setErrors
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_2__.Accordion,
                  {
                    defaultExpanded: false,
                    expanded: advancedOptionsExpanded,
                    onChange: (e, expanded) => {
                      log(
                        `create-job.advanced-options.${
                          expanded ? 'expand' : 'collapse'
                        }`
                      );
                      setAdvancedOptionsExpanded(expanded);
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_2__.AccordionSummary,
                    {
                      expandIcon:
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                          _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__
                            .caretDownIcon.react,
                          null
                        ),
                      'aria-controls': 'panel-content',
                      id: 'panel-header'
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_2__.FormLabel,
                      { component: 'legend' },
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _components_cluster__WEBPACK_IMPORTED_MODULE_16__.Cluster,
                        null,
                        anyAdvancedErrors &&
                          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                            _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_17__[
                              'default'
                            ],
                            { color: 'error', 'aria-label': 'error' },
                            trans.__(
                              'There is an error in the advanced options'
                            )
                          ),
                        trans.__('Additional options')
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_2__.AccordionDetails,
                    { id: `${formPrefix}create-panel-content` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      props.advancedOptions,
                      {
                        jobsView:
                          _model__WEBPACK_IMPORTED_MODULE_7__.JobsView
                            .CreateForm,
                        model: props.model,
                        handleModelChange: props.handleModelChange,
                        errors: advancedOptionsErrors,
                        handleErrorsChange: setAdvancedOptionsErrors
                      }
                    )
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_create_schedule_options__WEBPACK_IMPORTED_MODULE_18__.CreateScheduleOptions,
                  {
                    label: trans.__('Schedule'),
                    name: 'createType',
                    id: `${formPrefix}createType`,
                    model: props.model,
                    handleModelChange: props.handleModelChange,
                    errors: errors,
                    handleErrorsChange: setErrors,
                    utcOnly: utcOnly
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_cluster__WEBPACK_IMPORTED_MODULE_16__.Cluster,
                  { gap: 3, justifyContent: 'flex-end' },
                  props.model.createInProgress ||
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_2__.Button,
                        {
                          variant: 'outlined',
                          onClick: e => {
                            log('create-job.cancel');
                            props.showListView(
                              _model__WEBPACK_IMPORTED_MODULE_7__.JobsView
                                .ListJobs
                            );
                          }
                        },
                        trans.__('Cancel')
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_2__.Button,
                        {
                          variant: 'contained',
                          onClick: e => {
                            const eventType =
                              props.model.createType === 'Job'
                                ? 'create-job'
                                : 'create-job-definition';
                            log(`create-job.${eventType}`);
                            submitForm(e);
                            return false;
                          },
                          disabled: anyErrors,
                          title: anyErrors ? cantSubmit : ''
                        },
                        trans.__('Create')
                      )
                    ),
                  props.model.createInProgress &&
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                      null,
                      props.model.createType === 'Job'
                        ? trans.__('Creating job …')
                        : trans.__('Creating job definition …'),
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress,
                        { size: '30px' }
                      )
                    )
                )
              )
            )
          );
        }

        /***/
      },

    /***/ './lib/mainviews/detail-view/detail-view.js':
      /*!**************************************************!*\
  !*** ./lib/mainviews/detail-view/detail-view.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DetailView: () => /* binding */ DetailView
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../../model */ './lib/model.js');
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../hooks */ './lib/hooks.js');
        /* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../../handler */ './lib/handler.js');
        /* harmony import */ var _job_detail__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./job-detail */ './lib/mainviews/detail-view/job-detail.js'
          );
        /* harmony import */ var _job_definition__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./job-definition */ './lib/mainviews/detail-view/job-definition.js'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../components/heading */ './lib/components/heading.js'
          );

        const Loading = props =>
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
            { direction: 'row', justifyContent: 'center' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress,
              { title: props.title }
            )
          );
        /**
         * Renders both the job details view and the job definition details view,
         * dispatching on `props.jobsView`.
         */
        function DetailView(props) {
          var _a, _b;
          const [jobModel, setJobsModel] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const [jobDefinitionModel, setJobDefinitionModel] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const [fetchError, setFetchError] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)();
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const ss = new _handler__WEBPACK_IMPORTED_MODULE_3__.SchedulerService(
            {}
          );
          const fetchJobDetailModel = async () => {
            try {
              const jobFromService = await ss.getJob(props.model.id);
              const jobDetailModel = (0,
              _model__WEBPACK_IMPORTED_MODULE_4__.convertDescribeJobtoJobDetail)(
                jobFromService
              );
              setJobsModel(jobDetailModel);
            } catch (e) {
              setFetchError(e.message);
            }
          };
          const fetchJobDefinitionModel = async () => {
            try {
              const definitionFromService = await ss.getJobDefinition(
                props.model.id
              );
              const jobDefinitionModel = (0,
              _model__WEBPACK_IMPORTED_MODULE_4__.convertDescribeDefinitiontoDefinition)(
                definitionFromService
              );
              setJobDefinitionModel(jobDefinitionModel);
            } catch (e) {
              setFetchError(e.message);
            }
          };
          const fetchModel = () => {
            switch (props.jobsView) {
              case _model__WEBPACK_IMPORTED_MODULE_4__.JobsView.JobDetail:
                fetchJobDetailModel();
                break;
              case _model__WEBPACK_IMPORTED_MODULE_4__.JobsView
                .JobDefinitionDetail:
                fetchJobDefinitionModel();
                break;
            }
          };
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            fetchModel();
          }, [props.jobsView, props.model, props.model.id]);
          const reload = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
            setFetchError(undefined);
            fetchModel();
          }, []);
          const BreadcrumbsStyled =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'div',
              { role: 'presentation' },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs,
                { 'aria-label': 'breadcrumb' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
                  {
                    underline: 'hover',
                    color: 'inherit',
                    onClick: _ => {
                      props.setJobsView(
                        props.jobsView ===
                          _model__WEBPACK_IMPORTED_MODULE_4__.JobsView.JobDetail
                          ? _model__WEBPACK_IMPORTED_MODULE_4__.JobsView
                              .ListJobs
                          : _model__WEBPACK_IMPORTED_MODULE_4__.JobsView
                              .ListJobDefinitions
                      );
                    }
                  },
                  props.jobsView ===
                    _model__WEBPACK_IMPORTED_MODULE_4__.JobsView.JobDetail
                    ? trans.__('Notebook Jobs')
                    : trans.__('Notebook Job Definitions')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography,
                  { color: 'text.primary' },
                  props.jobsView ===
                    _model__WEBPACK_IMPORTED_MODULE_4__.JobsView.JobDetail
                    ? (_a =
                        jobModel === null || jobModel === void 0
                          ? void 0
                          : jobModel.jobName) !== null && _a !== void 0
                      ? _a
                      : ''
                    : (_b =
                        jobDefinitionModel === null ||
                        jobDefinitionModel === void 0
                          ? void 0
                          : jobDefinitionModel.name) !== null && _b !== void 0
                    ? _b
                    : ''
                )
              )
            );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.Box,
            { sx: { p: 4, maxWidth: '1000px' } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
              { spacing: 4 },
              BreadcrumbsStyled,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _components_heading__WEBPACK_IMPORTED_MODULE_5__.Heading,
                { level: 1 },
                props.jobsView ===
                  _model__WEBPACK_IMPORTED_MODULE_4__.JobsView.JobDetail
                  ? trans.__('Job Detail')
                  : trans.__('Job Definition')
              ),
              fetchError &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                  {
                    severity: 'error',
                    onClose: () => setFetchError(undefined)
                  },
                  fetchError
                ),
              props.jobsView ===
                _model__WEBPACK_IMPORTED_MODULE_4__.JobsView.JobDetail &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _job_detail__WEBPACK_IMPORTED_MODULE_6__.JobDetail,
                  {
                    app: props.app,
                    model: jobModel,
                    handleModelChange: fetchJobDetailModel,
                    setCreateJobModel: props.setCreateJobModel,
                    setJobsView: props.setJobsView,
                    // Extension point: optional additional component
                    advancedOptions: props.advancedOptions,
                    reload: reload
                  }
                ),
              props.jobsView ===
                _model__WEBPACK_IMPORTED_MODULE_4__.JobsView
                  .JobDefinitionDetail &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _job_definition__WEBPACK_IMPORTED_MODULE_7__.JobDefinition,
                  {
                    app: props.app,
                    model: jobDefinitionModel,
                    setJobsView: props.setJobsView,
                    refresh: fetchJobDefinitionModel,
                    showCreateJob: props.showCreateJob,
                    showJobDetail: props.showJobDetail,
                    editJobDefinition: props.editJobDefinition,
                    // Extension point: optional additional component
                    advancedOptions: props.advancedOptions,
                    reload: reload
                  }
                ),
              !jobModel &&
                !jobDefinitionModel &&
                !fetchError &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  Loading,
                  { title: trans.__('Loading') }
                )
            )
          );
        }

        /***/
      },

    /***/ './lib/mainviews/detail-view/job-definition.js':
      /*!*****************************************************!*\
  !*** ./lib/mainviews/detail-view/job-definition.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ JobDefinition: () => /* binding */ JobDefinition
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! cronstrue */ 'webpack/sharing/consume/default/cronstrue/cronstrue'
          );
        /* harmony import */ var cronstrue__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            cronstrue__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _components_button_bar__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../components/button-bar */ './lib/components/button-bar.js'
          );
        /* harmony import */ var _components_confirm_dialog_buttons__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../components/confirm-dialog-buttons */ './lib/components/confirm-dialog-buttons.js'
          );
        /* harmony import */ var _components_labeled_value__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../components/labeled-value */ './lib/components/labeled-value.js'
          );
        /* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../../handler */ './lib/handler.js');
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../../hooks */ './lib/hooks.js');
        /* harmony import */ var _list_jobs__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../list-jobs */ './lib/mainviews/list-jobs.js'
          );
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ../../model */ './lib/model.js');
        /* harmony import */ var _job_detail__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./job-detail */ './lib/mainviews/detail-view/job-detail.js'
          );
        /* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ../../util/errors */ './lib/util/errors.js');

        function JobDefinition(props) {
          var _a, _b, _c, _d;
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_3__.useTranslator)(
            'jupyterlab'
          );
          const [displayError, setDisplayError] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const ss = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () =>
              new _handler__WEBPACK_IMPORTED_MODULE_4__.SchedulerService({}),
            []
          );
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_3__.useEventLogger)();
          const ReloadButton =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
              {
                variant: 'contained',
                onClick: e => {
                  log('job-definition-detail.reload');
                  props.reload();
                }
              },
              trans.__('Reload Job Definition')
            );
          const ErrorBanner =
            displayError &&
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
              { severity: 'error' },
              displayError
            );
          if (props.model === null) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
              null,
              ErrorBanner,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _components_button_bar__WEBPACK_IMPORTED_MODULE_5__.ButtonBar,
                null,
                ReloadButton
              )
            );
          }
          const model = props.model;
          const handleDeleteJobDefinition = async () => {
            var _a;
            ss.deleteJobDefinition(
              (_a = model.definitionId) !== null && _a !== void 0 ? _a : ''
            )
              .then(_ =>
                props.setJobsView(
                  _model__WEBPACK_IMPORTED_MODULE_6__.JobsView
                    .ListJobDefinitions
                )
              )
              .catch(e => {
                const message = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_7__.getErrorMessage)(e);
                setDisplayError(message);
              });
          };
          const pauseJobDefinition = async () => {
            setDisplayError(null);
            ss.pauseJobDefinition(model.definitionId)
              .then(_ => props.refresh())
              .catch(e => {
                const message = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_7__.getErrorMessage)(e);
                setDisplayError(message);
              });
          };
          const resumeJobDefinition = async () => {
            setDisplayError(null);
            ss.resumeJobDefinition(model.definitionId)
              .then(_ => props.refresh())
              .catch(e => {
                const message = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_7__.getErrorMessage)(e);
                setDisplayError(message);
              });
          };
          const runJobDefinition = () => {
            var _a;
            const initialState = Object.assign(
              Object.assign(
                {},
                (0, _model__WEBPACK_IMPORTED_MODULE_6__.emptyCreateJobModel)()
              ),
              {
                jobName: model.name,
                inputFile: model.inputFile,
                outputPath:
                  (_a = model.outputPrefix) !== null && _a !== void 0 ? _a : '',
                environment: model.environment,
                computeType: model.computeType,
                runtimeEnvironmentParameters:
                  model.runtimeEnvironmentParameters,
                parameters: model.parameters,
                outputFormats: model.outputFormats,
                jobDefinitionId: model.definitionId
              }
            );
            props.showCreateJob(initialState);
            props.setJobsView(
              _model__WEBPACK_IMPORTED_MODULE_6__.JobsView
                .CreateFromJobDescriptionForm
            );
          };
          let cronString;
          try {
            if (model.schedule !== undefined) {
              cronString =
                cronstrue__WEBPACK_IMPORTED_MODULE_2___default().toString(
                  model.schedule
                );
            }
          } catch (_e) {
            // Do nothing; let the errors or nothing display instead
          }
          const DefinitionButtonBar =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_button_bar__WEBPACK_IMPORTED_MODULE_5__.ButtonBar,
              null,
              ReloadButton,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                {
                  variant: 'outlined',
                  onClick: e => {
                    log('job-definition-detail.run');
                    runJobDefinition();
                  }
                },
                trans.__('Run Job')
              ),
              model.active
                ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                    {
                      variant: 'outlined',
                      onClick: e => {
                        log('job-definition-detail.pause');
                        pauseJobDefinition();
                      }
                    },
                    trans.__('Pause')
                  )
                : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                    {
                      variant: 'outlined',
                      onClick: e => {
                        log('job-definition-detail.resume');
                        resumeJobDefinition();
                      }
                    },
                    trans.__('Resume')
                  ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                {
                  variant: 'outlined',
                  onClick: () => {
                    log('job-definition-detail.edit');
                    props.editJobDefinition(model);
                  }
                },
                trans.__('Edit Job Definition')
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _components_confirm_dialog_buttons__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialogDeleteButton,
                {
                  handleDelete: async () => {
                    log('job-definition-detail.delete');
                    handleDeleteJobDefinition();
                  },
                  title: trans.__('Delete Job Definition'),
                  dialogText: trans.__(
                    'Are you sure that you want to delete this job definition?'
                  )
                }
              )
            );
          const jobDefinitionFields = [
            [{ value: model.name, label: trans.__('Name') }],
            [
              {
                value: model.inputFile,
                label: trans.__('Input file')
              },
              {
                value: model.outputPath,
                label: trans.__('Output directory')
              }
            ],
            [
              {
                value: model.environment,
                label: trans.__('Environment')
              },
              {
                value: model.active ? trans.__('Active') : trans.__('Paused'),
                label: trans.__('Status')
              }
            ],
            [
              {
                value: (0,
                _job_detail__WEBPACK_IMPORTED_MODULE_9__.timestampLocalize)(
                  (_a = model.createTime) !== null && _a !== void 0 ? _a : ''
                ),
                label: trans.__('Created at')
              },
              {
                value: (0,
                _job_detail__WEBPACK_IMPORTED_MODULE_9__.timestampLocalize)(
                  (_b = model.updateTime) !== null && _b !== void 0 ? _b : ''
                ),
                label: trans.__('Updated at')
              }
            ],
            [
              {
                value:
                  (_c = model.schedule) !== null && _c !== void 0 ? _c : '',
                helperText:
                  cronString !== null && cronString !== void 0
                    ? cronString
                    : '',
                label: trans.__('Schedule')
              },
              {
                value:
                  (_d = model.timezone) !== null && _d !== void 0 ? _d : '',
                label: trans.__('Time zone')
              }
            ],
            [
              {
                value: model.packageInputFolder
                  ? trans.__('Yes')
                  : trans.__('No'),
                label: trans.__('Ran with input folder')
              }
            ]
          ];
          const JobDefinition =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Card,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                  { spacing: 4 },
                  jobDefinitionFields.map(propsRow =>
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                      { direction: 'row', gap: 2, flexWrap: 'wrap' },
                      propsRow.map(textProp =>
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                          _components_labeled_value__WEBPACK_IMPORTED_MODULE_10__.LabeledValue,
                          Object.assign({}, textProp, {
                            style: {
                              flex: '1 1 49%'
                            }
                          })
                        )
                      )
                    )
                  )
                )
              )
            );
          const AdvancedOptions =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Card,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                  { component: 'form', spacing: 4 },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormLabel,
                    { component: 'legend' },
                    trans.__('Advanced Options')
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    props.advancedOptions,
                    {
                      jobsView:
                        _model__WEBPACK_IMPORTED_MODULE_6__.JobsView
                          .JobDefinitionDetail,
                      model: model,
                      handleModelChange: _ => {
                        return;
                      },
                      errors: {},
                      handleErrorsChange: _ => {
                        return;
                      }
                    }
                  )
                )
              )
            );
          const JobsList =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Card,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                  { spacing: 3 },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _list_jobs__WEBPACK_IMPORTED_MODULE_11__.ListJobsTable,
                    {
                      app: props.app,
                      showCreateJob: props.showCreateJob,
                      showJobDetail: props.showJobDetail,
                      jobDefinitionId: model.definitionId,
                      pageSize: 5,
                      emptyRowMessage: trans.__(
                        'No notebook jobs associated with this job definition.'
                      )
                    }
                  )
                )
              )
            );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            ErrorBanner,
            DefinitionButtonBar,
            JobDefinition,
            JobsList,
            AdvancedOptions
          );
        }

        /***/
      },

    /***/ './lib/mainviews/detail-view/job-detail.js':
      /*!*************************************************!*\
  !*** ./lib/mainviews/detail-view/job-detail.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ JobDetail: () => /* binding */ JobDetail,
          /* harmony export */ TextFieldStyled: () =>
            /* binding */ TextFieldStyled,
          /* harmony export */ timestampLocalize: () =>
            /* binding */ timestampLocalize
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _components_button_bar__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../components/button-bar */ './lib/components/button-bar.js'
          );
        /* harmony import */ var _components_confirm_dialog_buttons__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../components/confirm-dialog-buttons */ './lib/components/confirm-dialog-buttons.js'
          );
        /* harmony import */ var _components_job_file_link__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../components/job-file-link */ './lib/components/job-file-link.js'
          );
        /* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../../handler */ './lib/handler.js');
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../hooks */ './lib/hooks.js');
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../../model */ './lib/model.js');
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ../.. */ './lib/index.js');
        /* harmony import */ var _components_labeled_value__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../components/labeled-value */ './lib/components/labeled-value.js'
          );
        /* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ../../util/errors */ './lib/util/errors.js');

        const TextFieldStyled = props =>
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField,
            Object.assign({}, props, {
              variant: 'outlined',
              InputProps: Object.assign(Object.assign({}, props.InputProps), {
                readOnly: true
              }),
              FormHelperTextProps: { sx: { maxWidth: 'fit-content' } }
            })
          );

        const timestampLocalize = time => {
          if (time === '') {
            return '';
          } else {
            const display_date = new Date(time);
            const local_display_date = display_date
              ? display_date.toLocaleString()
              : '';
            return local_display_date;
          }
        };
        function JobDetail(props) {
          var _a, _b, _c, _d;
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const [downloading, setDownloading] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [displayError, setDisplayError] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const ss = new _handler__WEBPACK_IMPORTED_MODULE_3__.SchedulerService(
            {}
          );
          const translateStatus = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            status => {
              // This may look inefficient, but it's intended to call the `trans` function
              // with distinct, static values, so that code analyzers can pick up all the
              // needed source strings.
              switch (status) {
                case 'CREATED':
                  return trans.__('Created');
                case 'QUEUED':
                  return trans.__('Queued');
                case 'COMPLETED':
                  return trans.__('Completed');
                case 'FAILED':
                  return trans.__('Failed');
                case 'IN_PROGRESS':
                  return trans.__('In progress');
                case 'STOPPED':
                  return trans.__('Stopped');
                case 'STOPPING':
                  return trans.__('Stopping');
                default:
                  return '';
              }
            },
            [trans]
          );
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          const handleDeleteJob = async () => {
            var _a, _b;
            log('job-detail.delete');
            setDisplayError(null);
            ss.deleteJob(
              (_b =
                (_a = props.model) === null || _a === void 0
                  ? void 0
                  : _a.jobId) !== null && _b !== void 0
                ? _b
                : ''
            )
              .then(_ =>
                props.setJobsView(
                  _model__WEBPACK_IMPORTED_MODULE_4__.JobsView.ListJobs
                )
              )
              .catch(e => {
                const message = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_5__.getErrorMessage)(e);
                setDisplayError(message);
              });
          };
          const handleStopJob = async () => {
            var _a;
            log('job-detail.stop');
            setDisplayError(null);
            props.app.commands
              .execute('scheduling:stop-job', {
                id:
                  (_a = props.model) === null || _a === void 0
                    ? void 0
                    : _a.jobId
              })
              .then(_ => props.handleModelChange())
              .catch(e => {
                const message = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_5__.getErrorMessage)(e);
                setDisplayError(message);
              });
          };
          const downloadFiles = async () => {
            var _a;
            log('job-detail.download');
            setDownloading(true);
            props.app.commands
              .execute(
                ___WEBPACK_IMPORTED_MODULE_6__.CommandIDs.downloadFiles,
                {
                  id:
                    (_a = props.model) === null || _a === void 0
                      ? void 0
                      : _a.jobId,
                  redownload: false
                }
              )
              .then(() => {
                new Promise(res => setTimeout(res, 5000)).then(_ =>
                  props.handleModelChange().then(_ => setDownloading(false))
                );
              })
              .catch(e => {
                const message = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_5__.getErrorMessage)(e);
                setDisplayError(message);
                setDownloading(false);
              });
          };
          const JobButtonBar =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_button_bar__WEBPACK_IMPORTED_MODULE_7__.ButtonBar,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                {
                  variant: 'contained',
                  onClick: e => {
                    log('job-detail.reload');
                    props.reload();
                  }
                },
                trans.__('Reload Job')
              ),
              props.model !== null &&
                props.model.downloaded === false &&
                (props.model.status === 'COMPLETED' ||
                  props.model.status === 'FAILED') &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                  {
                    variant: 'outlined',
                    onClick: downloadFiles,
                    disabled: downloading
                  },
                  trans.__('Download Job Files')
                ),
              props.model !== null &&
                props.model.status === 'IN_PROGRESS' &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_confirm_dialog_buttons__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialogStopButton,
                  {
                    handleStop: handleStopJob,
                    title: trans.__('Stop Job'),
                    dialogText: trans.__(
                      'Are you sure that you want to stop this job?'
                    )
                  }
                ),
              props.model !== null &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _components_confirm_dialog_buttons__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialogDeleteButton,
                  {
                    handleDelete: handleDeleteJob,
                    title: trans.__('Delete Job'),
                    dialogText: trans.__(
                      'Are you sure that you want to delete this job?'
                    )
                  }
                )
            );
          // If we don't have a set model, don't display anything else.
          if (props.model === null) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
              null,
              displayError &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                  { severity: 'error' },
                  displayError
                ),
              JobButtonBar
            );
          }
          const inputJobFile = props.model.job_files.find(
            jobFile => jobFile.file_format === 'input' && jobFile.file_path
          );
          const coreOptionsFields = [
            [
              { value: props.model.jobName, label: trans.__('Job name') },
              { value: props.model.jobId, label: trans.__('Job ID') }
            ],
            [
              {
                label: trans.__('Input file'),
                value: inputJobFile
                  ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _components_job_file_link__WEBPACK_IMPORTED_MODULE_9__.JobFileLink,
                      {
                        app: props.app,
                        jobFile: inputJobFile,
                        parentComponentName: 'job-detail'
                      },
                      props.model.inputFile
                    )
                  : props.model.inputFile
              },
              {
                value: props.model.environment,
                label: trans.__('Environment')
              }
            ],
            [
              {
                value: translateStatus(props.model.status),
                label: trans.__('Status')
              },
              {
                value: timestampLocalize(
                  (_a = props.model.createTime) !== null && _a !== void 0
                    ? _a
                    : ''
                ),
                label: trans.__('Created at')
              }
            ],
            [
              {
                value: timestampLocalize(
                  (_b = props.model.updateTime) !== null && _b !== void 0
                    ? _b
                    : ''
                ),
                label: trans.__('Updated at')
              },
              {
                value: timestampLocalize(
                  (_c = props.model.startTime) !== null && _c !== void 0
                    ? _c
                    : ''
                ),
                label: trans.__('Start time')
              }
            ],
            [
              {
                value: timestampLocalize(
                  (_d = props.model.endTime) !== null && _d !== void 0 ? _d : ''
                ),
                label: trans.__('End time')
              },
              {
                value: props.model.packageInputFolder
                  ? trans.__('Yes')
                  : trans.__('No'),
                label: trans.__('Ran with input folder')
              }
            ]
          ];
          const hasOutputs =
            (props.model.status === 'COMPLETED' ||
              props.model.status === 'FAILED') &&
            props.model.job_files.some(
              jobFile => jobFile.file_format !== 'input' && jobFile.file_path
            );
          const CoreOptions =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Card,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                  { spacing: 4 },
                  coreOptionsFields.map(propsRow =>
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                      { direction: 'row', gap: 2, flexWrap: 'wrap' },
                      propsRow.map(textProp =>
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                          _components_labeled_value__WEBPACK_IMPORTED_MODULE_10__.LabeledValue,
                          Object.assign({}, textProp, {
                            style: {
                              flex: '1 1 49%'
                            }
                          })
                        )
                      )
                    )
                  ),
                  hasOutputs &&
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormLabel,
                        { component: 'legend' },
                        trans.__('Output files')
                      ),
                      props.model.job_files
                        .filter(
                          jobFile =>
                            jobFile.file_format !== 'input' && jobFile.file_path
                        )
                        .map(jobFile =>
                          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                            _components_job_file_link__WEBPACK_IMPORTED_MODULE_9__.JobFileLink,
                            {
                              jobFile: jobFile,
                              app: props.app,
                              parentComponentName: 'job-detail'
                            }
                          )
                        )
                    )
                )
              )
            );
          const Parameters =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Card,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormLabel,
                  { sx: { mb: 4 }, component: 'legend' },
                  trans.__('Parameters')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                  { spacing: 4 },
                  props.model.parameters &&
                    props.model.parameters.map((parameter, idx) =>
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                        {
                          key: idx,
                          direction: 'row',
                          gap: 2,
                          flexWrap: 'wrap'
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                          _components_labeled_value__WEBPACK_IMPORTED_MODULE_10__.LabeledValue,
                          {
                            label: trans.__('Parameter name'),
                            value: parameter.name,
                            style: {
                              flex: '1 1 49%'
                            }
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                          _components_labeled_value__WEBPACK_IMPORTED_MODULE_10__.LabeledValue,
                          {
                            label: trans.__('Parameter value'),
                            value: parameter.value,
                            style: {
                              flex: '1 1 49%'
                            }
                          }
                        )
                      )
                    )
                )
              )
            );
          const AdvancedOptions =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Card,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
                  { component: 'form', spacing: 4 },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _mui_material__WEBPACK_IMPORTED_MODULE_1__.FormLabel,
                    { component: 'legend' },
                    trans.__('Advanced Options')
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    props.advancedOptions,
                    {
                      jobsView:
                        _model__WEBPACK_IMPORTED_MODULE_4__.JobsView.JobDetail,
                      model: props.model,
                      handleModelChange: _ => {
                        return;
                      },
                      errors: {},
                      handleErrorsChange: _ => {
                        return;
                      }
                    }
                  )
                )
              )
            );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            displayError &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                { severity: 'error' },
                displayError
              ),
            props.model.statusMessage &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                { severity: 'error' },
                props.model.statusMessage
              ),
            JobButtonBar,
            CoreOptions,
            Parameters,
            AdvancedOptions
          );
        }

        /***/
      },

    /***/ './lib/mainviews/edit-job-definition.js':
      /*!**********************************************!*\
  !*** ./lib/mainviews/edit-job-definition.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ EditJobDefinition: () =>
            /* binding */ EditJobDefinition
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../components/heading */ './lib/components/heading.js'
          );
        /* harmony import */ var _components_cluster__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../components/cluster */ './lib/components/cluster.js'
          );
        /* harmony import */ var _components_schedule_inputs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../components/schedule-inputs */ './lib/components/schedule-inputs.js'
          );
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ../model */ './lib/model.js');
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../handler */ './lib/handler.js');
        /* harmony import */ var _components_input_file_snapshot__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../components/input-file-snapshot */ './lib/components/input-file-snapshot.js'
          );
        /* harmony import */ var _components_labeled_value__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../components/labeled-value */ './lib/components/labeled-value.js'
          );
        /* harmony import */ var _detail_view_job_detail__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./detail-view/job-detail */ './lib/mainviews/detail-view/job-detail.js'
          );
        /* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../util/errors */ './lib/util/errors.js');

        function EditJobDefinitionBody(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          const ss = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () =>
              new _handler__WEBPACK_IMPORTED_MODULE_3__.SchedulerService({}),
            []
          );
          const [loading, setLoading] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [utcOnly, setUtcOnly] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [saving, setSaving] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
          const [fieldErrors, setFieldErrors] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          const [displayError, setDisplayError] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const hasErrors = Object.keys(fieldErrors).some(
            key => !!fieldErrors[key]
          );
          /**
           * Effect: fetch environment list on initial render, and set timezone
           * accordingly.
           */
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            async function fetchEnvironments() {
              setLoading(true);
              const envs = await ss.getRuntimeEnvironments();
              const env = envs.find(
                env => env.name === props.model.environment
              );
              if (env === null || env === void 0 ? void 0 : env.utc_only) {
                setUtcOnly(true);
                props.handleModelChange(
                  Object.assign(Object.assign({}, props.model), {
                    timezone: 'UTC'
                  })
                );
              }
              setLoading(false);
            }
            fetchEnvironments();
          }, []);
          const handleSubmit = async () => {
            if (hasErrors) {
              return;
            }
            setSaving(true);
            ss.updateJobDefinition(props.model.definitionId, {
              schedule: props.model.schedule,
              timezone: props.model.timezone,
              input_uri: props.model.inputFileSnapshot
            })
              .then(() => {
                props.showJobDefinitionDetail(props.model.definitionId);
              })
              .catch(e => {
                setSaving(false);
                const message = (0,
                _util_errors__WEBPACK_IMPORTED_MODULE_4__.getErrorMessage)(e);
                setDisplayError(message);
              });
          };
          if (loading) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress,
              null
            );
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
            { spacing: 4, maxWidth: 500 },
            displayError &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                { severity: 'error', onClose: () => setDisplayError(null) },
                displayError
              ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_input_file_snapshot__WEBPACK_IMPORTED_MODULE_5__.InputFileSnapshot,
              { inputFileSnapshot: props.model.inputFileSnapshot }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel,
              null,
              trans.__('Schedule')
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_schedule_inputs__WEBPACK_IMPORTED_MODULE_6__.ScheduleInputs,
              {
                idPrefix: '',
                model: props.model,
                handleModelChange: props.handleModelChange,
                errors: fieldErrors,
                handleErrorsChange: newErrors => setFieldErrors(newErrors),
                utcOnly: utcOnly
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_cluster__WEBPACK_IMPORTED_MODULE_7__.Cluster,
              { gap: 3, justifyContent: 'flex-end' },
              saving
                ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                    null,
                    trans.__('Saving changes …'),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress,
                      { size: 30 }
                    )
                  )
                : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                      {
                        variant: 'outlined',
                        onClick: () => {
                          log('job-definition-edit.cancel');
                          props.showJobDefinitionDetail(
                            props.model.definitionId
                          );
                        }
                      },
                      trans.__('Cancel')
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                      {
                        color: 'primary',
                        variant: 'contained',
                        onClick: e => {
                          log('job-definition-edit.save');
                          handleSubmit();
                        },
                        disabled: hasErrors
                      },
                      trans.__('Save Changes')
                    )
                  )
            )
          );
        }
        function EditJobDefinition(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.Box,
            { sx: { p: 4 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
              { spacing: 4 },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs,
                { 'aria-label': 'breadcrumb' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
                  {
                    underline: 'hover',
                    color: 'inherit',
                    onClick: () => {
                      props.showListView(
                        _model__WEBPACK_IMPORTED_MODULE_8__.JobsView
                          .ListJobDefinitions
                      );
                    }
                  },
                  trans.__('Job Definitions')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
                  {
                    underline: 'hover',
                    color: 'inherit',
                    onClick: () => {
                      props.showJobDefinitionDetail(props.model.definitionId);
                    }
                  },
                  props.model.name
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography,
                  { color: 'text.primary' },
                  trans.__('Edit')
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _components_heading__WEBPACK_IMPORTED_MODULE_9__.Heading,
                { level: 1 },
                trans.__('Edit Job Definition')
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _components_labeled_value__WEBPACK_IMPORTED_MODULE_10__.LabeledValue,
                {
                  value: (0,
                  _detail_view_job_detail__WEBPACK_IMPORTED_MODULE_11__.timestampLocalize)(
                    props.model.updateTime
                  ),
                  label: trans.__('Job definition updated at')
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                EditJobDefinitionBody,
                Object.assign({}, props)
              )
            )
          );
        }

        /***/
      },

    /***/ './lib/mainviews/list-jobs.js':
      /*!************************************!*\
  !*** ./lib/mainviews/list-jobs.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ListJobsTable: () => /* binding */ ListJobsTable,
          /* harmony export */ NotebookJobsList: () =>
            /* binding */ NotebookJobsList
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @mui/material */ 'webpack/sharing/consume/default/@mui/material/@mui/material'
          );
        /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../components/heading */ './lib/components/heading.js'
          );
        /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../hooks */ './lib/hooks.js');
        /* harmony import */ var _components_job_row__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../components/job-row */ './lib/components/job-row.js'
          );
        /* harmony import */ var _components_job_definition_row__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../components/job-definition-row */ './lib/components/job-definition-row.js'
          );
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ../model */ './lib/model.js');
        /* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../handler */ './lib/handler.js');
        /* harmony import */ var _components_cluster__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../components/cluster */ './lib/components/cluster.js'
          );
        /* harmony import */ var _components_advanced_table__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../components/advanced-table */ './lib/components/advanced-table/advanced-table.js'
          );

        function ListJobsTable(props) {
          const [jobsQuery, setJobsQuery] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(
            props.jobDefinitionId
              ? {
                  job_definition_id: props.jobDefinitionId
                }
              : {}
          );
          const [deletedRows, setDeletedRows] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
          const [displayError, setDisplayError] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          // Cache environment list — we need this for the output formats.
          const [environmentList, setEnvironmentList] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
          const api = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () =>
              new _handler__WEBPACK_IMPORTED_MODULE_3__.SchedulerService({}),
            []
          );
          // Retrieve the environment list once.
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            const setList = async () => {
              setEnvironmentList(await api.getRuntimeEnvironments());
            };
            setList();
          }, []);
          const deleteRow = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            id => {
              setDeletedRows(deletedRows => new Set([...deletedRows, id]));
            },
            []
          );
          const reload = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
            setJobsQuery(query => Object.assign({}, query));
          }, []);
          const reloadButton =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_cluster__WEBPACK_IMPORTED_MODULE_4__.Cluster,
              { justifyContent: 'flex-end' },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                {
                  variant: 'contained',
                  size: 'small',
                  onClick: e => {
                    log('jobs-list.reload');
                    reload();
                  }
                },
                trans.__('Reload')
              )
            );
          const translateStatus = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            status => {
              // This may look inefficient, but it's intended to call the `trans` function
              // with distinct, static values, so that code analyzers can pick up all the
              // needed source strings.
              switch (status) {
                case 'CREATED':
                  return trans.__('Created');
                case 'QUEUED':
                  return trans.__('Queued');
                case 'COMPLETED':
                  return trans.__('Completed');
                case 'FAILED':
                  return trans.__('Failed');
                case 'IN_PROGRESS':
                  return trans.__('In progress');
                case 'STOPPED':
                  return trans.__('Stopped');
                case 'STOPPING':
                  return trans.__('Stopping');
              }
            },
            [trans]
          );
          // Display column headers with sort indicators.
          const columns = [
            {
              sortField: 'name',
              name: trans.__('Job name')
            },
            {
              sortField: 'input_filename',
              name: trans.__('Input filename')
            },
            {
              sortField: null,
              name: trans.__('Output files')
            },
            {
              sortField: 'create_time',
              name: trans.__('Created at')
            },
            {
              sortField: 'status',
              name: trans.__('Status')
            },
            {
              sortField: null,
              name: trans.__('Actions')
            }
          ];
          const renderRow = job =>
            (0, _components_job_row__WEBPACK_IMPORTED_MODULE_5__.buildJobRow)(
              job,
              environmentList,
              props.app,
              props.showCreateJob,
              deleteRow,
              translateStatus,
              props.showJobDetail,
              reload,
              setDisplayError
            );
          const rowFilter = job => !deletedRows.has(job.job_id);
          const emptyRowMessage = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
            var _a;
            return (_a = props.emptyRowMessage) !== null && _a !== void 0
              ? _a
              : trans.__(
                  'There are no notebook jobs. Notebook jobs run files in the background, immediately or on a schedule. ' +
                    'To create a notebook job, right-click on a notebook in the file browser and select "Create Notebook Job".'
                );
          }, [props.emptyRowMessage, trans]);
          // note that root element here must be a JSX fragment for DataGrid to be sized properly
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            displayError &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                { severity: 'error', onClose: () => setDisplayError(null) },
                displayError
              ),
            reloadButton,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_advanced_table__WEBPACK_IMPORTED_MODULE_6__.AdvancedTable,
              {
                query: jobsQuery,
                setQuery: setJobsQuery,
                request: api.getJobs.bind(api),
                extractRows: payload =>
                  (payload === null || payload === void 0
                    ? void 0
                    : payload.jobs) || [],
                renderRow: renderRow,
                columns: columns,
                emptyRowMessage: emptyRowMessage,
                rowFilter: rowFilter,
                height: props.height,
                pageSize: props.pageSize
              }
            )
          );
        }
        function ListJobDefinitionsTable(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const log = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useEventLogger)();
          const [jobDefsQuery, setJobDefsQuery] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
          const [deletedRows, setDeletedRows] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
          const [displayError, setDisplayError] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
          const api = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () =>
              new _handler__WEBPACK_IMPORTED_MODULE_3__.SchedulerService({}),
            []
          );
          const deleteRow = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
            id => {
              setDeletedRows(deletedRows => new Set([...deletedRows, id]));
            },
            []
          );
          const columns = [
            {
              sortField: 'name',
              name: trans.__('Job definition name')
            },
            {
              sortField: 'input_filename',
              name: trans.__('Input filename')
            },
            {
              sortField: 'create_time',
              name: trans.__('Created at')
            },
            {
              sortField: null,
              name: trans.__('Schedule')
            },
            {
              sortField: null,
              name: trans.__('Status')
            },
            {
              sortField: null,
              name: trans.__('Actions')
            }
          ];
          const reloadButton =
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_cluster__WEBPACK_IMPORTED_MODULE_4__.Cluster,
              { justifyContent: 'flex-end' },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Button,
                {
                  variant: 'contained',
                  size: 'small',
                  onClick: () => {
                    log('jobs-definition-list.reload');
                    setDisplayError(null);
                    setJobDefsQuery(query => Object.assign({}, query));
                  }
                },
                trans.__('Reload')
              )
            );
          const renderRow = jobDef =>
            (0,
            _components_job_definition_row__WEBPACK_IMPORTED_MODULE_7__.buildJobDefinitionRow)(
              jobDef,
              props.app,
              props.showJobDefinitionDetail,
              deleteRow,
              () => setJobDefsQuery({}),
              trans,
              new _handler__WEBPACK_IMPORTED_MODULE_3__.SchedulerService({}),
              setDisplayError
            );
          const rowFilter = jobDef =>
            !deletedRows.has(jobDef.job_definition_id);
          const emptyRowMessage = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () =>
              trans.__(
                'There are no notebook job definitions. Notebook job definitions run files in the background on a schedule. ' +
                  'To create a notebook job definition, right-click on a notebook in the file browser and select "Create Notebook Job".'
              ),
            [trans]
          );
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
            null,
            displayError &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                { severity: 'error', onClose: () => setDisplayError(null) },
                displayError
              ),
            reloadButton,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _components_advanced_table__WEBPACK_IMPORTED_MODULE_6__.AdvancedTable,
              {
                query: jobDefsQuery,
                setQuery: setJobDefsQuery,
                request: api.getJobDefinitions.bind(api),
                extractRows: payload =>
                  (payload === null || payload === void 0
                    ? void 0
                    : payload.job_definitions) || [],
                renderRow: renderRow,
                columns: columns,
                emptyRowMessage: emptyRowMessage,
                rowFilter: rowFilter
              }
            )
          );
        }
        function NotebookJobsList(props) {
          const trans = (0, _hooks__WEBPACK_IMPORTED_MODULE_2__.useTranslator)(
            'jupyterlab'
          );
          const jobsHeader = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () => trans.__('Notebook Jobs'),
            [trans]
          );
          const jobDefinitionsHeader = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
            () => trans.__('Notebook Job Definitions'),
            [trans]
          );
          // Display creation message
          const successMessage =
            props.newlyCreatedId !== undefined &&
            props.newlyCreatedName !== undefined
              ? props.listView ===
                _model__WEBPACK_IMPORTED_MODULE_8__.JobsView.ListJobs
                ? trans.__(
                    'Your job "%1" has been created. ' +
                      'If you do not see it in the list below, please reload the list in a few seconds.',
                    props.newlyCreatedName
                  )
                : trans.__(
                    'Your job definition "%1" has been created. ' +
                      'If you do not see it in the list below, please reload the list in a few seconds.',
                    props.newlyCreatedName
                  )
              : null;
          const [displayInfo, setDisplayInfo] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(successMessage);
          // Retrieve the initial jobs list
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_1__.Box,
            {
              sx: { p: 4 },
              style: { height: '100%', boxSizing: 'border-box' }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack,
              { spacing: 3, style: { height: '100%' } },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _mui_material__WEBPACK_IMPORTED_MODULE_1__.Tabs,
                {
                  value: props.listView,
                  onChange: (_, newTab) => props.showListView(newTab)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Tab,
                  {
                    label: jobsHeader,
                    value: _model__WEBPACK_IMPORTED_MODULE_8__.JobsView.ListJobs
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Tab,
                  {
                    label: jobDefinitionsHeader,
                    value:
                      _model__WEBPACK_IMPORTED_MODULE_8__.JobsView
                        .ListJobDefinitions
                  }
                )
              ),
              displayInfo &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert,
                  { severity: 'info', onClose: () => setDisplayInfo(null) },
                  displayInfo
                ),
              props.listView ===
                _model__WEBPACK_IMPORTED_MODULE_8__.JobsView.ListJobs &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _components_heading__WEBPACK_IMPORTED_MODULE_9__.Heading,
                    { level: 1 },
                    jobsHeader
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    ListJobsTable,
                    {
                      app: props.app,
                      showCreateJob: props.showCreateJob,
                      showJobDetail: props.showJobDetail
                    }
                  )
                ),
              props.listView ===
                _model__WEBPACK_IMPORTED_MODULE_8__.JobsView
                  .ListJobDefinitions &&
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _components_heading__WEBPACK_IMPORTED_MODULE_9__.Heading,
                    { level: 1 },
                    jobDefinitionsHeader
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    ListJobDefinitionsTable,
                    {
                      app: props.app,
                      showJobDefinitionDetail: props.showJobDefinitionDetail
                    }
                  )
                )
            )
          );
        }

        /***/
      },

    /***/ './lib/model.js':
      /*!**********************!*\
  !*** ./lib/model.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ JobsModel: () => /* binding */ JobsModel,
          /* harmony export */ JobsView: () => /* binding */ JobsView,
          /* harmony export */ NotebookJobsListingModel: () =>
            /* binding */ NotebookJobsListingModel,
          /* harmony export */ convertDescribeDefinitiontoDefinition: () =>
            /* binding */ convertDescribeDefinitiontoDefinition,
          /* harmony export */ convertDescribeJobtoJobDetail: () =>
            /* binding */ convertDescribeJobtoJobDetail,
          /* harmony export */ defaultScheduleFields: () =>
            /* binding */ defaultScheduleFields,
          /* harmony export */ emptyCreateJobModel: () =>
            /* binding */ emptyCreateJobModel,
          /* harmony export */ emptyDetailViewModel: () =>
            /* binding */ emptyDetailViewModel,
          /* harmony export */ emptyListJobsModel: () =>
            /* binding */ emptyListJobsModel,
          /* harmony export */ emptyUpdateJobDefinitionModel: () =>
            /* binding */ emptyUpdateJobDefinitionModel
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/apputils */ 'webpack/sharing/consume/default/@jupyterlab/apputils'
          );
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @lumino/signaling */ 'webpack/sharing/consume/default/@lumino/signaling'
          );
        /* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _lumino_signaling__WEBPACK_IMPORTED_MODULE_1__
          );

        /**
         * Top-level models
         */
        var JobsView;
        (function (JobsView) {
          // assignment ensures any enum value is always truthy
          JobsView[(JobsView['CreateForm'] = 1)] = 'CreateForm';
          JobsView[(JobsView['CreateFromJobDescriptionForm'] = 2)] =
            'CreateFromJobDescriptionForm';
          JobsView[(JobsView['ListJobs'] = 3)] = 'ListJobs';
          JobsView[(JobsView['ListJobDefinitions'] = 4)] = 'ListJobDefinitions';
          JobsView[(JobsView['JobDetail'] = 5)] = 'JobDetail';
          JobsView[(JobsView['JobDefinitionDetail'] = 6)] =
            'JobDefinitionDetail';
          JobsView[(JobsView['EditJobDefinition'] = 7)] = 'EditJobDefinition';
        })(JobsView || (JobsView = {}));
        const defaultScheduleFields = {
          schedule: '0 0 * * MON-FRI',
          scheduleInterval: 'weekday',
          scheduleClock: '00:00',
          scheduleMinute: '0',
          scheduleMonthDay: '1',
          scheduleWeekDay: '1',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        function emptyCreateJobModel() {
          return Object.assign(
            {
              key: Math.random(),
              jobName: '',
              inputFile: '',
              outputPath: '',
              environment: '',
              createType: 'Job'
            },
            defaultScheduleFields
          );
        }
        function emptyUpdateJobDefinitionModel() {
          return Object.assign(
            {
              definitionId: '',
              name: '',
              environment: '',
              inputFileSnapshot: '',
              updateTime: 0
            },
            defaultScheduleFields
          );
        }
        function emptyListJobsModel() {
          return {};
        }
        function emptyDetailViewModel() {
          return {
            id: ''
          };
        }
        class JobsModel extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.VDomModel {
          constructor(options) {
            super();
            this._jobsView = JobsView.ListJobs;
            this._jobsView = JobsView.ListJobs;
            this._createJobModel = emptyCreateJobModel();
            this._listJobsModel = emptyListJobsModel();
            this._jobDetailModel = emptyDetailViewModel();
            this._updateJobDefinitionModel = emptyUpdateJobDefinitionModel();
            this._onModelUpdate = options.onModelUpdate;
            this._jobCount = 0;
          }
          get jobsView() {
            return this._jobsView;
          }
          set jobsView(view) {
            var _a;
            this._jobsView = view;
            (_a = this._onModelUpdate) === null || _a === void 0
              ? void 0
              : _a.call(this);
            this.stateChanged.emit(void 0);
          }
          get createJobModel() {
            return this._createJobModel;
          }
          set createJobModel(model) {
            var _a;
            this._createJobModel = model;
            (_a = this._onModelUpdate) === null || _a === void 0
              ? void 0
              : _a.call(this);
            this.stateChanged.emit(void 0);
          }
          get listJobsModel() {
            return this._listJobsModel;
          }
          set listJobsModel(model) {
            var _a;
            this._listJobsModel = model;
            (_a = this._onModelUpdate) === null || _a === void 0
              ? void 0
              : _a.call(this);
            this.stateChanged.emit(void 0);
          }
          get jobDetailModel() {
            return this._jobDetailModel;
          }
          set jobDetailModel(model) {
            var _a;
            this._jobDetailModel = model;
            (_a = this._onModelUpdate) === null || _a === void 0
              ? void 0
              : _a.call(this);
            this.stateChanged.emit(void 0);
          }
          get updateJobDefinitionModel() {
            return this._updateJobDefinitionModel;
          }
          set updateJobDefinitionModel(model) {
            var _a;
            this._updateJobDefinitionModel = model;
            (_a = this._onModelUpdate) === null || _a === void 0
              ? void 0
              : _a.call(this);
            this.stateChanged.emit(void 0);
          }
          get jobCount() {
            return this._jobCount;
          }
          set jobCount(count) {
            this._jobCount = count;
          }
          toJson() {
            const data = {
              jobsView: this.jobsView,
              createJobModel: this.createJobModel,
              listJobsModel: this.listJobsModel,
              jobDetailModel: this.jobDetailModel,
              updateJobDefinitionModel: this.updateJobDefinitionModel
            };
            return data;
          }
          fromJson(data) {
            var _a, _b, _c, _d, _e, _f;
            this._jobsView =
              (_a = data.jobsView) !== null && _a !== void 0
                ? _a
                : JobsView.ListJobs;
            this._createJobModel =
              (_b = data.createJobModel) !== null && _b !== void 0
                ? _b
                : emptyCreateJobModel();
            this._listJobsModel =
              (_c = data.listJobsModel) !== null && _c !== void 0
                ? _c
                : emptyListJobsModel();
            this._jobDetailModel =
              (_d = data.jobDetailModel) !== null && _d !== void 0
                ? _d
                : emptyDetailViewModel();
            this._updateJobDefinitionModel =
              (_e = data.updateJobDefinitionModel) !== null && _e !== void 0
                ? _e
                : emptyUpdateJobDefinitionModel();
            // emit state changed signal
            (_f = this._onModelUpdate) === null || _f === void 0
              ? void 0
              : _f.call(this);
            this.stateChanged.emit(void 0);
          }
        }
        const convertParameters = parameters =>
          Object.entries(parameters).map(([pName, pValue]) => {
            return {
              name: pName,
              value: pValue
            };
          });
        // Convert an IDescribeJobModel to an IJobDetailModel
        function convertDescribeJobtoJobDetail(describeJob) {
          var _a;
          // Convert parameters
          const jobParameters = convertParameters(
            (_a = describeJob.parameters) !== null && _a !== void 0 ? _a : {}
          );
          const convertJobFilesToJson = files => {
            return files.map(file => {
              return {
                display_name: file.display_name,
                file_format: file.file_format,
                file_path: file.file_path || ''
              };
            });
          };
          return Object.assign(Object.assign({}, emptyCreateJobModel()), {
            jobId: describeJob.job_id,
            jobName: describeJob.name,
            inputFile: describeJob.input_filename,
            job_files: convertJobFilesToJson(describeJob.job_files),
            environment: describeJob.runtime_environment_name,
            runtimeEnvironmentParameters:
              describeJob.runtime_environment_parameters,
            parameters: jobParameters,
            outputFormats: describeJob.output_formats,
            computeType: describeJob.compute_type,
            idempotencyToken: describeJob.idempotency_token,
            tags: describeJob.tags,
            status: describeJob.status,
            statusMessage: describeJob.status_message,
            createTime: describeJob.create_time,
            updateTime: describeJob.update_time,
            startTime: describeJob.start_time,
            endTime: describeJob.end_time,
            downloaded: describeJob.downloaded,
            packageInputFolder: describeJob.package_input_folder
          });
        }
        function convertDescribeDefinitiontoDefinition(describeDefinition) {
          var _a, _b;
          // Convert parameters
          const definitionParameters = convertParameters(
            (_a = describeDefinition.parameters) !== null && _a !== void 0
              ? _a
              : {}
          );
          return {
            name: describeDefinition.name,
            inputFile: describeDefinition.input_filename,
            definitionId: describeDefinition.job_definition_id,
            outputPath:
              (_b = describeDefinition.output_filename_template) !== null &&
              _b !== void 0
                ? _b
                : '',
            environment: describeDefinition.runtime_environment_name,
            runtimeEnvironmentParameters:
              describeDefinition.runtime_environment_parameters,
            parameters: definitionParameters,
            outputFormats: describeDefinition.output_formats,
            computeType: describeDefinition.compute_type,
            tags: describeDefinition.tags,
            active: describeDefinition.active,
            createTime: describeDefinition.create_time,
            updateTime: describeDefinition.update_time,
            schedule: describeDefinition.schedule,
            timezone: describeDefinition.timezone,
            packageInputFolder: describeDefinition.package_input_folder
          };
        }
        class NotebookJobsListingModel {
          constructor(scheduled_jobs, next_token) {
            const inProgressJobs = scheduled_jobs
              ? scheduled_jobs.filter(job => job.status === 'IN_PROGRESS')
              : [];
            this.inProgressJobCount = inProgressJobs.length;
            this._scheduled_jobs = scheduled_jobs;
            this.scheduledJobsChanged =
              new _lumino_signaling__WEBPACK_IMPORTED_MODULE_1__.Signal(this);
            this.inProgressJobCountChanged =
              new _lumino_signaling__WEBPACK_IMPORTED_MODULE_1__.Signal(this);
          }
          updateJobs(jobs) {
            let jobsChanged = false;
            if (jobs.length !== this._scheduled_jobs.length) {
              jobsChanged = true;
            }
            if (!jobsChanged) {
              for (let i = 0; i < jobs.length; i++) {
                const job = jobs[i];
                const modelJob = this._scheduled_jobs[i];
                if (job.status !== modelJob.status) {
                  jobsChanged = true;
                  break;
                }
              }
            }
            if (jobsChanged) {
              this._scheduled_jobs = jobs;
              this.scheduledJobsChanged.emit(jobs);
            }
          }
          updatejobCount(jobCount) {
            if (jobCount !== this.inProgressJobCount) {
              this.inProgressJobCount = jobCount;
              this.inProgressJobCountChanged.emit(jobCount);
            }
          }
        }

        /***/
      },

    /***/ './lib/notebook-jobs-panel.js':
      /*!************************************!*\
  !*** ./lib/notebook-jobs-panel.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ NotebookJobsPanel: () =>
            /* binding */ NotebookJobsPanel
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @mui/material/styles */ 'webpack/sharing/consume/default/@mui/system/@mui/system'
          );
        /* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyterlab/apputils */ 'webpack/sharing/consume/default/@jupyterlab/apputils'
          );
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _components_error_boundary__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./components/error-boundary */ './lib/components/error-boundary.js'
          );
        /* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./components/icons */ './lib/components/icons.js'
          );
        /* harmony import */ var _mainviews_create_job__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./mainviews/create-job */ './lib/mainviews/create-job.js'
          );
        /* harmony import */ var _mainviews_detail_view__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./mainviews/detail-view */ './lib/mainviews/detail-view/detail-view.js'
          );
        /* harmony import */ var _mainviews_create_job_from_definition__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./mainviews/create-job-from-definition */ './lib/mainviews/create-job-from-definition.js'
          );
        /* harmony import */ var _mainviews_edit_job_definition__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./mainviews/edit-job-definition */ './lib/mainviews/edit-job-definition.js'
          );
        /* harmony import */ var _mainviews_list_jobs__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./mainviews/list-jobs */ './lib/mainviews/list-jobs.js'
          );
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./model */ './lib/model.js');
        /* harmony import */ var _theme_provider__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./theme-provider */ './lib/theme-provider.js'
          );
        /* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./context */ './lib/context.js');

        /**
         * The mime type for a rich contents drag object.
         */
        const CONTENTS_MIME_RICH = 'application/x-jupyter-icontentsrich';
        class NotebookJobsPanel extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.VDomRenderer {
          constructor(options) {
            var _a, _b, _c;
            super(
              options.model ||
                new _model__WEBPACK_IMPORTED_MODULE_2__.JobsModel({
                  onModelUpdate: () => {
                    // allow us to invoke private parent method
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.renderDOM();
                  }
                })
            );
            this.removeDragHoverClass = event => {
              var _a, _b, _c, _d;
              if (
                (_b =
                  (_a = event.target) === null || _a === void 0
                    ? void 0
                    : _a.className) === null || _b === void 0
                  ? void 0
                  : _b.includes('draghover')
              ) {
                (_d =
                  (_c = event.target) === null || _c === void 0
                    ? void 0
                    : _c.classList) === null || _d === void 0
                  ? void 0
                  : _d.remove('draghover');
                this._last_input_drop_target = null;
              }
            };
            this.handleDrag = event => {
              var _a, _b, _c, _d, _e, _f, _g, _h;
              if (
                this.model.jobsView ===
                  _model__WEBPACK_IMPORTED_MODULE_2__.JobsView
                    .EditJobDefinition &&
                ((_b =
                  (_a = event.target) === null || _a === void 0
                    ? void 0
                    : _a.className) === null || _b === void 0
                  ? void 0
                  : _b.includes('jp-input-file-snapshot'))
              ) {
                event.preventDefault();
                event.stopPropagation();
                event.dropAction = 'move';
                if (
                  !((_d =
                    (_c = event.target) === null || _c === void 0
                      ? void 0
                      : _c.className) === null || _d === void 0
                    ? void 0
                    : _d.includes('draghover'))
                ) {
                  (_f =
                    (_e = event.target) === null || _e === void 0
                      ? void 0
                      : _e.classList) === null || _f === void 0
                    ? void 0
                    : _f.add('draghover');
                  (_g = event.target) === null || _g === void 0
                    ? void 0
                    : _g.addEventListener(
                        'lm-dragleave',
                        this.removeDragHoverClass
                      );
                  this._last_input_drop_target = event.target;
                }
              } else if (this._last_input_drop_target) {
                (_h = this._last_input_drop_target.classList) === null ||
                _h === void 0
                  ? void 0
                  : _h.remove('draghover');
                this._last_input_drop_target = null;
              }
            };
            this.handleDrop = event => {
              var _a, _b, _c, _d, _e, _f;
              if (
                this.model.jobsView ===
                  _model__WEBPACK_IMPORTED_MODULE_2__.JobsView
                    .EditJobDefinition &&
                ((_b =
                  (_a =
                    event === null || event === void 0
                      ? void 0
                      : event.target) === null || _a === void 0
                    ? void 0
                    : _a.className) === null || _b === void 0
                  ? void 0
                  : _b.includes('input-file-snapshot'))
              ) {
                const mimeData = event.mimeData.getData(CONTENTS_MIME_RICH);
                event.dropAction = 'copy';
                event.preventDefault();
                event.stopPropagation();
                this.model.updateJobDefinitionModel = Object.assign(
                  Object.assign({}, this.model.updateJobDefinitionModel),
                  { inputFileSnapshot: mimeData.model.path }
                );
                if (
                  (_d =
                    (_c = event.target) === null || _c === void 0
                      ? void 0
                      : _c.className) === null || _d === void 0
                    ? void 0
                    : _d.includes('draghover')
                ) {
                  (_f =
                    (_e = event.target) === null || _e === void 0
                      ? void 0
                      : _e.classList) === null || _f === void 0
                    ? void 0
                    : _f.remove('draghover');
                  this._last_input_drop_target = null;
                }
              }
            };
            this.addClass('jp-notebook-jobs-panel');
            const trans = options.translator.load('jupyterlab');
            this.title.icon =
              (_a = options.titleIcon) !== null && _a !== void 0
                ? _a
                : _components_icons__WEBPACK_IMPORTED_MODULE_3__.calendarMonthIcon;
            this.title.caption =
              (_b = options.title) !== null && _b !== void 0
                ? _b
                : trans.__('Notebook Jobs');
            this._description =
              (_c = options.description) !== null && _c !== void 0
                ? _c
                : trans.__('Job Runs');
            this._app = options.app;
            this._translator = options.translator;
            this._trans = this._translator.load('jupyterlab');
            this._advancedOptions = options.advancedOptions;
            this._eventLogger = options.eventLogger;
            this._last_input_drop_target = null;
            this.node.setAttribute('role', 'region');
            this.node.setAttribute('aria-label', trans.__('Notebook Jobs'));
          }
          /**
           * Handle the DOM events for the directory listing.
           *
           * @param event - The DOM event sent to the widget.
           *
           * #### Notes
           * This method implements the DOM `EventListener` interface and is
           * called in response to events on the panel's DOM node. It should
           * not be called directly by user code (see
           * https://jupyterlab.readthedocs.io/en/stable/developer/patterns.html,
           * "Dom Events" section).
           */
          handleEvent(event) {
            var _a;
            switch (event.type) {
              case 'lm-dragenter':
                event.preventDefault();
                event.stopPropagation();
                break;
              case 'lm-dragover':
                this.handleDrag(event);
                break;
              case 'lm-drop':
                this.handleDrop(event);
                break;
              case 'lm-dragleave':
                (_a = event.target) === null || _a === void 0
                  ? void 0
                  : _a.removeEventListener(
                      'lm-dragleave',
                      this.removeDragHoverClass
                    );
                break;
              default:
                break;
            }
          }
          /**
           *  A message handler invoked on an `'after-attach'` message.
           */
          onAfterAttach(_) {
            this.node.addEventListener('lm-dragover', this, true);
            this.node.addEventListener('lm-dragenter', this, true);
            this.node.addEventListener('lm-drop', this, true);
          }
          /**
           *  A message handler invoked on an `'before-detach'` message.
           */
          onBeforeDetach(_) {
            this.node.removeEventListener('lm-dragover', this, true);
            this.node.removeEventListener('lm-dragenter', this, true);
            this.node.removeEventListener('lm-drop', this, true);
          }
          showListView(view, newlyCreatedId, newlyCreatedName) {
            this._newlyCreatedId = newlyCreatedId;
            this._newlyCreatedName = newlyCreatedName;
            this.model.jobsView = view;
          }
          showDetailView(jobId) {
            this.model.jobsView =
              _model__WEBPACK_IMPORTED_MODULE_2__.JobsView.JobDetail;
            this.model.jobDetailModel.id = jobId;
          }
          showJobDefinitionDetail(jobDefId) {
            this.model.jobsView =
              _model__WEBPACK_IMPORTED_MODULE_2__.JobsView.JobDefinitionDetail;
            this.model.jobDetailModel.id = jobDefId;
          }
          editJobDefinition(jobDef) {
            this.model.jobsView =
              _model__WEBPACK_IMPORTED_MODULE_2__.JobsView.EditJobDefinition;
            this.model.updateJobDefinitionModel = Object.assign(
              Object.assign(
                {
                  definitionId: jobDef.definitionId,
                  name: jobDef.name,
                  environment: jobDef.environment
                },
                _model__WEBPACK_IMPORTED_MODULE_2__.defaultScheduleFields
              ),
              {
                // TODO: should these properties really be optional?
                schedule: jobDef.schedule || '* * * * *',
                timezone: jobDef.timezone || 'UTC',
                scheduleInterval: 'custom',
                inputFileSnapshot: jobDef.inputFile,
                updateTime: jobDef.updateTime
              }
            );
          }
          render() {
            const showCreateJob = newModel => {
              this.model.createJobModel = newModel;
              this.model.jobsView =
                _model__WEBPACK_IMPORTED_MODULE_2__.JobsView.CreateForm;
            };
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider,
              {
                theme: (0,
                _theme_provider__WEBPACK_IMPORTED_MODULE_5__.getJupyterLabTheme)()
              },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                _context__WEBPACK_IMPORTED_MODULE_6__['default'].Provider,
                { value: this._translator },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  _context__WEBPACK_IMPORTED_MODULE_6__.LogContext.Provider,
                  { value: this._eventLogger.bind(this) },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                    _components_error_boundary__WEBPACK_IMPORTED_MODULE_7__.ErrorBoundary,
                    {
                      alertTitle: this._trans.__('Internal error'),
                      alertMessage: this._trans.__(
                        'We encountered an internal error. Please try your command again.'
                      ),
                      detailTitle: this._trans.__('Error details')
                    },
                    this.model.jobsView ===
                      _model__WEBPACK_IMPORTED_MODULE_2__.JobsView.CreateForm &&
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mainviews_create_job__WEBPACK_IMPORTED_MODULE_8__.CreateJob,
                        {
                          key: this.model.createJobModel.key,
                          model: this.model.createJobModel,
                          handleModelChange: newModel =>
                            (this.model.createJobModel = newModel),
                          showListView: this.showListView.bind(this),
                          advancedOptions: this._advancedOptions
                        }
                      ),
                    this.model.jobsView ===
                      _model__WEBPACK_IMPORTED_MODULE_2__.JobsView
                        .CreateFromJobDescriptionForm &&
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mainviews_create_job_from_definition__WEBPACK_IMPORTED_MODULE_9__.CreateJobFromDefinition,
                        {
                          key: this.model.createJobModel.key,
                          model: this.model.createJobModel,
                          handleModelChange: newModel =>
                            (this.model.createJobModel = newModel),
                          showListView: this.showListView.bind(this),
                          advancedOptions: this._advancedOptions
                        }
                      ),
                    (this.model.jobsView ===
                      _model__WEBPACK_IMPORTED_MODULE_2__.JobsView.ListJobs ||
                      this.model.jobsView ===
                        _model__WEBPACK_IMPORTED_MODULE_2__.JobsView
                          .ListJobDefinitions) &&
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mainviews_list_jobs__WEBPACK_IMPORTED_MODULE_10__.NotebookJobsList,
                        {
                          app: this._app,
                          listView: this.model.jobsView,
                          showListView: this.showListView.bind(this),
                          showCreateJob: showCreateJob,
                          showJobDetail: this.showDetailView.bind(this),
                          showJobDefinitionDetail:
                            this.showJobDefinitionDetail.bind(this),
                          newlyCreatedId: this._newlyCreatedId,
                          newlyCreatedName: this._newlyCreatedName
                        }
                      ),
                    (this.model.jobsView ===
                      _model__WEBPACK_IMPORTED_MODULE_2__.JobsView.JobDetail ||
                      this.model.jobsView ===
                        _model__WEBPACK_IMPORTED_MODULE_2__.JobsView
                          .JobDefinitionDetail) &&
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mainviews_detail_view__WEBPACK_IMPORTED_MODULE_11__.DetailView,
                        {
                          app: this._app,
                          model: this.model.jobDetailModel,
                          setCreateJobModel: newModel =>
                            (this.model.createJobModel = newModel),
                          jobsView: this.model.jobsView,
                          setJobsView: view => (this.model.jobsView = view),
                          showCreateJob: showCreateJob,
                          showJobDetail: this.showDetailView.bind(this),
                          editJobDefinition: this.editJobDefinition.bind(this),
                          advancedOptions: this._advancedOptions
                        }
                      ),
                    this.model.jobsView ===
                      _model__WEBPACK_IMPORTED_MODULE_2__.JobsView
                        .EditJobDefinition &&
                      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _mainviews_edit_job_definition__WEBPACK_IMPORTED_MODULE_12__.EditJobDefinition,
                        {
                          model: this.model.updateJobDefinitionModel,
                          handleModelChange: newModel =>
                            (this.model.updateJobDefinitionModel = newModel),
                          showListView: this.showListView.bind(this),
                          showJobDefinitionDetail:
                            this.showJobDefinitionDetail.bind(this)
                        }
                      )
                  )
                )
              )
            );
          }
        }

        /***/
      },

    /***/ './lib/theme-provider.js':
      /*!*******************************!*\
  !*** ./lib/theme-provider.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getJupyterLabTheme: () =>
            /* binding */ getJupyterLabTheme
          /* harmony export */
        });
        /* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @mui/material/styles */ './node_modules/@mui/material/esm/styles/createTheme.js'
          );

        function getCSSVariable(name) {
          return getComputedStyle(document.body).getPropertyValue(name).trim();
        }
        function getJupyterLabTheme() {
          const light = document.body.getAttribute('data-jp-theme-light');
          return (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__['default'])({
            spacing: 4,
            components: {
              MuiButton: {
                defaultProps: {
                  size: 'small'
                }
              },
              MuiFilledInput: {
                defaultProps: {
                  margin: 'dense'
                }
              },
              MuiFormControl: {
                defaultProps: {
                  margin: 'dense',
                  size: 'small'
                }
              },
              MuiFormHelperText: {
                defaultProps: {
                  margin: 'dense'
                }
              },
              MuiIconButton: {
                defaultProps: {
                  size: 'small'
                }
              },
              MuiInputBase: {
                defaultProps: {
                  margin: 'dense',
                  size: 'small'
                }
              },
              MuiInputLabel: {
                defaultProps: {
                  margin: 'dense'
                }
              },
              MuiListItem: {
                defaultProps: {
                  dense: true
                }
              },
              MuiOutlinedInput: {
                defaultProps: {
                  margin: 'dense'
                }
              },
              MuiFab: {
                defaultProps: {
                  size: 'small'
                }
              },
              MuiTable: {
                defaultProps: {
                  size: 'small'
                }
              },
              MuiTextField: {
                defaultProps: {
                  margin: 'dense',
                  size: 'small'
                }
              },
              MuiToolbar: {
                defaultProps: {
                  variant: 'dense'
                }
              }
            },
            palette: {
              background: {
                paper: getCSSVariable('--jp-layout-color1'),
                default: getCSSVariable('--jp-layout-color1')
              },
              mode: light === 'true' ? 'light' : 'dark',
              primary: {
                main: getCSSVariable('--jp-brand-color1'),
                light: getCSSVariable('--jp-brand-color2'),
                dark: getCSSVariable('--jp-brand-color0')
              },
              error: {
                main: getCSSVariable('--jp-error-color1'),
                light: getCSSVariable('--jp-error-color2'),
                dark: getCSSVariable('--jp-error-color0')
              },
              warning: {
                main: getCSSVariable('--jp-warn-color1'),
                light: getCSSVariable('--jp-warn-color2'),
                dark: getCSSVariable('--jp-warn-color0')
              },
              success: {
                main: getCSSVariable('--jp-success-color1'),
                light: getCSSVariable('--jp-success-color2'),
                dark: getCSSVariable('--jp-success-color0')
              },
              text: {
                primary: getCSSVariable('--jp-ui-font-color1'),
                secondary: getCSSVariable('--jp-ui-font-color2'),
                disabled: getCSSVariable('--jp-ui-font-color3')
              }
            },
            shape: {
              borderRadius: 2
            },
            typography: {
              fontFamily: getCSSVariable('--jp-ui-font-family'),
              fontSize: 12,
              htmlFontSize: 16,
              button: {
                textTransform: 'capitalize'
              }
            }
          });
        }

        /***/
      },

    /***/ './lib/tokens.js':
      /*!***********************!*\
  !*** ./lib/tokens.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Scheduler: () => /* binding */ Scheduler
          /* harmony export */
        });
        /* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @lumino/coreutils */ 'webpack/sharing/consume/default/@lumino/coreutils'
          );
        /* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__
          );

        var Scheduler;
        (function (Scheduler) {
          Scheduler.IAdvancedOptions =
            new _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__.Token(
              '@jupyterlab/scheduler:IAdvancedOptions'
            );
          Scheduler.TelemetryHandler =
            new _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__.Token(
              '@jupyterlab/scheduler:ITelemetryHandler'
            );
        })(Scheduler || (Scheduler = {}));

        /***/
      },

    /***/ './lib/util/errors.js':
      /*!****************************!*\
  !*** ./lib/util/errors.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SERVER_EXTENSION_404_JSX: () =>
            /* binding */ SERVER_EXTENSION_404_JSX,
          /* harmony export */ getErrorMessage: () =>
            /* binding */ getErrorMessage
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react */ 'webpack/sharing/consume/default/react'
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );

        const SERVER_EXTENSION_404_JSX =
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'p',
              null,
              "The Jupyter Scheduler extension is installed but it can't be activated. It looks like the required Jupyter Server extension (",
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'code',
                null,
                'jupyter_scheduler'
              ),
              ') is not installed or not enabled in this environment.'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'h3',
              null,
              'Why am I seeing this message?'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'p',
              null,
              'If you installed the Jupyter Scheduler extension from the Extension Manager in JupyterLab, you might have installed only the client extension and not the server extension. You can install the server extension by running ',
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'code',
                null,
                'pip install jupyter_scheduler'
              ),
              ' in the same environment in which you run JupyterLab.'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'h3',
              null,
              'How do I check if the extension is installed?'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              'p',
              null,
              'Please ensure that ',
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'code',
                null,
                'jupyter server extension list'
              ),
              ' includes jupyter_scheduler and that it is enabled. If it is enabled, please restart JupyterLab. If the server extension is installed but not enabled, run',
              ' ',
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                'code',
                null,
                'jupyter server extension enable --user --py jupyter_scheduler'
              ),
              ' ',
              'and restart JupyterLab.'
            )
          );
        function getErrorMessage(e) {
          return e instanceof Error
            ? e.message
            : 'An error occurred. Please try again.';
        }

        /***/
      },

    /***/ './lib/util/job-name-validation.js':
      /*!*****************************************!*\
  !*** ./lib/util/job-name-validation.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ MakeNameValid: () => /* binding */ MakeNameValid,
          /* harmony export */ NameError: () => /* binding */ NameError,
          /* harmony export */ NameIsValid: () => /* binding */ NameIsValid
          /* harmony export */
        });
        // Utilities to validate and sanitize job names (make them valid)
        const jobNameRegex = /^[a-zA-Z0-9._][a-zA-Z0-9._ -]{0,62}$/;
        const invalidFirstCharRegex = /^[^a-zA-Z0-9._]/;
        const invalidCharRegex = /[^a-zA-Z0-9._ -]/g;
        const maxLength = 63;
        function NameIsValid(name) {
          return jobNameRegex.test(name);
        }
        // Modify an input string to be a valid name
        function MakeNameValid(name) {
          if (jobNameRegex.test(name)) {
            return name;
          }
          // Clean up first position
          if (invalidFirstCharRegex.test(name)) {
            name = name.slice(1);
          }
          // Truncate length
          name = name.substring(0, maxLength);
          // Purge invalid characters
          name = name.replace(invalidCharRegex, '');
          // If nothing's left, put something in so that validation passes
          if (name === '') {
            // Deliberately not translated so as not to violate character limits
            name = 'job';
          }
          return name;
        }
        function NameError(name, trans) {
          if (NameIsValid(name)) {
            return ''; // No errors
          }
          // Check for blank
          if (name === '') {
            return trans.__('You must specify a name');
          }
          // Check for errors in first position
          if (invalidFirstCharRegex.test(name)) {
            return trans.__(
              'Name must start with a letter, number, period, or underscore'
            );
          }
          // Check for length.
          if (name.length > maxLength) {
            return trans.__(
              'Name may not be longer than %1 characters',
              maxLength
            );
          }
          // By process of elimination, incorrect characters must be present
          return trans.__(
            'Name must contain only letters, numbers, spaces, periods, hyphens, and underscores'
          );
        }

        /***/
      },

    /***/ './style/icons/calendar-add-on.svg':
      /*!*****************************************!*\
  !*** ./style/icons/calendar-add-on.svg ***!
  \*****************************************/
      /***/ module => {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16px" width="16px">\n  <path fill="#0097A7" d="M10 15.833H4.25q-.729 0-1.24-.51-.51-.511-.51-1.24v-9q0-.729.51-1.239.511-.511 1.24-.511H5V1.667h1.75v1.666h4.833V1.667h1.75v1.666h.75q.729 0 1.24.511.51.51.51 1.239v4.959q-.229-.042-.437-.063-.208-.021-.438-.021-.229 0-.437.021-.209.021-.438.063V7.583H4.25v6.5H10q-.042.229-.062.438-.021.208-.021.437 0 .23.021.438.02.208.062.437Zm4.083 2.5v-2.5h-2.5v-1.75h2.5v-2.5h1.75v2.5h2.5v1.75h-2.5v2.5Z"/>\n</svg>\n';

        /***/
      },

    /***/ './style/icons/calendar-month.svg':
      /*!****************************************!*\
  !*** ./style/icons/calendar-month.svg ***!
  \****************************************/
      /***/ module => {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" height="16px" width="16px">\n  <path fill="#0097A7" d="M10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Z"/>\n</svg>\n';

        /***/
      },

    /***/ './style/icons/event-note.svg':
      /*!************************************!*\
  !*** ./style/icons/event-note.svg ***!
  \************************************/
      /***/ module => {
        module.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48">\n  <path fill="#0097A7" d="M14 27v-3h20v3Zm0 9v-3h13.95v3Zm-5 8q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Z"/>\n</svg>\n';

        /***/
      }
  }
]);
//# sourceMappingURL=lib_index_js-lib_mainviews_detail-view_job-detail_js-lib_mainviews_list-jobs_js.52c4f7848952fc1901cb.js.map

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("diamodal", [], factory);
	else if(typeof exports === 'object')
		exports["diamodal"] = factory();
	else
		root["diamodal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdatediamodal"];
/******/ 	window["webpackHotUpdatediamodal"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "9771384ca7a9b400eeae";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "diamodal";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/index.js")(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/art-template/lib/compile/runtime.js":
/*!**********************************************************!*\
  !*** ./node_modules/art-template/lib/compile/runtime.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*! art-template@runtime | https://github.com/aui/art-template */

var detectNode = typeof window === 'undefined';
var runtime = Object.create(detectNode ? global : window);
var ESCAPE_REG = /["&'<>]/;

/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */
runtime.$escape = function (content) {
    return xmlEscape(toString(content));
};

/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data
 * @param {function}     callback
 */
runtime.$each = function (data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

// 将目标转成字符
function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }

    return value;
}

// 编码 HTML 内容
function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }

    var result = '';
    var i = void 0,
        lastIndex = void 0,
        char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
        switch (html.charCodeAt(i)) {
            case 34:
                char = '&#34;';
                break;
            case 38:
                char = '&#38;';
                break;
            case 39:
                char = '&#39;';
                break;
            case 60:
                char = '&#60;';
                break;
            case 62:
                char = '&#62;';
                break;
            default:
                continue;
        }

        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }

        lastIndex = i + 1;
        result += char;
    }

    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
}

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/art-template/lib/runtime.js":
/*!**************************************************!*\
  !*** ./node_modules/art-template/lib/runtime.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./compile/runtime */ "./node_modules/art-template/lib/compile/runtime.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/DiaModal.js":
/*!************************************!*\
  !*** ./src/components/DiaModal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiaModal; });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DiaModal =
/*#__PURE__*/
function () {
  function DiaModal(_ref) {
    var _this = this;

    var _ref$template = _ref.template,
        template = _ref$template === void 0 ? __webpack_require__(/*! ../templates/diamodal.art */ "./src/templates/diamodal.art") : _ref$template,
        _ref$title = _ref.title,
        title = _ref$title === void 0 ? "" : _ref$title,
        _ref$content = _ref.content,
        content = _ref$content === void 0 ? "" : _ref$content,
        _ref$boxSize = _ref.boxSize,
        boxSize = _ref$boxSize === void 0 ? "small" : _ref$boxSize,
        _ref$root = _ref.root,
        root = _ref$root === void 0 ? document ? document.body : null : _ref$root,
        _ref$isOpenClass = _ref.isOpenClass,
        isOpenClass = _ref$isOpenClass === void 0 ? "diamodal--is-open" : _ref$isOpenClass,
        _ref$isCloseClass = _ref.isCloseClass,
        isCloseClass = _ref$isCloseClass === void 0 ? "diamodal--is-close" : _ref$isCloseClass,
        _ref$isClosingClass = _ref.isClosingClass,
        isClosingClass = _ref$isClosingClass === void 0 ? "diamodal--is-closing" : _ref$isClosingClass,
        _ref$triggerBtnSelect = _ref.triggerBtnSelector,
        triggerBtnSelector = _ref$triggerBtnSelect === void 0 ? null : _ref$triggerBtnSelect,
        _ref$closeOnEscape = _ref.closeOnEscape,
        closeOnEscape = _ref$closeOnEscape === void 0 ? true : _ref$closeOnEscape,
        _ref$openOnInit = _ref.openOnInit,
        openOnInit = _ref$openOnInit === void 0 ? false : _ref$openOnInit,
        _ref$destroyOnClose = _ref.destroyOnClose,
        _destroyOnClose = _ref$destroyOnClose === void 0 ? false : _ref$destroyOnClose,
        _ref$transitionDurati = _ref.transitionDuration,
        transitionDuration = _ref$transitionDurati === void 0 ? 480 : _ref$transitionDurati,
        _ref$zIndex = _ref.zIndex,
        zIndex = _ref$zIndex === void 0 ? 9999 : _ref$zIndex,
        _ref$onInit = _ref.onInit,
        onInit = _ref$onInit === void 0 ? function (f) {
      return f;
    } : _ref$onInit,
        _ref$onDestroy = _ref.onDestroy,
        onDestroy = _ref$onDestroy === void 0 ? function (f) {
      return f;
    } : _ref$onDestroy,
        _ref$onRender = _ref.onRender,
        onRender = _ref$onRender === void 0 ? function (f) {
      return f;
    } : _ref$onRender,
        _ref$onOpen = _ref.onOpen,
        onOpen = _ref$onOpen === void 0 ? function (f) {
      return f;
    } : _ref$onOpen,
        _ref$onClose = _ref.onClose,
        onClose = _ref$onClose === void 0 ? function (f) {
      return f;
    } : _ref$onClose;

    _classCallCheck(this, DiaModal);

    _defineProperty(this, "open", function () {
      clearTimeout(_this._currentTimeout);
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(_this._element, _this._classes.isCloseClass);
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(_this._element, _this._classes.isClosingClass);
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(_this._element, _this._classes.isOpenClass);
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["addClass"])(_this._root, 'diamodal-active');
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["addClass"])(_this._root, 'diamodal-scrollbar-compensate');

      if (window) {
        if (!window.__diamodalOpenedModals) {
          window.__diamodalOpenedModals = [];
        }

        if (window.__diamodalOpenedModals.indexOf(_this._uid) === -1) {
          window.__diamodalOpenedModals.push(_this._uid);
        }
      }

      _this._currentTimeout = setTimeout(function () {
        Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["addClass"])(_this._element, _this._classes.isOpenClass);

        _this._onOpen();
      }, 10);
    });

    _defineProperty(this, "close", function () {
      var destroyOnClose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this._destroyOnClose;
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(_this._element, _this._classes.isOpenClass);
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(_this._element, _this._classes.isCloseClass);
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["addClass"])(_this._element, _this._classes.isClosingClass);
      _this._currentTimeout = setTimeout(function () {
        if (destroyOnClose) {
          _this.destroy();
        }

        Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(_this._element, _this._classes.isClosingClass);
        Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["addClass"])(_this._element, _this._classes.isCloseClass);

        if (window) {
          if (window.__diamodalOpenedModals && window.__diamodalOpenedModals.length) {
            window.__diamodalOpenedModals.splice(window.__diamodalOpenedModals.indexOf(_this._uid), 1);
          }

          if (!window.__diamodalOpenedModals || !window.__diamodalOpenedModals.length) {
            Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(_this._root, 'diamodal-active');
            Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(_this._root, 'diamodal-scrollbar-compensate');
          }
        }

        _this._onClose();
      }, _this._transitionDuration);
    });

    this._transitionDuration = transitionDuration;
    this._classes = {
      isOpenClass: isOpenClass,
      isCloseClass: isCloseClass,
      isClosingClass: isClosingClass
    };
    this._uid = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["generateUID"])();
    this._root = root;
    this._template = template;
    this._title = title;
    this._content = content;
    this._boxSize = boxSize;
    this._closeOnEscape = closeOnEscape;
    this._openOnInit = openOnInit;
    this._destroyOnClose = _destroyOnClose;
    this._triggerBtnSelector = triggerBtnSelector;
    this._zIndex = zIndex;
    this._onInit = onInit;
    this._onDestroy = onDestroy;
    this._onRender = onRender;
    this._onOpen = onOpen;
    this._onClose = onClose;
    this.init(openOnInit);
  }

  _createClass(DiaModal, [{
    key: "init",
    value: function init(openOnInit) {
      this.render();

      if (this._element) {
        this._attachHandlers();

        if (openOnInit) {
          this.open();
        }

        this.titleContainer = this._element.querySelector('[data-diamodal-title]');
        this.contentContainer = this._element.querySelector('[data-diamodal-content]');
      }

      this._onInit();
    }
  }, {
    key: "_attachHandlers",
    value: function _attachHandlers() {
      var _this2 = this;

      this._box = this._element.querySelector('.diamodal-box');

      if (this._box) {
        var closeButtons = this._box.querySelectorAll("[data-diamodal-close]");

        for (var i = 0; i < closeButtons.length; ++i) {
          closeButtons[i].addEventListener('click', function (event) {
            return _this2.close();
          });
        }

        this._box.addEventListener('click', function (event) {
          event.stopPropagation();
        });
      }

      if (this._element) {
        this._element.addEventListener('click', function (event) {
          return _this2.close();
        });
      }

      if (this._triggerBtnSelector) {
        Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["addDelegatedEventListener"])(document, 'click', this._triggerBtnSelector, function (e) {
          e.preventDefault();

          _this2.open();
        }, true);
      }

      if (this._closeOnEscape) {
        document.addEventListener('keydown', function (evt) {
          evt = evt || window.event;
          var isEscape = false;

          if ("key" in evt) {
            isEscape = evt.key == "Escape" || evt.key == "Esc";
          } else {
            isEscape = evt.keyCode == 27;
          }

          if (isEscape) {
            _this2.close();
          }
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._element.parentNode.removeChild(this._element);

      this._onDestroy();
    }
  }, {
    key: "compile",
    value: function compile() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._title;
      var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._content;
      var boxSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._boxSize;
      var zIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this._zIndex;
      var transitionDuration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this._transitionDuration;
      return this._template({
        title: title,
        content: content,
        boxSize: boxSize,
        zIndex: zIndex,
        transitionDuration: transitionDuration
      });
    }
  }, {
    key: "render",
    value: function render() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._root;

      if (root) {
        var htmlString = this.compile();
        this._element = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["createElementFromHTML"])(htmlString);

        this._root.appendChild(this._element);

        this._onRender();
      }
    }
  }, {
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(newTitle) {
      this._title = newTitle;

      if (this.titleContainer) {
        this.titleContainer.innerHTML = newTitle;
      }
    }
  }, {
    key: "content",
    get: function get() {
      return this._content;
    },
    set: function set(newContent) {
      this._content = newContent;

      if (this.contentContainer) {
        this.contentContainer.innerHTML = newContent;
      }
    }
  }]);

  return DiaModal;
}();



/***/ }),

/***/ "./src/components/DiaModalForm.js":
/*!****************************************!*\
  !*** ./src/components/DiaModalForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiaModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiaModal */ "./src/components/DiaModal.js");
/* harmony import */ var _DiaModalFormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiaModalFormInput */ "./src/components/DiaModalFormInput.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





function addIdsToInputs(inputs) {
  if (inputs && inputs.length) {
    return inputs.map(function (input) {
      input.id = input.name + Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["generateUID"])();
      return input;
    });
  }
}

function wrapInputsToForm(html) {
  if (document) {
    var form = document.createElement('form');
    form.innerHTML = html;
    return form;
  }
}

var DiaModalForm =
/*#__PURE__*/
function (_DiaModal) {
  _inherits(DiaModalForm, _DiaModal);

  function DiaModalForm(_ref) {
    var _this;

    var _ref$formTemplate = _ref.formTemplate,
        formTemplate = _ref$formTemplate === void 0 ? __webpack_require__(/*! ../templates/diamodal-form.art */ "./src/templates/diamodal-form.art") : _ref$formTemplate,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? [] : _ref$attributes,
        _ref$inputs = _ref.inputs,
        inputs = _ref$inputs === void 0 ? [] : _ref$inputs,
        _ref$submitText = _ref.submitText,
        submitText = _ref$submitText === void 0 ? "Отправить" : _ref$submitText,
        _ref$submitButtomClas = _ref.submitButtomClass,
        submitButtomClass = _ref$submitButtomClas === void 0 ? "diamodal-form__submit-button" : _ref$submitButtomClas,
        _ref$addRequiredLabel = _ref.addRequiredLabel,
        addRequiredLabel = _ref$addRequiredLabel === void 0 ? true : _ref$addRequiredLabel,
        _ref$requiredLabelTex = _ref.requiredLabelText,
        requiredLabelText = _ref$requiredLabelTex === void 0 ? "Обязательные для заполнения поля" : _ref$requiredLabelTex,
        _ref$onSubmit = _ref.onSubmit,
        onSubmit = _ref$onSubmit === void 0 ? function (f) {
      return f;
    } : _ref$onSubmit,
        otherOptions = _objectWithoutProperties(_ref, ["formTemplate", "attributes", "inputs", "submitText", "submitButtomClass", "addRequiredLabel", "requiredLabelText", "onSubmit"]);

    _classCallCheck(this, DiaModalForm);

    var formHTML = formTemplate({
      attributes: attributes,
      inputs: addIdsToInputs(inputs),
      submitText: submitText,
      submitButtomClass: submitButtomClass,
      addRequiredLabel: addRequiredLabel,
      requiredLabelText: requiredLabelText
    });
    _this = _possibleConstructorReturn(this, _getPrototypeOf(DiaModalForm).call(this, _objectSpread({
      content: formHTML
    }, otherOptions)));
    _this._formTemplate = formTemplate;
    _this._onSubmit = onSubmit;

    _this.initForm();

    return _this;
  }

  _createClass(DiaModalForm, [{
    key: "initForm",
    value: function initForm() {
      this._form = this._element.querySelector('[data-diamodal-form]');

      this._form.addEventListener('submit', this._onSubmit);

      Object(_DiaModalFormInput__WEBPACK_IMPORTED_MODULE_1__["default"])(this._form);
    }
  }]);

  return DiaModalForm;
}(_DiaModal__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DiaModalForm);

/***/ }),

/***/ "./src/components/DiaModalFormInput.js":
/*!*********************************************!*\
  !*** ./src/components/DiaModalFormInput.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js");

var ID_ATTRIBUTE_NAME = 'data-diamodal-form-input-id';
var SELECTORS = {
  wrapper: '.diamodal-form-input',
  input: '.diamodal-form-input__input'
};
var STATE_CLASSES = {
  focused: 'diamodal-form-input--focused',
  floated: 'diamodal-form-input--floated'
};

function prepareDiamodalFormInputs(selectors, rootElement) {
  var prepared = {};
  var wrappers = rootElement.querySelectorAll(selectors.wrapper);

  for (var i = 0; i < wrappers.length; ++i) {
    var wrapper = wrappers[i],
        input = wrapper.querySelector(selectors.input),
        uid = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["generateUID"])();
    prepared[uid] = {
      wrapper: wrapper,
      input: input
    };
    input.setAttribute(ID_ATTRIBUTE_NAME, uid);

    if (input.value !== "") {
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["addClass"])(wrapper, STATE_CLASSES.floated);
    }
  }

  return prepared;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var prepared = prepareDiamodalFormInputs(SELECTORS, rootElement);
  var inputs = rootElement.querySelectorAll(SELECTORS.input);

  for (var i = 0; i < inputs.length; ++i) {
    inputs[i].addEventListener('focus', function () {
      var inputId = this.getAttribute(ID_ATTRIBUTE_NAME);
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["addClass"])(prepared[inputId].wrapper, STATE_CLASSES.focused);
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["addClass"])(prepared[inputId].wrapper, STATE_CLASSES.floated);
    });
    inputs[i].addEventListener('blur', function () {
      var inputId = this.getAttribute(ID_ATTRIBUTE_NAME);
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(prepared[inputId].wrapper, STATE_CLASSES.focused);

      if (prepared[inputId].input.value === "") {
        Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(prepared[inputId].wrapper, STATE_CLASSES.floated);
      }
    });
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: DiaModal, DiaModalForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills/object-assign */ "./src/polyfills/object-assign.js");
/* harmony import */ var _polyfills_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polyfills_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DiaModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DiaModal */ "./src/components/DiaModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiaModal", function() { return _components_DiaModal__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_DiaModalForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DiaModalForm */ "./src/components/DiaModalForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiaModalForm", function() { return _components_DiaModalForm__WEBPACK_IMPORTED_MODULE_3__["default"]; });

// import styles
 // import polyfills

 // import components




function appendScrollbarCompensateStyleToHead(isMobile) {
  if (!isMobile) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    var css = ".diamodal-scrollbar-compensate{margin-right:".concat(scrollbarWidth, "px!important;}");
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  appendScrollbarCompensateStyleToHead(isMobile);
});


/***/ }),

/***/ "./src/polyfills/object-assign.js":
/*!****************************************!*\
  !*** ./src/polyfills/object-assign.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function value(target, firstSource) {
      'use strict';

      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);

      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];

        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }

      return to;
    }
  });
}

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/templates/diamodal-form.art":
/*!*****************************************!*\
  !*** ./src/templates/diamodal-form.art ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, $each = $imports.$each, $value = $data.$value, $index = $data.$index, input = $data.input, index = $data.index, option = $data.option;
    $$out += '<form class="diamodal-form ';
    $$out += $escape($data.attributes && $data.attributes.class ? $data.attributes.class : '');
    $$out += '" data-diamodal-form ';
    if ($data.attributes) {
        $$out += ' ';
        $each($data.attributes, function ($value, $index) {
            $$out += ' ';
            if ($value !== false && $index !== 'class') {
                $$out += ' ';
                $$out += $escape($index);
                $$out += '="';
                $$out += $escape($value);
                $$out += '" ';
            }
            $$out += ' ';
        });
        $$out += ' ';
    }
    $$out += ' > ';
    if ($data.inputs) {
        $$out += ' ';
        $each($data.inputs, function (input, index) {
            $$out += ' ';
            input.type = input.type || 'text';
            $$out += ' ';
            if (input.type) {
                $$out += ' <div class="diamodal-form-input diamodal-form-input--fullwidth diamodal-form-input--';
                $$out += $escape(input.type);
                $$out += ' ';
                $$out += $escape(input.class || '');
                $$out += '"> ';
                if (input.type === 'textarea') {
                    $$out += ' <textarea class="diamodal-form-input__input" ';
                    $each(input, function ($value, $index) {
                        $$out += ' ';
                        if ($value !== false && [
                                'type',
                                'value',
                                'class',
                                'placeholder'
                            ].indexOf($index) === -1) {
                            $$out += ' ';
                            $$out += $escape($index);
                            $$out += '="';
                            $$out += $escape($value);
                            $$out += '" ';
                        }
                        $$out += ' ';
                    });
                    $$out += ' >';
                    $$out += $escape(input.value || '');
                    $$out += '</textarea> ';
                } else if (input.type === 'select') {
                    $$out += ' <select class="diamodal-form-input__input" ';
                    $each(input, function ($value, $index) {
                        $$out += ' ';
                        if ($value !== false && [
                                'type',
                                'options',
                                'class',
                                'placeholder'
                            ].indexOf($index) === -1) {
                            $$out += ' ';
                            $$out += $escape($index);
                            $$out += '="';
                            $$out += $escape($value);
                            $$out += '" ';
                        }
                        $$out += ' ';
                    });
                    $$out += ' > ';
                    if (input.options) {
                        $$out += ' ';
                        $each(input.options, function (option, $index) {
                            $$out += ' <option ';
                            $each(option, function ($value, $index) {
                                $$out += ' ';
                                if ($value !== false && $index !== 'text') {
                                    $$out += ' ';
                                    $$out += $escape($index);
                                    $$out += '="';
                                    $$out += $escape($value);
                                    $$out += '" ';
                                }
                                $$out += ' ';
                            });
                            $$out += ' > ';
                            $$out += $escape(option.text || option.value || '');
                            $$out += ' </option> ';
                        });
                        $$out += ' ';
                    }
                    $$out += ' </select> ';
                } else if ([
                        'text',
                        'number',
                        'email',
                        'tel',
                        'password',
                        'file',
                        'hidden',
                        'checkbox',
                        'radio'
                    ].indexOf(input.type) !== -1) {
                    $$out += ' <input class="diamodal-form-input__input" ';
                    $each(input, function ($value, $index) {
                        $$out += ' ';
                        if ($value !== false && [
                                'class',
                                'placeholder'
                            ].indexOf($index) === -1) {
                            $$out += ' ';
                            $$out += $escape($index);
                            $$out += '="';
                            $$out += $escape($value);
                            $$out += '" ';
                        }
                        $$out += ' ';
                    });
                    $$out += ' > ';
                }
                $$out += ' <label for="';
                $$out += $escape(input.id);
                $$out += '" class="diamodal-form-input__label">';
                $$out += $escape(input.placeholder || '');
                $$out += $data.addRequiredLabel && input.required && [
                    'checkbox',
                    'radio'
                ].indexOf(input.type) === -1 ? '<span class="diamodal-color-error">*</span>' : '';
                $$out += '</label></div> ';
            }
            $$out += ' ';
        });
        $$out += ' ';
    }
    $$out += ' ';
    if ($data.addRequiredLabel && $data.requiredLabelText) {
        $$out += ' <div class="diamodal-form__required-label-text"><span class="diamodal-color-error">*</span>';
        $$out += $data.requiredLabelText;
        $$out += '</div> ';
    }
    $$out += ' <button type="submit" class="';
    $$out += $escape($data.submitButtomClass);
    $$out += '" data-diamodal-form-submit>';
    $$out += $escape($data.submitText);
    $$out += '</button></form>';
    return $$out;
};

/***/ }),

/***/ "./src/templates/diamodal.art":
/*!************************************!*\
  !*** ./src/templates/diamodal.art ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape;
    $$out += '<div class="diamodal diamodal--is-close" role="dialog" tabindex="-1" style="-webkit-transition-duration: ';
    $$out += $escape($data.transitionDuration);
    $$out += 'ms;-o-transition-duration: ';
    $$out += $escape($data.transitionDuration);
    $$out += 'ms;transition-duration: ';
    $$out += $escape($data.transitionDuration);
    $$out += 'ms;z-index: ';
    $$out += $escape($data.zIndex || 9999);
    $$out += '"><div class="diamodal__container"><div class="diamodal-box diamodal-box--';
    $$out += $escape($data.boxSize);
    $$out += '"><div class="diamodal-box__header"><div class="diamodal-box__title" data-diamodal-title>';
    $$out += $data.title;
    $$out += '</div><button class="diamodal-box__close-button" data-diamodal-close><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642"><path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"/></svg></button></div><div class="diamodal-box__content" data-diamodal-content>';
    $$out += $data.content;
    $$out += '</div></div></div></div>';
    return $$out;
};

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! exports provided: generateUID, createElementFromHTML, addClass, removeClass, addDelegatedEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUID", function() { return generateUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementFromHTML", function() { return createElementFromHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDelegatedEventListener", function() { return addDelegatedEventListener; });
function generateUID() {
  return '_' + Math.random().toString(14).substr(2, 6);
}

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

  return div.firstChild;
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);else el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function addDelegatedEventListener(element, eventName, selector, handler) {
  var useCapture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  element.addEventListener(eventName, function (e) {
    for (var target = e.target; target && target != this; target = target.parentNode) {
      // loop parent nodes from the target to the delegation node
      if (target.matches(selector)) {
        handler.call(target, e);
        break;
      }
    }
  }, useCapture);
}



/***/ })

/******/ });
});
//# sourceMappingURL=diamodal.js.map
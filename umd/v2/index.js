!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react-leaflet"),require("leaflet"),require("react"),require("react-dom"),require("prop-types")):"function"==typeof define&&define.amd?define(["react-leaflet","leaflet","react","react-dom","prop-types"],t):(e=e||self).ReactLeafletSearch=t(e.ReactLeaflet,e.L,e.React,e.ReactDOM,e.PropTypes)}(this,(function(e,t,s,o,n){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
function r(e,t,s,o){return new(s||(s=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function i(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):new s((function(t){t(e.value)})).then(a,i)}l((o=o.apply(e,t||[])).next())}))}s=s&&s.hasOwnProperty("default")?s.default:s,n=n&&n.hasOwnProperty("default")?n.default:n;var a={OpenStreetMap:class{constructor(e){let t="",s="";if(e&&e.searchBounds&&e.searchBounds.length){t=`&bounded=1&viewbox=${e.searchBounds.reduce((e,t)=>[...e,t.lng,t.lat],[]).join(",")}`}e&&"region"in e&&(s=`&countrycodes=${e.region}`),this.url=`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&polygon_svg=1&namedetails=1${t}${s}&q=`}search(e){return r(this,void 0,void 0,(function*(){const t=yield fetch(this.url+e),s=yield t.json();return this.formatResponse(s)}))}formatResponse(e){const t=e;return{info:e.length>0?t.map(e=>({bounds:e.boundingbox.map(e=>Number(e)),latitude:Number(e.lat),longitude:Number(e.lon),name:e.display_name})):"Not Found",raw:e}}},BingMap:class{constructor(e){var t,s,o;this.key=null===(t=e)||void 0===t?void 0:t.providerKey;let n="";if(null===(o=null===(s=e)||void 0===s?void 0:s.searchBounds)||void 0===o?void 0:o.length){n=`&umv=${e.searchBounds.reduce((e,t)=>[...e,t.lat,t.lng],[]).join(",")}`}this.url=`https://dev.virtualearth.net/REST/v1/Locations?output=json${n}&key=${this.key}&q=`}search(e){return r(this,void 0,void 0,(function*(){if(void 0===this.key)return{error:"BingMap requires an api key"};const t=yield fetch(this.url+e).then(e=>e.json());return this.formatResponse(t)}))}formatResponse(e){const t=e.resourceSets[0].resources;return{info:e.resourceSets[0].estimatedTotal>0?t.map(e=>({bounds:e.bbox.map(e=>Number(e)),latitude:Number(e.point.coordinates[0]),longitude:Number(e.point.coordinates[1]),name:e.name})):"Not Found",raw:e}}}};const i=s.forwardRef(({placeholder:e="PlaceHolder",type:t="text",initialValue:o="",className:n="",debounceTime:r=400,getInputValueSetter:a=(()=>{}),onClick:i=(()=>{}),onDoubleClick:l=(()=>{}),onMouseDown:c=(()=>{}),onMouseEnter:h=(()=>{}),onMouseLeave:p=(()=>{}),onChange:u=(()=>{}),onChangeAsync:d=(()=>{}),onFocus:f=(()=>{}),onBlur:m=(()=>{}),onKeyUp:v=(()=>{}),onKeyDown:y=(()=>{}),onKeyPress:g=(()=>{}),onSubmit:b=(()=>{}),tabIndex:k=0},S)=>{const[w,I]=s.useState(o),C=s.useCallback((e,t)=>{t(e)},[]),N=s.useCallback(function(e,t,s=400){let o;return n=>{n.persist(),t&&t(n),clearTimeout(o),o=window.setTimeout(()=>{e(n)},s)}}(e=>{e.preventDefault(),e.stopPropagation(),d(e)},e=>{e.preventDefault(),e.stopPropagation(),I(e.target.value),u(e)},r),[I]);return s.useLayoutEffect(()=>{a(I)}),s.createElement("input",{tabIndex:k,ref:S,type:t,name:"SearchInput",value:w,placeholder:e,className:`search-input${n?` ${n}`:""}`,onClick:e=>C(e,i),onDoubleClick:e=>C(e,l),onMouseEnter:e=>C(e,h),onMouseLeave:e=>C(e,p),onMouseDown:e=>C(e,c),onChange:N,onFocus:e=>C(e,f),onBlur:e=>C(e,m),onKeyUp:e=>C(e,v),onKeyDown:e=>C(e,y),onKeyPress:e=>C(e,g),onSubmit:e=>C(e,b)})});function l({className:e="",onClick:t=(e=>{e.preventDefault(),e.stopPropagation()})}){return s.createElement("button",{className:`search-control-close-button${e?` ${e}`:""}`,onClick:t},s.createElement("svg",{viewBox:"0 0 50 50"},s.createElement("path",{d:"M5 5 L45 45 M45 5 L5 45"}),"Sorry, your browser does not support inline SVG."))}function c({className:e="",onClick:t=(()=>{}),onMouseEnter:o=(()=>{}),onMouseLeave:n=(()=>{})}){return s.createElement("button",{className:`${e||""}`,onClick:t,onMouseEnter:o,onMouseLeave:n},s.createElement("svg",{viewBox:"0 0 50 50"},s.createElement("line",{x1:"35",y1:"35",x2:"46",y2:"46"}),s.createElement("circle",{cx:"23",cy:"23",r:"16",fill:"none"}),"Sorry, your browser does not support inline SVG."))}const h=({value:e,className:t,candidate:o,onClick:n,onKeyDown:r,children:a})=>{const i=s.useRef(null);return s.useEffect(()=>{e===o&&i.current&&i.current.offsetParent&&i.current.scrollIntoView({behavior:"smooth",block:"nearest"})},[o,e]),s.createElement("li",{ref:i,value:e,className:t,onClick:n,onKeyDown:r},a)},p=(e,t)=>{const{handler:o,list:n,tabIndex:r,activeIndex:a}=e,[i,l]=s.useState(0),c=s.useCallback(e=>{if(Array.isArray(n)){e.stopPropagation(),9!==e.keyCode&&e.preventDefault();const t=n.length;if((t<=i||i<0||13!==e.keyCode)&&32!==e.keyCode){const s=t<=i||i<0?0:i;38===e.keyCode?l(0===s?n.length-1:s-1):40===e.keyCode&&l(s+1===n.length?0:s+1)}else o(n[i],n,i)}},[l,i,n]);return s.useLayoutEffect(()=>l(0),[n]),Array.isArray(n)?s.createElement("ul",Object.assign({ref:t},void 0!==r?{tabIndex:e.tabIndex}:{},{className:"search-control-info-list",onKeyDown:c}),n.map((e,t)=>s.createElement(h,{value:t,candidate:i,key:`${e.name}-${t}`,className:`search-control-info-list-item${t===a||e.checked?" active":""}${i===t?" candidate":""}`,onClick:()=>{l(t),o(e,n,t)},onKeyDown:c},e.name))):s.createElement("span",{className:"search-control-info-span"},n)};p.displayName="SearchInfoList";const u=s.forwardRef(p);class d extends s.Component{constructor(e){if(super(e),this.setLock=e=>{this.lock=e},this.openSearch=()=>{this.setState({open:!0},()=>{var e;null===(e=this.input.current)||void 0===e||e.focus()})},this.closeSearch=()=>{this.setState({open:this.props.openSearchOnLoad,closeButton:!1,showInfo:!1},()=>{this.inputValueSetter(""),this.SearchResponseInfo="",this.props.removeMarker&&this.props.removeMarker({event:"remove"})})},this.aClick=e=>{e.preventDefault(),e.stopPropagation(),this.state.open?this.closeSearch():this.openSearch()},this.inputBlur=e=>{var t;""===(null===(t=this.input.current)||void 0===t?void 0:t.value)&&!this.lock&&this.closeSearch()},this.inputClick=e=>{var t,s,o;null===(t=this.input.current)||void 0===t||t.focus(),(null===(s=this.input.current)||void 0===s?void 0:s.value.startsWith(":"))||null===this.lastInfo||""===this.lastInfo||""===(null===(o=this.input.current)||void 0===o?void 0:o.value)||(this.SearchResponseInfo=this.lastInfo,this.lastInfo=null,this.setState({showInfo:!0}))},this.inputKeyUp=e=>{13===e.keyCode&&this.beautifyValue(this.input.current.value)},this.closeClick=e=>{this.closeSearch()},this.sendToAction=e=>r(this,void 0,void 0,(function*(){if(!this.input.current.value.startsWith(":"))if(Object.prototype.hasOwnProperty.call(this.responseCache,this.input.current.value))this.showInfo(this.responseCache[this.input.current.value].info);else if(this.input.current.value.length>=3){this.showInfo("Searching...");const e=yield this.provider.search(this.input.current.value);if(e.error)return!1;this.responseCache[this.input.current.value]=e,this.showInfo(e.info)}})),this.syncInput=()=>{var e,t;!this.state.closeButton&&this.setState({closeButton:!0}),""==(null===(e=this.input.current)||void 0===e?void 0:e.value)&&(this.hideInfo(),this.state.closeButton&&this.setState({closeButton:!1})),null===(t=this.input.current)||void 0===t||t.value.startsWith(":")},this.listItemClick=(e,s,o)=>{this.showInfo(s,o),this.props.handler&&this.props.handler({event:"add",payload:{latlng:new t.LatLng(Number(e.latitude),Number(e.longitude)),info:e.name,raw:this.responseCache[this.input.current.value]}}),this.props.closeResultsOnClick&&this.hideInfo()},this.setMaxHeight=()=>{const e=this.props.map?this.props.map.getContainer().getBoundingClientRect():document.body.getBoundingClientRect(),t=this.input.current.getBoundingClientRect(),s=`${Math.floor(.6*(e.bottom-t.bottom-10))}px`;this.selectbox.current&&this.selectbox.current.style&&(this.selectbox.current.style.maxHeight=s)},this.state={open:this.props.openSearchOnLoad,closeButton:!1,showInfo:!1},this.SearchResponseInfo="",this.responseCache={},this.lastInfo=null,this.inputValueSetter=()=>{},this.selectbox=s.createRef(),this.div=s.createRef(),this.input=s.createRef(),this.props.customProvider)this.provider=this.props.customProvider;else{if(!this.props.provider||!Object.keys(a).includes(this.props.provider))throw new Error(`You set the provider prop to ${this.props.provider} but that isn't recognised. You can choose from ${Object.keys(a).join(", ")}`);{const e=a[this.props.provider];this.provider=new e(this.props.providerOptions)}}}beautifyValue(e){if(e.startsWith(":")){const s=e.slice(1).split(",").filter(e=>!isNaN(Number(e))).map(e=>Number(e||0));s.length<=1?this.showInfo("Please enter a valid lat, lng"):(this.hideInfo(),this.props.handler&&this.props.handler({event:"add",payload:{latlng:new t.LatLng(Number(s[0]),Number(s[1])),info:s.join(","),raw:s.join(",")}}))}else if(this.input.current.value.length<3){const e='Please enter a valid lat,lng starting with ":" or minimum 3 character to search';this.showInfo(e)}}hideInfo(){this.lastInfo=this.SearchResponseInfo,this.SearchResponseInfo="",this.setState({showInfo:!1})}showInfo(e,t){var o;this.SearchResponseInfo=s.createElement(u,{ref:this.selectbox,activeIndex:t,list:e,handler:this.listItemClick,tabIndex:void 0!==this.props.tabIndex?this.props.tabIndex+1:2}),(null===(o=this.input.current)||void 0===o?void 0:o.value)&&this.setState({showInfo:!0})}componentDidMount(){if(this.setMaxHeight(),this.props.search&&!isNaN(Number(this.props.search.lat))&&!isNaN(Number(this.props.search.lng))){const e=`:${this.props.search.lat},${this.props.search.lng}`;this.inputValueSetter(e),this.openSearch(),this.syncInput(),this.props.handler&&this.props.handler({event:"add",payload:{latlng:new t.LatLng(Number(this.props.search.lat),Number(this.props.search.lng)),info:e,raw:this.props.search}})}}componentDidUpdate(){this.setMaxHeight(),this.state.showInfo}render(){return s.createElement("article",{className:`${this.props.className?`${this.props.className} `:""}search-control-wrap`},s.createElement("section",{className:`search-control${this.state.open?" search-control-active":""}`},s.createElement(c,{className:"search-control-icon-button",onClick:this.aClick,onMouseEnter:()=>this.setLock(!0),onMouseLeave:()=>this.setLock(!1)}),s.createElement(i,{tabIndex:void 0!==this.props.tabIndex?this.props.tabIndex:1,ref:this.input,getInputValueSetter:e=>this.inputValueSetter=e,className:"search-control-input",placeholder:this.props.inputPlaceholder,onClick:this.inputClick,onMouseEnter:()=>this.setLock(!0),onMouseLeave:()=>this.setLock(!1),onChange:this.syncInput,onChangeAsync:this.sendToAction,onBlur:this.inputBlur,onKeyUp:this.inputKeyUp,onKeyPress:e=>{e.stopPropagation(),40===e.keyCode&&e.preventDefault()},onKeyDown:e=>{var t;40===e.keyCode&&(e.preventDefault(),e.stopPropagation(),null===(t=this.selectbox.current)||void 0===t||t.focus())},onSubmit:e=>e.preventDefault()}),s.createElement(l,{className:this.state.closeButton?" search-control-close-button-active":"",onClick:this.closeClick})),s.createElement("section",{className:`search-control-info-wrapper${this.state.showInfo?"":" search-control-info-wrapper-close"}`},s.createElement("section",{ref:this.div,className:"search-control-info"},this.state.showInfo&&this.SearchResponseInfo)))}}d.propTypes={provider:n.string,providerKey:n.string,inputPlaceholder:n.string,coords:n.arrayOf(n.number),closeResultsOnClick:n.bool,openSearchOnLoad:n.bool,searchBounds:n.array,providerOptions:n.object},d.defaultProps={inputPlaceholder:"Search Lat,Lng",closeResultsOnClick:!1,openSearchOnLoad:!1,search:void 0,provider:"OpenStreetMap"};class f extends e.MapControl{constructor(e,o){var n;super(e),this.handler=({event:e,payload:t})=>{this.searchCallback&&this.searchCallback({event:e,payload:t}),"add"===e?t&&this.latLngHandler(t.latlng,t.info,t.raw):this.removeMarkerHandler()},this.div=t.DomUtil.create("div","leaflet-search-wrap"),t.DomEvent.disableClickPropagation(this.div),t.DomEvent.disableScrollPropagation(this.div),this.state={search:!1,info:!1},this.markerIcon=t.icon({iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]}),this.SearchInfo=null,this.map=o.map||(null===(n=e.leaflet)||void 0===n?void 0:n.map),this.markerRef=s.createRef(),e.searchCallback&&(this.searchCallback=e.searchCallback)}createLeafletElement(e){return new(t.Control.extend({onAdd:e=>this.div,onRemove:e=>{}}))(e)}latLngHandler(e,t,o){this.SearchInfo={info:t,latLng:e,raw:o};const n=s.createElement("div",null,s.createElement("p",null,Array.isArray(t)?t.toString():t),s.createElement("div",{className:"search-control-popup-seperator"}),s.createElement("div",null,`latitude: ${e.lat}`),s.createElement("div",null,`longitude: ${e.lng}`));this.goToLatLng(e,n)}removeMarkerHandler(){this.setState({search:!1})}goToLatLng(e,t){this.setState({search:e,info:t},()=>{this.flyTo()})}flyTo(){if(this.state.search)switch(this.props.mapStateModifier){case"flyTo":this.map&&this.map.flyTo(this.state.search,this.props.zoom,this.props.zoomPanOptions);break;case"setView":this.map&&this.map.setView(this.state.search,this.props.zoom,this.props.zoomPanOptions);break;default:"function"==typeof this.props.mapStateModifier&&this.props.mapStateModifier(this.state.search)}}componentDidMount(){super.componentDidMount&&super.componentDidMount(),o.render(s.createElement(d,Object.assign({className:this.props.className,provider:this.props.provider,customProvider:this.props.customProvider,providerOptions:this.props.providerOptions,openSearchOnLoad:this.props.openSearchOnLoad,closeResultsOnClick:this.props.closeResultsOnClick,inputPlaceholder:this.props.inputPlaceholder,search:this.props.search,map:this.map,handler:this.handler,removeMarker:this.handler},void 0!==this.props.tabIndex?{tabIndex:this.props.tabIndex}:{})),this.div)}componentDidUpdate(){this.markerRef.current&&this.markerRef.current.leafletElement.openPopup()}defaultPopUp(){return s.createElement(e.Popup,null,s.createElement("span",null,this.state.info))}render(){return this.SearchInfo&&this.state.search&&this.props.showMarker?s.createElement(e.Marker,{ref:this.markerRef,icon:this.props.markerIcon||this.markerIcon,key:`marker-search-${this.state.search.toString()}`,position:this.state.search},this.props.showPopup&&(this.props.popUp?this.props.popUp(this.SearchInfo):this.defaultPopUp())):null}}return f.defaultProps={inputPlaceholder:"Search Lat,Lng",showMarker:!0,showPopup:!0,zoom:10,closeResultsOnClick:!1,openSearchOnLoad:!1,search:void 0,provider:"OpenStreetMap",mapStateModifier:"flyTo",zoomPanOptions:{animate:!0,duration:.25,easeLinearity:.25,noMoveStart:!1}},e.withLeaflet(f)}));

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 公共icon */
	@font-face {
	  font-family: "iconfont";
	  src: url('static/iconfont/iconfont.eot?t=1593756439778'); /* IE9 */
	  src: url('static/iconfont/iconfont.eot?t=1593756439778#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAV4AAsAAAAACmgAAAUqAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqICIY1ATYCJAMUCwwABCAFhG0HThu/CCMRdnNvkpD9VYIp9w2FRhBAaBqMSFwWrFQCOklzWH3BDtFyG/Vpc2ifY4InWvu92dmTr+AN0iX4EVFPqolEKGapEaJWCMmiWr6B3/XWU12ndq8HyBNqc7c5PLoJOAz6ApwAAXabcz2BMVEvR3IW/ZMfpBunl6WjEvcPgINjpmtqsDyguWQFRgKOBjyaZn9qldA/sLz7q4DnkkHHrN68HgJEyZciTS1dQ/hYPKmgaHVpYQq/psOOUARf6fbstMgxDr7ZMVcAHKW/L6+454PBUbyVffPNs9Q9iJ5NKR7ijMYI+NuzAMY+UCAFLMhyr20WzWMpSnSWaSkDvj/OwEPas6JnZWFIXFJwLhafKP/hgcEiKIiLJ4sTWxe38JAM+VeSD16fvAgaBPIpyLmvaGdHFMiCtINs4eEDf4XiYPECT/sxFxNgoBpqx0NFIA+EdBcgJAVIJth93Fo0ehQw+DEr8cQJAzALxGk+X8qC6gRTiWkBIlVxXnbOgu3ezLS2QhF8W0HKUo/KMqlJbK9j5058l942r64p/sQJUJWYth5RhpxQSuVBx+Rmo5OAwaesBmUI0j1Nz+hR/Ngm1ZwBHkCZA7KczgGXnhFieC5FkQzBIPsVhNJHyhKslNaqQ5oSdmImjVMVJIWPWrRV2V7OQX3kPjku81yghqovQEcnddW6pqxmTHAG6t3TM0ltplunoOfIgUNaWSxnM3FIL4vuHB3XzmYYksJ0qdE8PIrlUh14KnxKyhHT80Tjxw1Kek7YCMeO6RV1HZ1NYYU4rSVmWbCY0S5FaMFHkZNlCH7oCHH4YBQCDiuiyYu2k4NaAAJ2K0M4JV8uzwowZyygbkht64EhUd1N6GadyUPT2tRcKx5qnqoGd0EWUBesAnU7iSwsXkEPoU/kll7/BKDq47Grc5M9ZRqRvvP+py/wWBOo0f8Fu3pPmWfy6qM/RLHox9HVGc8xXGIQiAVDBe71XZebnOZRfbmL71YABWOBWIp2cnR4cEj5eawCl3hr6lVg58tDUgrz1VIAmVXS3Ks/xt1dgD+NHpZwPNAxqR3jQB4nOYJy8BzzitzD8SrgWOP5ez7qMDoNB8IcekR2A8B36c1BdNAN8EVb30GD0LvW9GvuxMOVTGT9HuGg+1L3G0UL+z+7pZbeamXqrJzSa9vYmtvwubh/HencQfLk/D0iadBI6ztXfzVQ5Jq88ml/SKK+f+nGNxtL/bO04IGcpkF9psNRbStas2F8l/3g5mQbcZRZlmmWWVSZ2Fo7K8sxM/OC8x5eYgJhoGa+VcHf67xXRRJj2RVmABV0VTUviazjjdVLcwTCzfqlraT90JMKJ3brvrZ/SmdxtB0xE2mB/z7/iztwE7zRoTfcbFmP/1Hji/mfSZmtd9i50NM61pWZflHIEzAcDnaew8BHUPhZTEGm++0ocsSFIPjklGDwyAPFJ0BabAocYhSBi08tRCnUuj9GljUUsRGgwIYCQroTMCQ5BSXdNdJi78Ah1zu4pKcQZUQ0T4xx/1X9CBhTwQKyFeqcBhUY5ZEVv7E0XcpVYUr9I491EFzLaSYTHJC3sWacSk9EgWLqIVZuhl1HoJkazMWqRLRv26rviayc+t1DwJgKFiBbQZ3ToOL+8mj9/BtL06U8UnPG+kce6+GBy+IIkIlsENU8lspxKj3CiALKKKQexLRg58cI6P5pDeZiqdaIaJ/NXkoqs/av6B9j/p+irvcATkZUrDjicr4ukJ5dnQ5LPVOPw0WMrlWdSzKz2e0AAAA=') format('woff2'),
	  url('static/iconfont/iconfont.woff?t=1593756439778') format('woff'),
	  url('static/iconfont/iconfont.ttf?t=1593756439778') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('static/iconfont/iconfont.svg?t=1593756439778#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-video:before {
	  content: "\e634";
	}
	
	.icon-lianxiwomen:before {
	  content: "\e60e";
	}
	
	.icon-tupian:before {
	  content: "\e661";
	}
	
	.icon-gouwu:before {
	  content: "\e60f";
	}
	
	
	.gomeImgLoad{
		width: 750rpx;
		height: auto;
	}
</style>

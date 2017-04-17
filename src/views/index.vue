<style lang="less" scoped>

</style>
<template>
	<div>
		<my-header></my-header>
		<router-view></router-view>
		<my-footer></my-footer>
	</div>

</template>

<script>
	import MyHeader from 'components/header';
	import MyFooter from 'components/footer';
	export default {
		data() {
			return {}
		},
		components: {
			MyHeader,
			MyFooter
		},
		methods: {},
		created() {
			if(this.$route.name === '/'){
				this.goPage('index');
			}
		}
	}
</script>
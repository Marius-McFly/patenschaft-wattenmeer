<template>
	<div
		class="w-8 h-8 cursor-pointer"
		@click="$emit('click')"
	>
		<div class="line-top h-[3px] w-full bg-black-default mb-2 rounded" />
		<div class="line-middle h-[3px] w-8 bg-black-default mb-2 rounded fixed" />
		<div class="line-middle h-[3px] w-full bg-black-default mb-2 rounded" />
		<div class="line-bottom h-[3px] w-full bg-black-default rounded" />
	</div>
</template>

<script>
export default {
	name: 'IconMenu'

}
</script>

<style scoped>

div {
  transition: all 500ms;
}

.active .line-middle {
  transform: rotate(45deg);
}

.active .line-middle:nth-child(2) {
  transform: rotate(-45deg);
}

.active .line-top {
  transform: translateY(11px);
  opacity: 0;
}

.active .line-bottom {
  transform: translateY(-11px);
  opacity: 0;
}

</style>

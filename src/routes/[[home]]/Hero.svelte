<script>
	import data from './content.json';
	import profilePic from '$lib/Images/profilePic2.jpg';
</script>

<section name="hero " class=" w-full flex ">
	<!-- <h1 class="my-20 mx-10 text-neutral-500">
		{data.home.messageHeader}
	</h1>
	<div class="flex">
		<h2 class="w-72">
			{@html data.home.messageContent}
		</h2>
		<img src={profilePic} alt="" />
	</div> -->
	<div>
		<h1 class="m-20 flex text-neutral-500 text-[64px] font-normal">
			{data.home.messageHeader}
		</h1>
		<div class=" flex-col items-center">
			<div class="w-full h-72 bg-amber-200 items-center right-0 left-0 absolute z-0">
				<div class="w-[700px] p-20 text-neutral-500 text-4xl font-normal">
					{@html data.home.messageContent}
				</div>
			</div>
		</div>
	</div>
	<div class="flex z-10 right-1 ml-96 mt-">
		<img class="w-auto h-[500px] rounded-r-3xl inline-flex" src={profilePic} />

		<div
			class="origin-top-left rotate-90 text-center text-neutral-500 text-opacity-25 text-8xl font-normal"
		>
			RDTECT
		</div>
	</div>


	<!-- <div class=" flex">
		<div class="h-full grid grid-flow-row grid-cols-1">
			<div class="flex my-auto m-16"><h1>{data.home.messageHeader}</h1></div>
			<div class="flex my-auto mx-16 bg-amber-200 "><h2>{@html data.home.messageContent}</h2></div>
		</div>
		<div class="flex">
			<img class="rounded-3xl" src={profilePic} alt="" />
			RDTECT
		</div>
	</div> -->
</section>

<style>
	section {
		@apply text-2xl;
		@apply font-bold;

		@apply text-gray-900;
		@apply m-10;
	}
</style>

<template>
	<div class="about-wrap bg-black">
		<div class="about-bg">
			<div class="container">
				<div class="col-11 col-md-8 about-box text-white ms-auto">
					<div class="title d-flex align-items-center">
						<h2 class="fs-3 fs-md-1 text-nowrap">關於<br>我們</h2>
						<span class="bar ms-5"></span>
					</div>
					<p class="mb-3 mb-md-5">
						享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br>
						我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
					</p>
					<p class="mb-3 mb-md-5">
						我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br>
						我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
					</p>
					<p class="mb-3 mb-md-5">
						在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
					</p>
					<p>
						享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.title {
	@include media-md {
		margin-bottom: 5rem;
	}

	margin-bottom: 2.5rem;
}

.bar {
	@include media-md {
		width: 160px;
		flex: none;
	}

	flex: 1 0 0%;
	display: block;
	height: 2px;
	background: $white;
}

.about-wrap {
	position: relative;

	&::before {
		@include media-md {
			top: -5%;
			left: 10%;
			width: 100px;
			height: 100px;
			background-image: url('/image/desktop/dot.png');
		}

		content: '';
		position: absolute;
		top: -5%;
		left: 10%;
		width: 100px;
		height: 100px;
		background-image: url('/image/mobile/dot.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100%;
	}

	@include media-md {
		padding: 7.5rem 0 12.5rem;
	}

	padding: 5rem 0 7.5rem;

	.about-bg {
		@include media-md {
			background-image: url('/image/desktop/about.png');
		}

		background-image: url('/image/mobile/about.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

	}
}

.about-box {
	@include media-md {
		padding: 5rem;
		border-radius: 5rem 5rem 0;
	}

	padding: 1.5rem;
	margin-bottom: -10rem;
	background: linear-gradient(180deg, rgb(20 15 10 / 80%) 0%, rgb(190 156 124 / 80%) 100%);
	border-radius: 2.5rem 2.5rem 0;
	backdrop-filter: blur(10px);
	border-bottom: 1px solid $gray-10;
	border-left: 1px solid $gray-10;
}
</style>

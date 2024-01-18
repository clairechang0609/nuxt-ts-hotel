<template>
	<div class="bg-secondary">
		<div class="container">
			<div class="title d-flex align-items-center">
				<h2 class="fs-1 text-primary">交通<br>方式</h2>
				<span class="bar ms-5"></span>
			</div>
			<p class="text-white fw-bold mt-5 mb-3">台灣高雄市新興區六角路123號</p>
			<image class="d-none d-md-block w-100 mb-5" src="/image/desktop/map.png" alt="google_map"></image>
			<image class="d-block d-md-none w-100 mb-5" src="/image/mobile/map.png" alt="google_map"></image>
			<ul class="row px-0 text-white list-unstyled">
				<li class="d-flex flex-column col-12 col-md-4 mb-4 mb-md-0">
					<div class="icon car"></div>
					<span class="fw-bold fs-5 pt-3 pb-2">自行開車</span>
					<span class="">如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</span>
				</li>
				<li class="d-flex flex-column col-12 col-md-4 mb-4 mb-md-0">
					<span class="icon train"></span>
					<span class="fw-bold fs-5 pt-3 pb-2">高鐵/火車</span>
					<span class="">如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</span>
				</li>
				<li class="d-flex flex-column col-12 col-md-4 mb-4 mb-md-0">
					<span class="icon luxurycar"></span>
					<span class="fw-bold fs-5 pt-3 pb-2">禮賓車服務</span>
					<span class="">
						承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：
						<a class="" href="tel:07-123-4567">(07)123-4567</a>
					</span>
				</li>
			</ul>
		</div>
		<div class="wave"></div>
	</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.title {
	margin-bottom: 5rem;
}

.bar {
	display: block;
	width: 160px;
	height: 2px;
	background: linear-gradient(90deg, #BE9C7C 0%, #FFF 100%);
}

.icon {
	width: 48px;
	height: 48px;

	@include media-md {
		width: 80px;
		height: 80px;
	}

	background-color: $primary;
	mask-repeat: no-repeat;
	mask-position: center;
	mask-size: contain;

	&.luxurycar {
		mask-image: url('/image/ic_luxurycar.svg');
	}

	&.car {
		mask-image: url('/image/ic_car.svg');
	}

	&.train {
		mask-image: url('/image/ic_train.svg');
	}

}

.wave {
	@include media-md {
		background-image: url('/image/desktop/line.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	height: 200px;
	background-image: url('/image/mobile/line.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>

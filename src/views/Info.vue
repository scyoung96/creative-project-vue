<template>
<div>
	<h1 :class="$root.$data.curr_card.type">{{$root.$data.curr_card.name}}</h1>
	<p>Set: {{$root.$data.curr_card.set}}</p>
	<div class="image">
		<img :src="'/images/' + $root.$data.curr_card.image">
	</div>
	<div class="card_info" :class="$root.$data.curr_card.type">
		<p class="top">{{$root.$data.curr_card.top}}</p>
		<hr>
		<p class="move">{{$root.$data.curr_card.move1}}</p>
		<p class="move">{{$root.$data.curr_card.move2}}</p>
		<hr>
		<p class="bottom">{{$root.$data.curr_card.bottom}}</p>
		<hr>
		<p class="pokedex">{{$root.$data.curr_card.pokedex}}</p>
	</div>

</div>
</template>

<style scoped>
h1.Grass {
	color: green;
	filter: brightness(50%);
}

h1.Fire {
	color: red;
	filter: brightness(50%);
}

h1.Water {
	color: blue;
	filter: brightness(50%);
}

.image img {
	border: 10px solid #008888;
	border-radius: 20px;
	padding: 10px;
}

.card_info {
	margin-top: 10px;
	border-radius: 20px;
	padding: 15px;
}

.card_info.Grass {
	background-color: rgba(0,255,0,.5);
}

.card_info.Fire {
	background-color: rgba(255,0,0,.5);
}

.card_info.Water {
	background-color: rgba(0,0,255,.5);
}

.card_info p {
	font-family: consolas;
	font-weight: bold;
}

p.top {
	margin-top: 0;
}

p.pokedex {
	margin-bottom: 0;
}

</style>

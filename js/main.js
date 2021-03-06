import { Game } from "./game.js";
import { ImageLoader } from "./image_loader.js";

window.onload = () => {
	const game = new Game(document.getElementById("canvas").getContext("2d"));
	game.config.keybinds.flap = "";
	game.start();

	document.getElementById("speed").addEventListener("input", () => {
		game.config.speed_multiplier = parseFloat(document.getElementById("speed").value).toFixed(2);
		document.getElementById("speed-label").innerText = `${game.config.speed_multiplier}x Speed`;
	});
	document.getElementById("max-speed-btn").addEventListener("click", () => {
		document.getElementById("speed-label").innerText = "MAX Speed";
		document.getElementById("speed").value = document.getElementById("speed").max;
		game.config.speed_multiplier = 0;
	});
	document.getElementById("debug-mode").addEventListener("click", () => {
		game.config.debug_mode = document.getElementById("debug-mode").checked;
		window.game = game.config.debug_mode ? game : undefined;
	});
	document.getElementById("only-show-best-bird").addEventListener("click", () => {
		game.config.only_show_best_bird = document.getElementById("only-show-best-bird").checked;
	});

	document.getElementById("reset-btn").addEventListener("click", () => {
		game.reset();
		game.restart();
	});
};
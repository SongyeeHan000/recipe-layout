export default function Recipe() {
    return ( 
        <div className="recipe">
            {/* <img src={omlette} alt="omlette"/> */}
            <div>
                <h1>Simple Omelette Recipe</h1>
                <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                <div className="prepTime">
                    <h3>Preparation time</h3>
                    <ul>
                        <li><b>Total:</b> Approximately 10 minutes</li>
                        <li><b>Preparation:</b> 5 minutes</li>
                        <li><b>Cooking:</b> 5 minutes</li>
                    </ul>
                </div>
                <div className="ingredients">
                    <h2 className>Ingredients</h2>
                    <ul >
                        <li><span className='text'>2-3 large eggs</span></li>
                        <li><span className='text'>Salt, to taste</span></li>
                        <li><span className='text'>Pepper, to taste</span></li>
                        <li><span className='text'>1 tablespoon of butter or oil</span></li>
                        <li><span className='text'>Optional fillings, cheese, diced vegetables, cooked meats, herbs</span></li>
                    </ul>
                </div>
                <div className="instructions">
                    <h2>Instructions</h2>
                    <ol>
                        <li><span className='text'>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
                        <li><span className='text'>Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
                        <li><span className='text'>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span> </li>
                        <li><span className='text'>Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
                        <li><span className='text'>Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
                        <li> <span className='text'>Enjoy: Serve hot, with additional salt and pepper if needed.</span></li>
                    </ol>
                </div>
               <div className="nutrition">
                    <h2>Nutrition</h2>
                    <p>The table below shows nutritional values per serving without the additional fillings.</p>
               </div>
               
            </div>
        </div>
    )
}

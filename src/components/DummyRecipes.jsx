import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './DummyRecipes.css'

const DummyRecipes = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let mounted = true

        const fetchRecipes = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/recipes')
                if (mounted) setRecipes(res.data.recipes)
                console.log(res.data.recipes);
            } catch (err) {
                console.log(err)
                if (mounted) setError('레시피를 불러오지 못했습니다.')
            } finally {
                if (mounted) setLoading(false)
            }
        }

        fetchRecipes()
        return () => {
            mounted = false
        }
    }, [])

    return (
        <div className="recipes-wrap">
            <h2>recipes</h2>
            <ul>
                {recipes.map((r) => (
                    <li key={r.id}>
                        <span>{r.id}</span>
                        <div className="img-wrap">
                            <img src={r.image} alt={r.name} />
                        </div>
                        <h2>{r.name}</h2>
                        <ol>
                            {r.instructions.map((step)=>(
                                <li key={step}>{step}</li>
                            ))}
                        </ol>
                        {r.tags.map((tag)=>(
                            <span key={tag}>{tag}</span>
                        ))}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default DummyRecipes
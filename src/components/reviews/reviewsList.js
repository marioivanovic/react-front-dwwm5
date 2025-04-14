import React from 'react';
import { useReview } from '../../hooks/useReview';

export default function ReviewList() {
    const { reviews, loading, error } = useReview();

    return (
        <section>
            <h2>Avis des visiteurs</h2>

            {/* Message de chargement */}
            {loading && <p>Chargement des avis...</p>}

            {/* Message d'erreur */}
            {error && <p>{error}</p>}

            {/* Aucun avis présent */}
            {!loading && !error && reviews.length === 0 && (
                <p>Aucun avis pour le moment. Soyez le premier à en laisser un !</p>
            )}

            {reviews.map((review) => (
                <article key={review.id}>
                    <p><strong>{review.name}</strong> — {review.rating}/5</p>
                    <p>{review.description}</p>
                    <hr />
                </article>
            ))}
        </section>
    );
}
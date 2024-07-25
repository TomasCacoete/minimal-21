import { Rank, Card } from "../card";
import { BlackjackCardValuesMap } from "./blackjack_card_values";

export type BlackjackPlayer = {
    money: number,
    hands: Card[][]
}

export function get_hand_total(hand: Card[]){
    let hand_total : number = 0;
    let ace_number : number = 0;

    for(const card of hand){
        hand_total += BlackjackCardValuesMap[card.rank];

        if(card.rank === Rank.Ace){
            ace_number++;
        }
    }

    while(hand_total > 21 && ace_number > 0){
        hand_total -= 10;
        ace_number--;
    }

    return hand_total;
}
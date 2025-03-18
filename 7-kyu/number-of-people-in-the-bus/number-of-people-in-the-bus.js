function number(busStops) {
    let totalPeople = 0;  
    
    busStops.forEach(item => {
        totalPeople += item[0] - item[1]; 
    });
    
    return totalPeople;  
}
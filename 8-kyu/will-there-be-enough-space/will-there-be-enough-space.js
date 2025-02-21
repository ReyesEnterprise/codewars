function enough(cap, on, wait) {
  let availableSpace = cap - on;
    return wait <= availableSpace ? 0 : wait - availableSpace;
  }
// Importing RxJS library
const { Observable, interval } = require('rxjs');
const { map } = require('rxjs/operators');

// Package class to represent individual packages
class Package {
  constructor(id, status, location) {
    this.id = id;
    this.status = status;
    this.location = location;
  }
}

// Function to simulate package delivery status updates
function simulatePackageDelivery(packageId) {
  const updateInterval = 3000; // Update interval in milliseconds
  const statuses = ['Processing', 'In transit', 'Out for delivery', 'Delivered'];
  const locations = ['Warehouse', 'Distribution center', 'Local hub', 'Customer location'];

  return interval(updateInterval).pipe(
    map(() => {
      const randomStatusIndex = Math.floor(Math.random() * statuses.length);
      const randomLocationIndex = Math.floor(Math.random() * locations.length);
      return new Package(packageId, statuses[randomStatusIndex], locations[randomLocationIndex]);
    })
  );
}

// Example usage
const packageIds = ["PKG001", "PKG002"];

// Creating an observable for each package ID
const packageObservables = packageIds.map(packageId => simulatePackageDelivery(packageId));

// Merging all package observables into a single stream
const mergedObservable = Observable.merge(...packageObservables);

// Subscribing to the merged observable to receive package updates
mergedObservable.subscribe(package => {
  console.log(`Package ID: ${package.id}, Status: ${package.status}, Location: ${package.location}`);
});

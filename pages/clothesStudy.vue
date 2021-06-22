<template>
	<div>
		<section class="hero is-danger">
			<div class="hero-body">
				<p class="title"><i class="fas fa-dog"></i>의류 매장 정보</p>
				<p class="subtile">
					가까운 의류 매장의 위치를 찾아봅시다.
				</p>
			</div>
		</section>
		<hr />
		<hr />
    <div class="container-fluid mt--7">
      <div class="card shadow border-0">
        <div
          id="map"
          class="map-canvas"
          data-lat="40.748817"
          data-lng="-73.985428"
          style="height: 600px"
        ></div>
      </div>
    </div>
		<section class="box">
			<form @submit.prevent="submitDogName">
				<div class="field">
					<label class="label">의류</label>
					<div class="control">
						<input type="text" v-model="dogName" />
						<button class="button is-link" type="submit">알아보기</button>
					</div>
					<p class="help is-success">
						알아보고 싶은 의류 매장의 이름을 입력하세요.
					</p>
				</div>
			</form>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				dogNameField: 'dogName',
				dogName: null,
			};
		},
		methods: {
			submitDogName() {
				this.$router.push(
					'/studyClothes?' + this.dogNameField + '=' + this.dogName
				);
			},
		},
	};
</script>
<script>
import { Loader } from "google-maps";
const loader = new Loader("AIzaSyDVPerHjZIJeBli_U_naMrf4mRig8qsT3I");
import Firebase from "firebase";
// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDVPerHjZIJeBli_U_naMrf4mRig8qsT3I",
  authDomain: "cloud-clothes.firebaseapp.com",
  databaseURL: "https://cloud-clothes-default-rtdb.firebaseio.com",
  projectId: "cloud-clothes",
  storageBucket: "cloud-clothes.appspot.com",
  messagingSenderId: "371062655392",
  appId: "1:371062655392:web:2fb3438a59030dd439fcc5",
  measurementId: "G-PCNMMGQ2P0"
};
let app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
let locationRef = db.ref("location");
let map, marker;
export default {
  data() {
    return {
      nav: null,
    };
  },
  mounted() {
    loader.load().then(function (google) {
      // Regular Map
      // const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
      const myLatlng = new google.maps.LatLng(
        36.32608511724399,
		127.3386075463675
      );
      const mapOptions = {
        zoom: 20,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        disableDefaultUI: true, // a way to quickly hide all controls
        zoomControl: true,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
          },
        ],
      };
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      
      locationRef.on("value", (snapshot) => {
        let newMaker = { lat: snapshot.val().lat, lng: snapshot.val().lng };

        marker = new google.maps.Marker({
          position: newMaker,
          title: "shop",
          icon: "https://cdn.glitch.com/37d9e42b-5b4d-4b17-9e77-c177a73cd5ec%2Fdasol.png?v=1621847826305",
        });
        marker.setMap(map);
      });
    });
  },
};
</script>
<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiances">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data(){
    return{
      results: [],
      isLoading: false,
      error: null,
    }
  },
  provide(){
    return{
      loadExperiences: this.loadExperiences
    }
  },
  methods: {
    loadExperiances(){
      this.isLoading = true
      fetch('https://vue-http-demo-6e80e-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json')
      .then((res) =>{
        if(res.ok){
          return res.json();
        }
      })
      .then((data) => {
        this.isLoading = false
        const results = []
        for(const id in data){
          results.push({
            id:id,
            name:data[id].name,
            rating:data[id].rating
          })
        }
        this.results = results
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false
        this.error = 'Something went wrong!'
      })
    }
  },
  
  mounted(){
    this.loadExperiances()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
<template>
  <div class="categories">
    <h1>This is an Categories page</h1>
    <ApolloQuery :query="require('../graphql/queries/Categories.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <ul v-else-if="data" class="result apollo">
          <li v-for="category in data.categories" :key="category.id">
            <p>
              <span>Id: {{ category.id }}</span> Title: {{ category.title }}
            </p>
          </li>
        </ul>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: "categories",
  data() {
    return {
      categories: []
    };
  }
};
</script>

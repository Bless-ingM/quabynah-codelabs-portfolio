package dev.quabynahcodelabsllc.viewmodel.datasource.local.database

import androidx.lifecycle.LiveData
import androidx.room.Dao
import androidx.room.Query
import dev.codelabs.template.database.BaseDao
import dev.quabynahcodelabsllc.model.App

@Dao
abstract class AppDao : BaseDao<App> {
    @Query("select * from apps order by id desc")
    abstract suspend fun getAllApps(): LiveData<MutableList<App>>
}
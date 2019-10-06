package dev.quabynahcodelabsllc.viewmodel.repository

import dev.quabynahcodelabsllc.CoreApp
import dev.quabynahcodelabsllc.viewmodel.datasource.local.LocalDataSource
import dev.quabynahcodelabsllc.viewmodel.datasource.remote.RemoteDataSource

interface Repository

class AppRepository(application: CoreApp) : Repository {
    /**
     * [RemoteDataSource] instance
     */
    private val remote: RemoteDataSource by lazy { RemoteDataSource() }
    /**
     * [LocalDataSource] instance
     */
    private val local: LocalDataSource by lazy { LocalDataSource(application) }


}
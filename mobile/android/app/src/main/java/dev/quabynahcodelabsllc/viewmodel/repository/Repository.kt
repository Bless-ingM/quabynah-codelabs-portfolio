package dev.quabynahcodelabsllc.viewmodel.repository

import dev.quabynahcodelabsllc.viewmodel.datasource.local.LocalDataSource
import dev.quabynahcodelabsllc.viewmodel.datasource.remote.RemoteDataSource

interface Repository

class AppRepository(
    private val remote: RemoteDataSource,
    private val local: LocalDataSource
) : Repository